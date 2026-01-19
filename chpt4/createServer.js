const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{ 'Content-Type' : 'text/html; charset=urf-8'});
    res.write('<h1>Hello Node!');
    res.end('<p>Hello Server!</p>');
});

server.listen(8008);

server.on('listening', () => {
    console.log('8008번  포트에서 대기 중 입니다.');
});

server.on('error',(error) => {
    console.error(error);
});