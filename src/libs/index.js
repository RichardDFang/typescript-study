"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default('.app').css('color', 'red');
globalLib({ x: 1 });
var module_lib_1 = __importDefault(require("./module-lib"));
module_lib_1.default.doSomething();
var umd_lib_1 = __importDefault(require("./umd-lib"));
umd_lib_1.default.doSomething();
var moment_1 = __importDefault(require("moment"));
moment_1.default.myFunction = function () {
};
globalLib.doAnything = function () { };
