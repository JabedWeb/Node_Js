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
        let id =req.url.split('/')[3];
        if(student_obj.some(stu=> stu.id == id)){
            //Find method apply object data not json
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify(student_obj.find( data=> data.id == id)))
        }
        else {
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify({
                message : "Student not found"
            }))
        }
        
        
    }
    //new add Students
    else if(req.url=='/api/students/' && req.method=='POST'){
       
        let data='';
        //To receive data
        req.on('data',(chunk)=>{
            data+=chunk.toString()
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
        res.end(JSON.stringify({
            message : "Student Added"
        }))
        
    }
        //Delete Student data
        else if (req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=='DELETE'){

            let id =req.url.split('/')[3];
    
            if(student_obj.some(stu=>stu.id==id)){
                res.writeHead(200,{'Content-Type' : 'application/json'});
                let delete_data=JSON.stringify(student_obj.filter( data=> data.id != id))
                writeFileSync('./data/students.json',delete_data)
                res.end(JSON.stringify({
                    message : "Student Data Deleted"
                }))
            }
            else{
                res.writeHead(200,{'Content-Type' : 'application/json'});
                res.end(JSON.stringify({
                    message : "Student not deleted"
                }))
            }
        }
        //Student Data Edited
        else if(req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=='PUT'){
            let id =req.url.split('/')[3];
            let data='';
            if(student_obj.some(stu=>stu.id==id)){
                req.on('data',(chunk)=>{
                    data+=chunk.toString()
                })
                req.on('end',()=>{
                    let update_data=JSON.parse(data)
                    student_obj[student_obj.findIndex(stu=>stu.id==id)]={
                        id : id,
                        name : update_data.name,
                        skill : update_data.skill
                    }
                    writeFileSync('./data/students.json',JSON.stringify(student_obj))
                })
                res.writeHead(200,{'Content-Type' : 'application/json'});
            }
            else{
                res.writeHead(200,{'Content-Type' : 'application/json'});
                res.end(JSON.stringify({
                    message : "Student not deleted"
                }))
            }

           

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