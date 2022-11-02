import {Label, CheckList} from './subTask';

export class Task {
    
    constructor(text) {
        this.text = text;
        this.id = new Date().getTime();
        this.date = new Date();
        this.labels = [];
        this.checkLists = [];
        this.image = null;
    }

    getId() {
        return this.id; 
    }

    addLabel(label) {
        this.labels.push(label);
    }

    setLabels(labels) {
        this.labels = labels;
    }

    getLabels() {
        return this.labels;
    }

    addCheckList(checkLists) {
        this.checkLists.push(checkLists);
    }
    getCheckLists() {
        return this.checkLists;
    }

    getText() {
        return this.text;
    }
}