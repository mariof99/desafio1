import {createTaskHtml, Task} from '../task';
import {Label} from '../task/subTask';
import {hideElement, displayElement} from '../../aux/aux';
import {createLabelHtml} from '../task/subTask/label/labelComponents';
import {createCheckListHtml} from '../task/subTask/checklist/checklistComponents';
import { CheckList } from '../task/subTask/checklist/Checklist.class';

const modal = document.querySelector('.modal'); 
const addLabelInput = document.getElementById('labelInput');
const addLabelButton = document.getElementById('addLabelButton');
const addCheckListButton = document.getElementById('addCheckListButton');
const colorButtons = document.querySelectorAll('.colorButton');
const exitButton = document.querySelector('.modal .exitButton');

let labelColor = '';

export const prepareModal = (task) => {
    console.log('taskModal => ' + task.getId());
    const id = task.getId();
    modal.getElementsByClassName('labelList')[0].innerHTML = '';
    displayElement(modal);
    displayLabels(task.getLabels());
    displayChecklist(task.getCheckLists());

    console.log('taskModal111 => ' + task.getId());
    // const currTask = task;
    addLabelButton.addEventListener('click', e => { 
        console.log('TASKKK => ' + task.getId());
        addLabel(task);
    });

    addCheckListButton.addEventListener('click', e => {
        addCheckList(task);
    });

    exitButton.addEventListener('click', e => {
        hideElement(modal);
    });
}

// -------------------- LABELS -------------------------

const displayLabels = (labels) => {
    labels.forEach(label => {
        // console.log(label);
        createLabelHtml(modal.getElementsByClassName('labelList')[0], label); // create html label
    });
}

const addLabel = (task) => {
    const label = new Label(labelColor, addLabelInput.value);
    task.addLabel(label);

    createLabelHtml(document.getElementById(task.getId()).getElementsByClassName('labelList')[0], label);
    // console.log(modal.getElementsByClassName('labelList')[0]);
    createLabelHtml(modal.getElementsByClassName('labelList')[0], label);
}

colorButtons.forEach(button => {
    button.addEventListener('click', e => {
        labelColor = button.style.backgroundColor;
    });
});

// -------------------- CHECKLISTS -------------------------

const displayChecklist = (checkLists) => {
    checkLists.forEach(checkList => {
        const checkListDiv = 
            createCheckListHtml(modal.getElementsByClassName('checkListList')[0], checkList);
        const inputDiv = Array.from(
            document.querySelector('.addOptionInput')
            ).pop();
        const addOptionDiv = Array.from(
            document.querySelector('.addOption')
            ).pop();

        const parAndButt = addOptionDiv.children; //(0)->p (1)->button  // código repetido. meter en función.
        const par = parAndButt.item(0); const button = parAndButt.item(1);
        const textInput = inputDiv.firstElementChild;
        button.addEventListener('click', e => {
            e.stopPropagation();

            textInput.focus();
            const textValue = textInput.value;
            if (textValue !== '') {
                createOptionHtml(checkListDiv, checkList, textValue);
                checkList.addOption({'text': text, 'checked': false});
            }
            
            textInput.value = '';
    
            hideElement(inputDiv);
            hideElement(button);
            displayElement(par);
        });

    });
}

const addCheckList = (task) => {
    const checkList = new CheckList(title);
    task.addChecklist(checkList);

    createCheckListHtml(modal.getElementsByClassName('labelList')[0], checkList);
}
