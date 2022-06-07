/**create some folder like 'controller,data.models'
 * npm init -y
 */

import http from 'http';

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type' : 'application/json'});
    res.end()

}).listen(5050,()=>{

})