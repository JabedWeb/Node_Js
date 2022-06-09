//==============================
//**=======Type of CommonJs====*/
//=============================

const fs=require('fs')
/**=============Asynchronous Module=======================*/
//It's a best Practice as well
fs.writeFile('data.txt','Hi Notes',(err,data)=>{
    console.log(err);
})
/**=============synchronous Module=======================*/
fs.writeFileSync('text.txt','Hi node ,You are Awesome')



//=====================================
/**=======TYPE OF MODULE============== */
//======================================
/**
 * it's update (ES6)
 * its best practice as well
 */

import {writeFileSync,appendFileSync,readFileSync,readFile,unlink} from 'fs';
// WARNING
/**import {fs} from 'fs';
 * fs.writeFile it doesn't allow it
*/

//For single text or overwrite the text 
writeFileSync('dev.txt','we are best Friend');

//for writting more text in the same file
appendFileSync('dev.txt','we are best Friend');

//For Reading any file
let data=readFileSync('./db.json')
console.log(data.toString());


/**=============Asynchronous Module=======================*/

//For Reading any file
readFile('./db.json',(err,data)=>{
    console.log(data.toString());
})


//for deleting file
unlink('update.txt',(err,data)=>{
    console.log(err);
})
