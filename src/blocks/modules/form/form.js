import $ from 'jquery';

const Form = class Form {
    constructor(formId = '#personalForm') {
        this.formId = formId;
    }
    toggleForm() {
        console.log(this.formId);
        if (!document.querySelector(this.formId)) return;
        $(this.formId).find('.personalForm__opener').on('click', function() {
            $(this).toggleClass('isOpened').closest('.personalForm').find('.personalForm__fields').slideToggle();
        })
    }
    init() {
        this.toggleForm();
    }
}

export default Form;