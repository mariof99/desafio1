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

    getTaskById(id) {
        let returnTask = false;
        this.tasks.forEach(task => {
            if (task.getId() == id) returnTask = task;
        });

        return returnTask;
    }

    getTask(i) {
        return this.tasks[i];
    }
    
}