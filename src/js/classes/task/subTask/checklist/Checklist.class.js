export class CheckList {
    
    constructor(title = 'chekclist', options = []) {
        this.title = title;
        this.options = options;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    addOption(option) {
        this.options.push(option);
    }

    getOptions() {
        return this.options;
    }

    getNOptions() {
        return this.options.length;
    }
}