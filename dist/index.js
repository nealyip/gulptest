"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./modules/hello");
var helpers = require("nealyip-aws-lambda-helper/helpers");
function aaa(a) {
    console.log(a);
    var _loop_1 = function (i) {
        setTimeout(function () { return console.log(i); }, i * 500);
    };
    for (var i = 0; i < 10; ++i) {
        _loop_1(i);
    }
    var b = new hello_1.A();
    console.log(helpers.dateBefore(3));
}
aaa('b');
