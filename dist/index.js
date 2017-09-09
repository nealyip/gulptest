"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html
 */
var hello_1 = require("./modules/hello");
var helpers = require("nealyip-aws-lambda-helper/helpers");
var export_default_1 = require("./modules/export.default");
var hello_2 = require("../dist/modules/hello");
function aaa(a) {
    console.log(a);
    var _loop_1 = function (i) {
        setTimeout(function () { return console.log(i); }, i * 100);
    };
    for (var i = 0; i < 1; ++i) {
        _loop_1(i);
    }
    var b = new hello_1.IOAB();
    console.log(b.dwdwdw);
    console.log(helpers.dateBefore(3));
}
export_default_1.default();
aaa('b');
var c = new hello_2.IOAB();
console.log(c.dwdwdw);
var ddee = new hello_1.DDEE();
