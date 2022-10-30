import {Task} from '../task';
import {Label} from '../task/subTask';
import {hideElement, displayElement} from '../../aux/aux';
import {createLabelHtml} from '../task/subTask/label/labelComponents';

const modal = document.querySelector('.modal'); 
const addLabelInput = document.getElementById("labelInput");
const addLabelButton = document.getElementById("addLabelButton");
const colorButtons = document.querySelectorAll('.colorButton');
const labelDivs = document.querySelectorAll('span.labelSpan');

let labelColor = '';

export const prepareModal = (task) => {
    modal.getElementsByClassName('labelList')[0].innerHTML = '';
    displayElement(modal);
    displayLabels(task.getLabels());

    addLabelButton.addEventListener('click', e => {
        addLabel(task);
    });
}

// -------------------- LABELS -------------------------

const displayLabels = (labels) => {
    labels.forEach(label => {
        console.log(label);
        createLabelHtml(modal.getElementsByClassName('labelList')[0], label); // create html label
    });
}

const addLabel = (task) => {
    console.log(addLabelInput.value);
    const label = new Label(labelColor, addLabelInput.value);
    task.addLabel(label);

    createLabelHtml(document.getElementById(task.getId()).getElementsByClassName('labelList')[0], label);
    // createLabelHtml(modal.getElementsByClassName('labelList')[0], label);
}

colorButtons.forEach(button => {
    button.addEventListener('click', e => {
        labelColor = button.style.backgroundColor;
    });
});

