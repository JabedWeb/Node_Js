/**create some folder like 'controller,data.models'
 * npm init -y to get default schema (package.json)
 * npm install nodemon 
 * to make env file then env variable (to know our project mode ) port number,security code 
 * npm install dotenv (env package)
 */

import http from 'http';
import {readFileSync,writeFileSync} from 'fs'
import dotenv from 'dotenv';
import { studentId } from './utility/studentId.js';

//environment init

//to access anything from the env file
dotenv.config();
//=========

const PORT=process.env.SERVER_PORT

//Data Management
const student_json=readFileSync('./data/students.json');
const student_obj=JSON.parse(student_json)

http.createServer((req,res)=>{
    //all data show 
    if(req.url=='/api/students/' && req.method=='GET'){
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.end(student_json)
    }
    //Get single data show
    else if(req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=='GET'){
        res.writeHead(200,{'Content-Type' : 'application/json'});
        const id =req.url.split('/')[3];
        //Find method apply object data not json
        res.end(JSON.stringify(student_obj.find(data=> data.id==id)))
    }
    if(req.url=='/api/students/' && req.method=='POST'){
       
        let data='';
        //To receive data
        req.on('data',(chunk)=>{
            data+=chunk.toString();
        })
        //to push data
        req.on('end',()=>{
            let {name,skill}=JSON.parse(data);
            student_obj.push({
                id : studentId(student_obj),
                name :name,
                skill : skill
            })
            writeFileSync('./data/students.json',JSON.stringify(student_obj))
        })
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.end('Done')
        
    }

    else{ 
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.end(JSON.stringify({
            message : "Student not found"
        }))
       }
}).listen(PORT,(err)=>{
    console.log(`server is running on port ${PORT}`);
})