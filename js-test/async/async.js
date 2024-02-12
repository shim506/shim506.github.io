/**
 * async & await
 * clear style of using promise
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(500)
    return "apple"
}

async function getBanana() {
    await delay(500)
    return "Banana"
}

async function getFruits() {
    // return getApple().then(apple => {
    //     return getBanana().then(banana => )
    // })

    return getApple().then(apple =>
        getBanana().then(banana => {
                return `${apple} + ${banana}`
            }
        )
    )
}


getFruits().then(console.log)