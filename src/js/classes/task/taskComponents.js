// import {Task} from './index';
// import {hideElement, displayElement} from '../../aux/aux';
import {prepareModal} from '../modal/modalComponents';
import {taskHoldersArray} from '../../..';

const taskHolderDivs = document.querySelectorAll('.taskHolder');
const modal = document.querySelector('.modal');

export const createTaskHtml = (parentTaskHolderDiv, task) => {
    const htmlTask = `

        <div class="twelve columns task">
            <div class="labelList">
                <!-- tags -->
            </div>
            <div class="taskText">
                <p>${(task.getText())}</p>
            </div> 
        </div>`;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('twelve', 'columns', 'task');
    taskDiv.id = task.getId();
    taskDiv.innerHTML = htmlTask;

    parentTaskHolderDiv.append(taskDiv);

    taskDiv.addEventListener('click', e => {
        const nTaskHolder = parentTaskHolderDiv.getAttribute('number');
        // const nTask = taskHoldersArray[nTaskHolder].getNumTasks();
        // funcionPrueba();
        // handleTaskClick(nTaskHolder, taskHoldersArray[nTaskHolder].getNumTask());

        const task = taskHoldersArray[nTaskHolder].getTaskById(taskDiv.id);
        console.log('taskTaskComponents => ' + task.getId());

        prepareModal(task);
    });

    taskDiv.addEventListener('dragstart', e => {
        e.dataTransfer.setData('id', e.target.id);
    });

    return taskDiv;
}

// export const handleTaskClick = (nTaskHolder, nTask) => {
//     prepareModal(taskHolders[nTaskHolder].getTask(nTask));
// } 


// taskHolderDivs.forEach((taskHolderDiv, i) => {
//     taskHolderDiv.childNodes.forEach((taskDiv, j) => {
//         taskDiv.addEventListener('click', e => {
//             prepareModal(taskHolders[i].getTask(j));
//         });
//     });
// });