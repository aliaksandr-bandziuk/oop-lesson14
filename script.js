'use strict';

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addNewElem = function(){
    let newElem;
    if(this.selector.startsWith('.')){
        newElem = document.createElement('div');
        newElem.setAttribute('class', this.selector);
    } else if (this.selector.startsWith('#')){
        newElem = document.createElement('div');
        newElem.setAttribute('id', this.selector);
    } else if (this.selector == null || this.selector == '' || !this.selector){
        return;
    }
};

const firstElement = new DomElement('#id', 'height: 50px', 'width: 300px', 'background-color: #f6f8fa', 'font-size: 15px'),
 secondElement = new DomElement('.class', 'height: 50px', 'width: 3100px', 'background-color: red', 'font-size: 15px'),
 thirdElement = new DomElement('null', 'height: 50px', 'width: 3100px', 'background-color: red', 'font-size: 15px');
 
firstElement.addNewElem();
secondElement.addNewElem();
thirdElement.addNewElem();

console.log(secondElement);