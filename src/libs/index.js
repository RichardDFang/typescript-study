"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
jquery_1["default"]('.app').css('color', 'red');
globalLib({ x: 1 });
var module_lib_1 = require("./module-lib");
module_lib_1["default"].doSomething();
var umd_lib_1 = require("./umd-lib");
umd_lib_1["default"].doSomething();
var moment_1 = require("moment");
moment_1["default"].myFunction = function () {
};
globalLib.doAnything = function () { };
