const server = require('./server/app')

server.listen().then( ( {url} ) => console.log(`application running in ${url}`))