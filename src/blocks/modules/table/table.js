const Table = class Table {
    constructor(selector = ".table") {
        this.selector = selector;
    }
    setTableEditable() {
        document.querySelectorAll(this.selector).forEach(item => {
            item.querySelectorAll('td').forEach(td => {
                td.addEventListener('mouseenter', (event) => {
                    event.target.setAttribute('contenteditable', true)
                });
                td.addEventListener('mouseleave', (event) => {
                    event.target.setAttribute('contenteditable', true)
                })
            })
        })
    }
    init() {
        this.setTableEditable();
    }
}


export default Table;