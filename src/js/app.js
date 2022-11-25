import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import Table from '../blocks/modules/table/table.js';

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;



window.first_table = new Table('.table__js', '#table');

if (isSafari) {
    $('.wrapper').addClass('isSafari');
}

$(document).ready(function() {
    first_table.init();
})



















