// import json server ---- import in variable
const jsonServer = require('json-server')

// create server for mp
const TEServer = jsonServer.create()

// create middleware used by JSON Server
const middleware = jsonServer.defaults()

// setup route for json file
const route = jsonServer.router('db.json')

// setup port for running server app
const PORT = 3000 || process.env.PORT


TEServer.use(middleware)
TEServer.use(route)
TEServer.listen(PORT,()=>{
    console.log(`Test Employee Server started at port ${PORT} and waiting for client request`);
})