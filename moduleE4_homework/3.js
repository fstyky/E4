function noProp() {
    let obj = Object.create(null);
    return obj
}
const res = noProp()
console.log(res)