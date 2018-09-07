// let DB
// const openDB = (name, version) => {
//     const v = version || 1
//     return new Promise((resolve, reject) => {
//         if (!window.indexedDB.open(name, v)) {
//             reject()
//         }
//         const Database = window.indexedDB.open(name, version)
//         Database.onerror = e => console.warn("连接数据库出错", e)

//         Database.onsuccess = e => {
//             DB = e.target.result
//             resolve(DB)
//             console.log("获取DB实例对象 -> target -> result", e)
//         }

//         Database.onupgradeneeded = e => {
//             console.log('DB version change to ' + v)
//             DB = e.target.result
//             resolve(DB)
//             console.log('onupgradeneeded: db->', e)
//         }
//     })
// }

// const get = (table, key) => {
//     return new Promise((resolve, reject) => {
//         try {
//             const transaction = DB.transaction(table, 'readwrite')
//             const store = transaction.objectStore(table)
//             const dataRequest = store.get(key)
//             dataRequest.onsuccess = e => {
//                 const data = e.target.result
//                 resolve(data)
//                 console.log("获取到的数据:", e)
//             }
//         } catch (error) {
//             console.log("数据库获取数据失败", error)
//             reject()
//         }
//     })
// }

// const updata = (table, student) => {
//     return new Promise((resolve, reject) => {
//         try {
//             const transaction = DB.transaction(table, 'readwrite')
//             const store = transaction.objectStore(table)
//             store.put(student)
//             console.log("数据库更新数据成功")
//             resolve()
//         } catch (error) {
//             console.log("更新数据库失败", error)
//             reject()
//         }
//     })
// }

// const remove = (table, key) => {
//     return new Promise((resolve, reject) => {
//         try {
//             const transaction = DB.transaction(table, 'readwrite')
//             const store = transaction.objectStore(table)
//             store.delete(key)
//             resolve()
//         } catch (error) {
//             console.log("删除数据库的键失败", error)
//             reject()
//         }
//     })
// }

// const clearAll = (table) => {
//     return new Promise((resolve, reject) => {
//         try {
//             const transaction = DB.transaction(table, 'readwrite')
//             const store = transaction.objectStore(table)
//             store.clear()
//             console.log("清空数据库成功")
//             resolve()
//         } catch (error) {
//             console.log("清空数据库出错", error)
//             reject()
//         }
//     })
// }

// export default {
//     openDB,
//     get,
//     updata,
//     remove,
//     clearAll
// }
