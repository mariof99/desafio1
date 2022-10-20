// hacer imports

const taskHolders = document.querySelectorAll('.taskHolders');
const bttnAddTask = document.querySelectorAll('.bttnAddTask');

taskHolders.forEach(taskHolder => {
    taskHolder.addEventListener('dragover', e => {
        e.preventDefault();
    });

    taskHolder.addEventListener('drop', e => {
        
    });
})

