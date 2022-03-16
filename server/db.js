function loadEnpoints() {
    return {
        "techs": require('./endpoints/techs'),
        "clothes": require('./endpoints/clothes'),
        "cars": require('./endpoints/cars')
    };
}

module.exports = loadEnpoints;