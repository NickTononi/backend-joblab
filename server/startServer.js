// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(loadEnpoints())
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 8080, () => {
  console.log('JSON Server is UP!')
})

function loadEnpoints() {
    return {
        "techs": require('./endpoints/techs'),
        "clothes": require('./endpoints/clothes'),
        "cars": require('./endpoints/cars')
    };
}