import store from '@/store/index'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
//views-box
const Yohoview = () =>
	import('@/views/YohoView.vue')
const YohoHome = () =>
	import('@/views/Tabbar/YohoHome.vue')
const YohoClassify = () =>
	import('@/views/Tabbar/YohoClassify.vue')
const YohoCart = () =>
	import('@/views/Tabbar/YohoCart.vue')
const YohoPersonal = () =>
	import('@/views/Tabbar/YohoPersonal.vue')

//Goods
const YohoGoodsList = () =>
	import('@/views/Goods/YohoGoodsList.vue')
const YohoGoods = () =>
	import('@/views/Goods/YohoGoods.vue')
//order-box
const YohoOrderList = () =>
	import('@/views/Order/YohoOrderList.vue')
const YohoOrderInfo = () =>
	import('@/views/Order/YohoOrderInfo.vue')
const YohoOrderConfirm = () =>
	import('@/views/Order/YohoOrderConfirm.vue')
//address-box
const YohoAddress = () =>
	import('@/views/Address/YohoAddressList.vue')
const YohoAddressEdit = () =>
	import('@/views/Address/YohoAddressEdit.vue')
const YohoAddressMap = () =>
	import('@/views/Address/YohoAddressMap.vue')
//common
const YohoCoupon = () =>
	import('@/views/Common/YohoCoupon.vue')
const YohoCollect = () =>
	import('@/views/Common/YohoCollect.vue')
const YohoSetting = () =>
	import('@/views/Common/YohoSetting.vue')
const YohoLogin = () =>
	import('@/views/Common/YohoLogin.vue')
const YohoRegister = () =>
	import('@/views/Common/YohoRegister.vue')

const router = new Router({
	mode: 'hash',
	routes: [{
		name: 'index',
		path: '/',
		component: Yohoview,
		meta: {
			title: "SHOP",
			description: "SHOP,电商,购物,测试,侵删,Billson"
		},
		redirect: '/home',
		children: [{
			name: 'YohoHome',
			path: '/home',
			component: YohoHome,
			meta: {
				title: "首页",
				description: "SHOP,测试,侵删,Billson - 首页"
			}
		}, {
			name: 'YohoClassify',
			path: '/cate',
			component: YohoClassify,
			meta: {
				title: "分类",
				description: "SHOP,测试,侵删,Billson - 分类"
			}
		}, {
			name: 'YohoCart',
			path: '/cart',
			component: YohoCart,
			meta: {
				title: "购物车",
				description: "SHOP,测试,侵删,Billson - 购物车",
				requireAuth: true
			}
		}, {
			name: 'YohoPersonal',
			path: '/personal',
			component: YohoPersonal,
			meta: {
				title: "个人",
				description: "SHOP,测试,侵删,Billson - 个人"
			}
		}]
	}, {
		path: '/goods',
		name: 'YohoGoodsList',
		component: YohoGoodsList,
		meta: {
			title: "商品列表",
			description: "SHOP,测试,侵删,Billson - 商品列表"
		}
	}, {
		path: '/goods/:id',
		name: 'YohoGoods',
		component: YohoGoods,
		meta: {
			title: "商品详情",
			description: "SHOP,测试,侵删,Billson - 商品详情"
		}
	}, {
		path: '/coupon',
		name: 'YohoCoupon',
		component: YohoCoupon,
		meta: {
			title: "优惠券",
			description: "SHOP,测试,侵删,Billson - 优惠券"
		}
	}, {
		path: '/login',
		name: 'YohoLogin',
		component: YohoLogin,
		meta: {
			title: "登录",
			description: "SHOP,测试,侵删,Billson - 用户登录"
		}
	}, {
		path: '/register',
		name: 'YohoRegister',
		component: YohoRegister,
		meta: {
			title: "注册",
			description: "SHOP,测试,侵删,Billson - 用户注册"
		}
	}, {
		path: '/address',
		name: 'YohoAddress',
		component: YohoAddress,
		meta: {
			title: "收货地址",
			description: "SHOP,测试,侵删,Billson - 收货地址",
			requireAuth: true
		}
	}, {
		path: '/address/edit/:id',
		name: 'YohoAddressEdit',
		component: YohoAddressEdit,
		meta: {
			title: "添加收货地址",
			description: "SHOP,测试,侵删,Billson - 添加收货地址",
			requireAuth: true
		}
	}, {
		path: '/address/add',
		name: 'YohoAddressAdd',
		component: YohoAddressEdit,
		meta: {
			title: "编辑收货地址",
			description: "SHOP,测试,侵删,Billson - 编辑收货地址",
			requireAuth: true
		}
	}, {
		path: '/address/map',
		name: 'YohoAddressMap',
		component: YohoAddressMap,
		meta: {
			title: "地区选择",
			description: "SHOP,测试,侵删,Billson - 地区选择",
			requireAuth: true
		}
	}, {
		path: '/collect',
		name: 'YohoCollect',
		component: YohoCollect,
		meta: {
			title: "收藏",
			description: "SHOP,测试,侵删,Billson - 用户收藏",
			requireAuth: true
		}
	}, {
		path: '/setting',
		name: 'YohoSetting',
		component: YohoSetting,
		meta: {
			title: "设置",
			description: "SHOP,测试,侵删,Billson - 用户设置",
			requireAuth: true
		}
	}, {
		path: '/order',
		name: 'YohoOrderList',
		component: YohoOrderList,
		meta: {
			title: "订单列表",
			description: "SHOP,测试,侵删,Billson - 订单列表",
			requireAuth: true
		}
	}, {
		path: '/order/:id',
		name: 'YohoOrderInfo',
		component: YohoOrderInfo,
		meta: {
			title: "订单详情",
			description: "SHOP,测试,侵删,Billson - 订单详情",
			requireAuth: true
		}
	}, {
		path: '/confirm',
		name: 'YohoOrderConfirm',
		component: YohoOrderConfirm,
		meta: {
			title: "确认下单",
			description: "SHOP,测试,侵删,Billson - 确认下单",
			requireAuth: true
		}
	}, {
		path: '*',
		redirect: '/home'
	}]
})

router.beforeEach((to, from, next) => {
	if (to.meta && to.meta.title) {
		document.title = to.meta.title
	}
	if (to.meta && to.meta.description) {
		// document.getElementById("description").setAttribute("content", to.meta.description)
	}
	if (to.meta && to.meta.requireAuth) {
		if (store.getters.token !== "" || localStorage.getItem("yoho_billson_token")) {
			next()
		} else {
			next({
				path: '/login'
			})
		}
	} else {
		next()
	}
})

export default router