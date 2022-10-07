# JavaScript codeguide

## :zap: Зависимости
```
├── vue
└── jquery
```
## :zap: Инициализация
* В файле ``` src/js/app.js ``` нужно имортировать зависимость:
  * ``` import $ from 'jquery'; ```

## :open_file_folder: Модули
* Для каждого блока должен существовать отдельный js файл в ``` src/blocks/modules/***/***.js ```, например ``` src/blocks/modules/header/header.js ``` 
* Код для блоков должен быть в виде:
```
const Header = class Header {
    constructor(someVareible){
        this.someVareible = someVareible;
    }
    someMethod() {
        console.log(this.someVareible);
    }
    init() {
        this.someMethod();
    }
}

export default Header;
```
* Обязательно должен быть метод ``` init ``` у каждого модуля, который запускает весь код модуля.
* В файле ``` src/js/app.js ``` импортируем модуль, создаем экземпляр класса и вызываем метод ``` init ```;
```
import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import MobileMenu from '../blocks/modules/mobile_menu/mobile_menu.js';

const header = new Header({
    enableFlexMenu: true
});
const modals = new Modals({
    modalsSelector: "data-modal",
    modalsOpenerSelector: "data-modal-id",
    openedClass: "isOpened"
});

const mobileMenu = new MobileMenu({
    headerMenuSelector: '.header_menu',
    mobileMenuSelector: '.mobileMenu__menu',
    mobileMenuOpener: '.mobileMenu__opener'
});

$(document).ready(function () {
    header.init();
    modals.init();
    mobileMenu.init();
});
```


## :keyboard: Свойства классов
* Свойства в конструктор передаем в виде объекта, для того, чтобы при создании экземпляра было понятно какой параметр за что отвечает, пример:
```
constructor({ someVareible }){
    this.someVareible = someVareible;
}
```
* При создании экземпляра код выглядит так:
```
new Header({
    someVareible: 'someVareible'
})
```

## :keyboard: Методы классов
* Методы классов должны соответствовать парадигме "Один метод - одно действие".