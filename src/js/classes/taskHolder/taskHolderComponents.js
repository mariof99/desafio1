import {Task} from '../index';
import {hideElement, displayElement} from '../../aux/aux';
import {taskHolders} from '../../../index';

const taskHolderDivs = document.querySelectorAll('.taskHolder');
const taskDivs = document.querySelectorAll('.task');
const addTaskDivs = document.querySelectorAll('div.addTask');
const addTaskInputs = document.querySelectorAll('.addTaskInput');
const modal = document.querySelector('.modal');

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const createTaskHtml = (taskHolderDiv,task) => {
    const htmlTask = `
        <div class="twelve columns">
            <!-- tags -->
        </div>
        <div class="twelve columns task">
            <p>${(task.getText())}</p>
        </div> `;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('twelve', 'columns', 'task');
    taskDiv.id = task.getId();
    taskDiv.innerHTML = htmlTask;

    taskHolderDiv.append(taskDiv);

    taskDiv.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.id);
    });

    return taskDiv;
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

addTaskDivs.forEach((div, i) => {
    const parAndButt = div.children; //(0)->p (1)->button
    const par = parAndButt.item(0); const button = parAndButt.item(1);
    const inputDiv = addTaskInputs.item(i);
    const textInput = inputDiv.firstElementChild;

        div.addEventListener('mouseover', e => {
        div.classList.add('.hoverDiv');
    });
    
    div.addEventListener('click', e => {
        hideElement(par);
        displayElement(button);
        displayElement(inputDiv);
    });

    button.addEventListener('click', e => {
        e.stopPropagation();

        textInput.focus();
        const textValue = textInput.value;
        if (textValue !== '') {
            task = new Task(textValue);
            createTaskHtml(taskHolderDivs.item(i), task);
            taskHolders[i].addTask(task);
        }
        
        textInput.value = '';

        hideElement(inputDiv);
        hideElement(button);
        displayElement(par);
    });
});


// taskHolderDivs.forEach((div, i) => {
//     div.childNodes.forEach(task => {
//         task.addEventListener('click', e => {

//             document.getElementById('labels').appendChild()
//             displayElement(modal);
//         });
//     });
// });

