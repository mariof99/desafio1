import {Label} from "../task/Task.class";

export class TaskHolder {

    constructor(tasks = []) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
    }

    getTask(i) {
        return this.tasks[i];
    }
    
}