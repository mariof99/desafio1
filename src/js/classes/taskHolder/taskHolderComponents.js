// hacer imports

const taskHolders = document.querySelectorAll('.taskHolders');
const addTaskDivs = document.querySelectorAll('.addTask');

taskHolders.forEach(taskHolder => {
    taskHolder.addEventListener('dragover', e => {
        e.preventDefault();
    });

    taskHolder.addEventListener('drop', e => {
        
    });
});


addTaskDivs.forEach(div => {
    div.addEventListener('mouseover', e => {
        div.classList.add('.hoverDiv');
    });

    div.addEventListener('click', e => {
        div.firstChild.classList.remove('addTaskPDisplay');
        div.firstChild.classList.add('addTaskHide');
        div.lastChild.classList.add('addTaskDisplay');
        div.lastChild.classList.remove('addTaskHide');
    });
});

