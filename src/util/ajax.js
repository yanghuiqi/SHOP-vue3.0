import cryptojs from 'crypto-js'
import axios from 'axios'

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const crypt = () => {
	let len = 16
	const str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	let result = ""
	while (len--) {
		result += str[rand(0, str.length - 1)]
	}
	return result
}

axios.defaults.timeout = 10000
axios.defaults.retry = 4
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
	if (config.data && !config.__retryCount) { //判断是否第一次发起请求   与请求的数据是否存在
		const key = cryptojs.enc.Latin1.parse('5AA765D61D8327DE')
		const ivs = crypt()
		const iv = cryptojs.enc.Latin1.parse(ivs)
		for (const k in config.data) {
			config.data[k] = cryptojs.AES.encrypt(config.data[k] + "", key, {
				iv,
				mode: cryptojs.mode.CBC,
				padding: cryptojs.pad.ZeroPadding
			}).toString()
		}
		config.data.iv = ivs
	}
	return config
})

axios.interceptors.response.use(res => {
	if (res.status === 654) {
		console.warn('请求超时！')
	}
	if (res.data.code < 200 || res.data.result > 300) {
		console.warn('数据返回有误')
		return Promise.reject(res)
	}
	if (res.data.token) {
		localStorage.setItem("eleme_billson_token", res.data.token)
	}
	if (res.data.result && res.data.result.iv) { //解密
		const key = cryptojs.enc.Latin1.parse('5AA765D61D8327DE')
		const iv = cryptojs.enc.Latin1.parse(res.data.result.iv)
		const decrypted = cryptojs.AES.decrypt(res.data.result.data, key, {
			iv,
			padding: cryptojs.pad.ZeroPadding
		})
		const {
			data
		} = res
		data.result = JSON.parse(decrypted.toString(cryptojs.enc.Utf8))											//强制简单伪造离线数据  =>  IndexedDB
		const Name = res.config.url + (res.config.data ? JSON.stringify(res.config.data) : "")
		localStorage.setItem(Name, JSON.stringify(data))
		return data
	}
	const Name = res.config.url + (res.config.data ? JSON.stringify(res.config.data) : "")
	localStorage.setItem(Name, JSON.stringify(res.data))
	return res.data
}, (error) => {
	const {
		config
	} = error
	if (!config || !config.retry) return Promise.reject(error)
	config.__retryCount = config.__retryCount || 0

	if (config.__retryCount >= config.retry) {
		console.log('promise error:' + error)
		return Promise.reject(error)
	}
	config.__retryCount += 1

	const backoff = new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, config.retryDelay || 1)
	})
	
	return backoff.then(() => axios(config))
})

export default axios