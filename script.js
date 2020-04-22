'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addNewElem = function(){
    const block = document.querySelector('.block');
    let newElem;
    if(this.selector.startsWith('.')){
        newElem = document.createElement('div');
        // начинаем class, удаляя точку благодаря substr(1)
        newElem.setAttribute('class', this.selector.substr(1));
        newElem.style.width = this.width;
        newElem.style.height = this.height;
        newElem.style.background = this.bg;
        newElem.style.fontSize = this.fontSize;
        newElem.textContent = this.selector;
        block.appendChild(newElem);
    } else if (this.selector.startsWith('#')){
        newElem = document.createElement('p');
            // начинаем class, удаляя точку благодаря substr(1)
        newElem.setAttribute('id', this.selector.substr(1));
        newElem.style.width = this.width;
        newElem.style.height = this.height;
        newElem.style.background = this.bg;
        newElem.style.fontSize = this.fontSize;
        newElem.textContent = this.selector;
        block.appendChild(newElem);
    } else if (this.selector == null || this.selector == '' || !this.selector){
        return;
    }
};

const firstElement = new DomElement('#id', '50px', '310px', 'blue', '15px'),
 secondElement = new DomElement('.class', '50px', '310px', 'red', '15px'),
 thirdElement = new DomElement('null', '50px', '310px', 'black', '15px');
 
firstElement.addNewElem();
secondElement.addNewElem();
thirdElement.addNewElem();

console.log(secondElement);
