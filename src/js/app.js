import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';


import Table from '../blocks/modules/table/table.js';
import Form from '../blocks/modules/form/form.js';

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;



window.first_table = new Table('.table__js', '#table');
window.first_form = new Form('#personalForm1');
window.second_form = new Form('#personalForm2');

if (isSafari) {
    $('.wrapper').addClass('isSafari');
}

$(document).ready(function() {
    first_table.init();
    first_form.init();
    second_form.init();
})



















