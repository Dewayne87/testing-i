success = (item) => {

}

fail= (item) => {

}

repair = (item) => {
return Object.assign({},item, {durability:100} )
}

module.exports = {
    success,
    fail,
    repair
}