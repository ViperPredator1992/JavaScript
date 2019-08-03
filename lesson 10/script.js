'use strict';

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
    this.text = prompt('Введите текст', '');

    let elem;
    if (this.selector.charAt(0) === '.') {
        elem = document.createElement('div'); 
        elem.className = `${this.selector}`;
    } else if (this.selector.charAt(0) === '#') {
        elem = document.createElement('p'); 
        elem.id = `${this.selector}`;
    }

    elem.innerHTML = this.text;
    elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; 
    background: ${this.backgroundColor}; fontSize: ${this.fontSize}px`;
    
    document.body.appendChild(elem);

    return elem;

};

let elem = new DomElement();

elem.ride();