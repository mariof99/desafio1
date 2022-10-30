import {Label} from "../task/Task.class";

export class TaskHolder {

    constructor(tasks = []) {
        console.log('const');
        console.log(this.tasks = tasks);
    }

    addTask(task) {
        console.warn('addTask');
        this.tasks.push(task);
        console.warn(this.tasks);
    }

    getNumTasks() {
        return this.tasks.length;
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
    }

    getTask(i) {
        return this.tasks[i];
    }
    
}