import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';


import Table from '../blocks/modules/table/table.js';
import Form from '../blocks/modules/form/form.js';
import Filter from '../blocks/modules/filtr/filtr.js';
import Tabs from '../blocks/modules/tabs/tabs.js';

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;



window.first_table = new Table('.table__js', '#table');
window.second_table = new Table('.table__js', '#table2');
window.first_form = new Form('#personalForm1');
window.second_form = new Form('#personalForm2');
window.filter = new Filter('#personalForm2');
window.tabs = new Tabs();

if (isSafari) {
    $('.wrapper').addClass('isSafari');
}

$(document).ready(function() {
    second_table.init();
    first_table.init();
    first_form.init();
    second_form.init();
    tabs.init();
    filter.init();
})



















