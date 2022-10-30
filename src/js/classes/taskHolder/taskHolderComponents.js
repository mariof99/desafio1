import {Task} from '../index';
import {hideElement, displayElement} from '../../aux/aux';
import {taskHoldersArray} from '../../..';
// import {handleTaskClick, funcionPrueba} from '../task';
import {prepareModal} from '../modal/modalComponents';
import {createTaskHtml} from '../task/taskComponents';


const taskHolderDivs = document.querySelectorAll('.taskHolder');
const taskDivs = document.querySelectorAll('.task');
const addTaskDivs = document.querySelectorAll('div.addTask');
const addTaskInputs = document.querySelectorAll('.addTaskInput');
const modal = document.querySelector('.modal');

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
            const task = new Task(textValue);
            createTaskHtml(taskHolderDivs.item(i), task);
            taskHoldersArray[i].addTask(task);


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

