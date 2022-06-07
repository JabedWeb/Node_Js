//Custom Module
//Build Module
//Developers Package Module
import http from 'http';
import fs from 'fs';
let output1=fs.readFileSync('./db.json')
let output=JSON.parse(output1);
console.log(output.dev);

//create a server we need createServer module element
http.createServer((req,res)=>{
    if(req.url==='/'){
        //why type content we want to show 
    res.writeHead(200,{'Content-Type':'application/json'})
    //show output after the client request
       res.write(JSON.stringify(output.dev));
    }
    else{
        res.write("Bangladesh")
    }
    //which type of data ? like GET,POST,DELETE,PATCH
    //console.log(req.method);
    res.end()
    //end the server
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
    }).listen(5050,()=>{})
 */





