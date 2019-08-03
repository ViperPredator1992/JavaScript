'use strict';

/* 1) Сделать класс DomElement, который содержит свойства
  - selector, 
  - height, 
  - width, 
  - bg, 
  - fontSize

содержит метод, который создает элемент на странице
если в селектор передана строка начинающаяся с точки ‘.’ создавать <div></div> с таким классом
если с решетки ‘#’, то создать параграф <p></p>

с помощью cssText задавать стили: 
  - высотой - height,
  - шириной - width, 
  - background - bg
  - размер текста fontSize 
внутрь записывать любой текст

2) Создать новый объект на основе класса DomElement

3) Вызвать его метод чтобы получить элемент на странице */
function DomElement(selector, height, width, backgroundColor, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
    
}

DomElement.prototype.ride = function () {

    this.selector = prompt('Selector', '');
    this.height = prompt('height', '');
    this.width = prompt('width', '');
    this.backgroundColor = prompt('backgroundColor', '');
    this.fontSize = prompt('fontSize', '');

    if (this.selector === '.') {

        let elementDiv = document.createElement('div');
            elementDiv.className = '.';
            elementDiv.innerHTML = prompt('Введите текст','');
            elementDiv.style.height = this.height + 'px';
            elementDiv.style.width = this.width + 'px';
            elementDiv.style.backgroundColor = this.backgroundColor;
            elementDiv.style.fontSize = this.fontSize + 'px';
            document.body.appendChild(elementDiv);

        return elementDiv;

    } else if (this.selector === '#') {

        let elementP = document.createElement('p');
            elementP.className = '#';
            elementP.innerHTML = prompt('Введите текст','');
            elementP.style.height = this.height + 'px';
            elementP.style.width = this.width + 'px';
            elementP.style.backgroundColor = this.backgroundColor;
            elementP.style.fontSize = this.fontSize + 'px';
            document.body.appendChild(elementP);

        return elementP;

    }  
    
};

let elem = new DomElement();

elem.ride();