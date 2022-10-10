import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import Table from '../blocks/modules/table/table.js';

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;



window.first_table = new Table('.table__js');
window.second_table = new Table('.table2asdasd__js');

if (isSafari) {
    $('.wrapper').addClass('isSafari');
}


// window.first_table.test = function() {
//     console.log(123123123);
// }

$(document).ready(function() {
    first_table.init('.table', '#table');
    second_table.init();
})



















