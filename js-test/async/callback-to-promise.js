'useStrict';

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === "jun" && password === "1234") {
                    console.log("hi")
                    resolve(id)
                } else {
                    console.log("bad")
                    reject(new Error('not found'))
                }
            }, 1000)
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "jun") {
                    resolve({name: "jun", role: 'admin'})
                } else {
                    reject(new Error('no access'))
                }
            }, 1000)
        })
    }

}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your pwd')

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(({name, role}) => console.log(role))
    .catch((error) => console.log(`the error is: ${error}`))