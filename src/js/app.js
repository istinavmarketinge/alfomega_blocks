import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';



var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;





if (isSafari) {
    $('.wrapper').addClass('isSafari');
}
