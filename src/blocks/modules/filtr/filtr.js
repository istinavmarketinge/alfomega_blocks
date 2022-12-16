import $ from 'jquery';

const Filter = class Filter {
    constructor() {}
    initRangeSlider() {

        $('input[type="range"]').on( 'input', (event) => {
            this.rangeInputChangeEventHandler(event);
        });
    }
    addSeparator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }
    rangeInputChangeEventHandler(e){
        console.log($('input[type="range"]').context)
        var rangeGroup = $('input[type="range"]').attr('name'),
            minBtn = $('input[type="range"]').parent().children('.min'),
            maxBtn = $('input[type="range"]').parent().children('.max'),
            range_min = $('input[type="range"]').parent().children('.range_min'),
            range_max = $('input[type="range"]').parent().children('.range_max'),
            minVal = parseInt($(minBtn).val()),
            maxVal = parseInt($(maxBtn).val()),
            origin = $('input[type="range"]').attr('class');

        if(origin === 'min' && minVal > maxVal-5){
            $(minBtn).val(maxVal-5);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).html(this.addSeparator(minVal*1000) + ' ₽');


        if(origin === 'max' && maxVal-5 < minVal){
            $(maxBtn).val(5+ minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html(this.addSeparator(maxVal*1000) + ' ₽');
    }
    init() {
        this.initRangeSlider();
    }
}

export default Filter;