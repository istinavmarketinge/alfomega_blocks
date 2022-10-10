const Table = class Table {
    constructor(selector = ".table", id = '#table') {
        this.selector = selector;
        this.id = id;
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
    initDataTable() {
        $(`${this.id}`).dataTable();
    }
    init() {
        // this.setTableEditable();
        this.initDataTable();
    }
}


export default Table;