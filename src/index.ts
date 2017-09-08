/**
 * https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
 */
import {A} from "./modules/hello";
import helpers = require("nealyip-aws-lambda-helper/helpers");

function aaa(a:string){
    console.log(a);
    for (let i =0; i< 10; ++i) {
        setTimeout(()=>console.log(i), i *100);
    }
    let b = new A();
    console.log(helpers.dateBefore(3));
}

aaa('b');