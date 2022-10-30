export class Label {

    constructor(color, text) {
        this.color = color;
        this.text = text;
        this.selected = false;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
    
    setText(text) {
        this.text = text;
    }
    
    getText() {
        return this.text;
    }

    getSelecter() {
        return this.selected;
    }

    setSelecter(selected) {
        this.selected = selected;
    }
}