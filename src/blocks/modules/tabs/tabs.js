import $ from 'jquery';

const Tabs = class Tabs {
    constructor() {}
    addCartPreviewToggleHandler() {
        if (!document.querySelector('.personalTabs__cart-in')) return;
        $('.personalTabs__cart-in').on('click', function () {
            $('.personalTabs__cart-dropdown').slideToggle();
        });
    }
    addCartPreviewCloseHandler() {
        if (!document.querySelector('.personalTabs__cart-dropdown_closer')) return;
        $('.personalTabs__cart-dropdown_closer').on('click', function () {
            $('.personalTabs__cart-dropdown').slideUp();
        });
    }
    init() {
        this.addCartPreviewToggleHandler();
        this.addCartPreviewCloseHandler();
    }
}

export default Tabs;