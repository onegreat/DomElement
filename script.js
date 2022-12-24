'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize

    this.forFunc = function () {
        let elem;

        if (this.selector.charAt(0) === '.') {
            elem = document.createElement('div');
        } else if (this.selector.charAt(0) === '#') {
            elem = document.createElement('p');
        }

        elem.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;`

        return elem;

    }
}

const newElement = new DomElement('.block', 500, 500, 'green', 10);

document.body.prepend(newElement.forFunc());