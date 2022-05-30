import http from 'http';
import fs from 'fs'
let text=fs.readFileSync('./data.json')
let data=JSON.parse(text);
let data1=JSON.stringify(data)
console.log(data);
console.log(data1);jabed@880

http.createServer((req,res)=>{

    console.log(req.url);
   
    res.writeHead(200,{'Content-Type' : 'application/json'})

    
    if(req.url==='/'){
        res.write(text)
    }
    if(req.url==='/devs'){
        res.write(JSON.stringify(data.devs))
    }
    else{
        res.write(JSON.stringify({
            status : "data Fatal"
        }))
    }
    res.end();

}).listen('5050',()=>{
    console.log('Hellow Bangladesh');
});

//http.createServer().listen('5050');




/**
 * Path module
 * import {basename,dirname,extname,parse} from 'path'

 //const url=basename('https://jabed.com/box');
 //output box

 //const url=dirname('https://jabed.com/box/');
 //output https://jabed.com/box

 //const url=extname('https://jabed.com/box/index.php');
 //output php

 const url=parse('https://jabed.com/box/index.php');
 //output php


 console.log(url);
 */


 


 //Url Module
/**import {parse} from 'url';
const url=parse('https://jabed.com?name=kasem')
console.log(url);
// 


//File Module
/*
import {writeFileSync,appendFileSync,readFileSync,renameSync,unlinkSync} from "fs"
writeFileSync('data.txt','Hi Node,You are');
appendFileSync('data.txt','\nHi Node,You are beauty');

let data=readFileSync('./db.json')
console.log(data.toString());
renameSync('./db.json','data.json');
unlinkSync('text.txt')
 
 */

 


/**Sync method with common js type
 *const fs=require('fs');
 * fs.writeFileSync('text.txt','Hi')
 *  
 * const{writeFileSync}=require('fs')
 * writeFileSync('text.txt','Hi')
*/





/**
 commonjsOldJavascipt
const func=require('./function')
const {ageCal,info,devs}=require('./function')
console.log(func.ageCal("Name",2020));
console.log(ageCal("Name",2020));
 */


/**
 module ES6  
import { ageCal,info } from "./function.js";

console.log(ageCal('Jabed',2000));
console.log(info('Jabed',"Ios Developer"));
 */
