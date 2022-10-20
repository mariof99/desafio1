import {Label, CheckList} from './subTask';

export class Label {
    
    constructor(todo) {
        this.todo = todo;
        this.id = new Date().getTime();
        this.date = new Date();
        this.labels = [];
        this.checkLists = [];
        this.image = null;
        this.nosecuantas = null;
    }

    addLabel(label) {
        this.labels.push(label);
    }

    addCheckList(checkLists) {
        this.checkLists.push(checkLists);
    }

    getTodo() {
        return this.todo;
    }
}