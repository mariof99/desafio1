
export class Modal {

    static instance;
    labels = [];

    constructor() {
        if(!!Modal.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        return this;
    }

    setLabels(labels) {
        this.labels = labels;
    }
}
