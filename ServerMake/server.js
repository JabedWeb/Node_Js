import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs'

//environmental init
dotenv.config();
const PORT=process.env.SERVER_PORT

//Data Management
const students_json=fs.readFileSync('./data/students.json')
const students_obj=JSON.parse(students_json);
console.log(students_obj);

//Create Server
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.write(students_obj);
    res.end(students_obj);
}).listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})