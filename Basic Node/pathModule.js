//import path from 'path';
import {basename,dirname,extname,parse} from 'path';

//basename module element represent the last directory any url link
const url=basename('https://shadhinweb.com/shop/box')
console.log(url);
//for this url output will be "BOX" directory

/**direname Module Element
 * its used for to know last directory stay which directory path
 */
const dir=dirname('https://shadhinweb.com/shop/box')
console.log(dir);
//for this url output will be https://shadhinweb.com/shop/


/**extname Module Element
 * its used for to know file name
 */
const file_name=extname('https://shadhinweb.com/shop/box/index.js')
console.log(file_name);
//for this url output will be .js

/**parse Module Element
 * its used for to know root and we get a object where filename,dirname etx exist 
 */
 const Parse=parse('https://shadhinweb.com/shop/box/index.js')
 console.log(Parse);

 /** //for this url output will be {
    dir: 'https://shadhinweb.com/shop/box',
    base: 'index.js',
    ext: '.js',
    name: 'index'}
  */