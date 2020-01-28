'use script';

// create class 

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.widht = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        let param = `height:${this.height}px; width:${this.widht}px; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}`;
        div.style.cssText = param;
    }
}

const element = new Options(100, 150,"green", 20, "center");

element.createDiv();