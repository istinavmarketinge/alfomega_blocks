const Table = class Table {
    constructor(selector = ".table", id = '#table') {
        this.selector = selector;
        this.id = id;
        this.table = null;
        console.log(this.selector, this.id);
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
        this.table = $(`${this.id}`).dataTable({
            searching: false,
        });
    }
    init() {
        // this.setTableEditable();
        this.initDataTable();
        console.log(this.table);
    }
}


export default Table;