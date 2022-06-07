import http from 'http';
import fs from 'fs';
let output=fs.readFileSync('./db.json')
//create a server we need createServer module element

http.createServer((req,res)=>{
    //why type content we want to show 
    res.writeHead(200,{'Content-Type':'text/html'})
    //show output after the client request
    res.write(output)
    //end the server
    res.end()
}).listen('5050',()=>{
    console.log('our server is running on');
});

/**
 * http.createServer().listen(5050)
 * http.createServer().listen(5050,()=>{})
 * http.createServer((req,rest)=>{}).listen(5050,()=>{})
 * http.createServer((req,rest)=>{
    rest.writeHead()
    res.write()
    rest.end()
 * }).listen(5050,()=>{})
 */





