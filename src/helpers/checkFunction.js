function checkFunction(obj, str) {
    let arr = str.split(".")
    for (let key of arr) {
        if (obj[key]) obj = obj[key]
        else return null
    }
    return obj
}
export default checkFunction