const http = require('http');

const server = http.createServer((req, res)=> {
    res.write('Hello this is Aniket jatt');
    res.end();
})

server.listen(5000, ()=> {
    console.log('starting server ...')
});

