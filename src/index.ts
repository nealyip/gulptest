/**
 * https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
 */
import {IOAB} from "./modules/hello";
import helpers = require("nealyip-aws-lambda-helper/helpers");
import babc from "./modules/export.default";

function aaa(a:string){
    console.log(a);
    for (let i =0; i< 1; ++i) {
        setTimeout(()=>console.log(i), i *100);
    }
    let b = new IOAB();
    console.log(b.dwdwdw);
    console.log(helpers.dateBefore(3));
}
babc();
aaa('b');