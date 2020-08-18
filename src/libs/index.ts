import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({x: 1})

import moduleLib from './module-lib'

moduleLib.doSomething();

import umdLib from './umd-lib'

umdLib.doSomething();

import moment from 'moment'

declare module 'moment' {
    function myFunction(): void
}

moment.myFunction = () => {

}

declare global {
    namespace globalLib {
        function doAnything(): void
    }
}

globalLib.doAnything = () => {}