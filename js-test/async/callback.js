// 'useStrict';
//
// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if (id === "jun" && password === "1234") {
//                 onSuccess(id)
//             } else {
//                 onError(new Error('not found'))
//             }
//         }, 2000)
//     }
//
//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === "jun") {
//                 onSuccess({name: "jun", role: 'admin'})
//             } else {
//                 onError(new Error('no access'))
//             }
//         }, 2000)
//
//     }
//
// }
//
//
// const userStorage = new UserStorage()
// const id = prompt('enter your id')
// const password = prompt('enter your pwd')
// userStorage.loginUser(id, password, (user) => {
//     console.log("success Login")
//     userStorage.getRoles(user, userWithRole => {
//         alert(`hello ${userWithRole.name}`), error => {
//             console.log(error)
//         }
//     })
// }, error => console.log(error))
//
//
// // 1.Producer
// const promise = new Promise((resolve, reject) => {
//         console.log('promise instance has been made');
//         // 네트워크 통신 가정
//         setTimeout(() => {
//             // resolve("promise task has succeed")
//             reject(new Error('failed'))
//         }, 2000)
//     }
// )
//
// // 2. Consumers: then, catch, finally
// promise.then((value) => {
//     console.log(value)
// }).catch((error) => console.log(error)
// )
//
// // 3. Promise Chaining & Error Handling
// const getHen = () => new Promise((resolve, reject) => {
//     setTimeout(() => resolve("chicken"), 1000)
// })
//
// const getEgg = (hen) => new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(`error! ${hen}`)), 1000)
// })
//
// const cook = (egg) => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} -> success`))
// })
//
// getHen()
//     .then(getEgg)
//     .catch(
//         error => {
//             return "error 일때 대체 egg 반환"
//         }
//     )
//     .then(cook)
//     .then(console.log)