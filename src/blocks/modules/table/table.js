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
                $(td).not('[data-prevent_edit]').on('click', (event) => {
                    event.target.setAttribute('contenteditable', true);
                    event.target.focus();
                });
                $(td).not('[data-prevent_edit]').on('blur', (event) => {
                    event.target.setAttribute('contenteditable', false)
                })
            })
        })
    }
    initDataTable() {
        let self = this;
        this.table = $(`${this.id}`).dataTable({
            initComplete: function () {
                self.addPageSelector(this);
            },
            searching: false,
            responsive: true,
            pagingType: 'simple',
            'buttons-action': function() {
                console.log(1231321);
            },
            language: {
                paginate: {
                    first:      "В начало",
                    previous:   "Назад",
                    next:       "Вперед",
                    last:       "В конец"
                },
            }
        });

        
        
    }
    addPageSelector(table) {
        console.log('addPageSelector')
        $(table[0]).siblings('.dataTables_paginate').wrap('<div class="table__pagination"></div>');
        let pagesCount = table.api().page.info().pages;
        let pageNumber = table.api().page.info().page;
        $(table[0]).siblings('.table__pagination').prepend(`<div class="table__counter"><div class="input"><input type="number" value="${pageNumber+1}" min="1" max="${pagesCount}" /></div><div class="count">/ ${pagesCount}</div></div>`);
        $(table[0]).siblings('.table__pagination').find('.table__counter').on('click', function(event) {
            event.stopPropagation();
        })
    }
    redrawPager() {
        console.log('redrawPager');
        console.log(this.table);
        let pagesCount = this.table.api().page.info().pages;
        let pageNumber = this.table.api().page.info().page;
        let input = $(this.id).siblings('.table__pagination').find('.table__counter input');
        console.log(pagesCount, pageNumber, input);
        input.val(pageNumber+1);
    }
    init() {
        this.initDataTable();
        let self = this;
        $(`${this.id}`).siblings('.table__pagination').on('click', function() {
            self.redrawPager(this);
        });
    }
}


export default Table;