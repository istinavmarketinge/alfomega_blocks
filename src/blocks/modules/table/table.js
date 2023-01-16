const Table = class Table {
    constructor(selector = ".table", id = '#table') {
        this.selector = selector;
        this.id = id;
        this.table = null;
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
                self.addPaddingToPager();
                self.addEditClickHandler();
                self.addSaveClickHandler();
            },
            searching: false,
            responsive: true,
            pagingType: 'simple',
            columnDefs: [
                { responsivePriority: 13, targets: -1 }
            ],
            language: {
                paginate: {
                    first:      "В начало",
                    previous:   "Назад",
                    next:       "Вперед",
                    last:       "В конец"
                },
                zeroRecords: "Мы ничего не нашли в таблице",
            }
        });        
    }
    addPaddingToPager() {
        setTimeout(() => {
            const width = $(`${this.id} tr td:last-child`).innerWidth();
            $(`${this.id}`).siblings('.table__pagination').css('padding-right', `${Math.round(width)}px`);
        }, 0)
    }
    addPageSelector(table) {
        $(table[0]).siblings('.dataTables_paginate').wrap('<div class="table__pagination"></div>');
        let pagesCount = table.api().page.info().pages;
        let pageNumber = table.api().page.info().page;
        $(table[0]).siblings('.table__pagination').prepend(`<div class="table__counter"><div class="input"><input type="text" value="${pageNumber+1}" min="1" max="${pagesCount}" /></div><div class="count">/ ${pagesCount}</div></div>`);
    }
    redrawPager() {
        let pagesCount = this.table.api().page.info().pages;
        let pageNumber = this.table.api().page.info().page;
        let input = $(this.id).siblings('.table__pagination').find('.table__counter input');
        let pages_counter = $(this.id).siblings('.table__pagination').find('.table__counter .count');
        pages_counter.text(`/ ${pagesCount}`);
        input.prop('max', pagesCount);
        input.val(pageNumber+1);
    }
    addEditClickHandler() {
        let self = this;
        $(self.id).on('click', '.table__buttons--edit', function() {
            console.log(1231231212312123123);
            $(this).closest('tr').addClass('isEditable');
        });
    }
    addSaveClickHandler() {
        let self = this;
        $(self.id).on('click', '.table__buttons--save', function() {
            console.log(1231231212312123123);
            $(this).closest('tr').removeClass('isEditable');
        });
    }
    init() {
        this.initDataTable();
        let self = this;
        $(`${this.id}`).siblings('.table__pagination').on('click', function() {
            self.redrawPager(this);
        });
        $(`${this.id}`).siblings('.table__pagination').find('.table__counter').on('click', function(event) {
            event.stopPropagation();
        }).on('change', 'input', function() {
            let pagesCount = self.table.api().page.info().pages;
            let pageNumber = self.table.api().page.info().page;
            let pageNumberVal = $(this).val();
            console.log(self);
            if (pageNumberVal > 0 && pageNumberVal <= pagesCount) {
                self.table.api().page(+pageNumberVal - 1).draw(false);
            } else {
                $(this).val(pageNumber + 1);
            }
        });
        $(`${this.id}`).siblings('.dataTables_length').find('select').on('change', function() {
            self.redrawPager();
            
            console.log(self.table.api().data().length);
        });
        
        $(window).on('resize', () => {
            this.addPaddingToPager();
        })
    }
}


export default Table;