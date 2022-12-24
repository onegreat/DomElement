'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize

    this.forFunc = function () {
        let elem;

        if (this.selector[0] === '.') {
            elem = document.createElement('div')
            elem.className = this.selector.splice(1)
        } else if (this.selector[0] === '#') {
            elem = document.createElement('p');
            elem.id = this.selector.slice(1);
        } else {
            elem.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;`

            return elem;

        }
    }
}