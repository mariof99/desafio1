import {Modal} from '.';
import {Task} from '../task';
import { Label } from '../task/subTask';

const modal = document.querySelector('.modal'); 
const addLabelInput = document.getElementById("labelInput");
const addLabelButton = document.getElementById("addLabelButton");

const labelColor = '';

const fillModal = (task) => {
    modal.getElementsByClassName('labelList')[0].innerHTML = '';
    displayLabels(task.getLabels());

    addLabelButton.addEventListener('click', e => {
        addLabel(task);
    });
}

const createLabelHtml = (parentDiv, label) => {
    const labelSpan = document.createElement('span');
        labelSpan.classList.add('label');
        labelSpan.style.backgroundColor = label.getColor();
        labelSpan.innerText = label.getText();
        parentDiv.appendChild(label);
}

const displayLabels = (labels) => {
    labels.forEach(label => {
        createLabelHtml(modal.getElementsByClassName('labelList')[0], label);
    });
}

const addLabel = (e, task) => {
    label = new Label(labelColor, addLabelInput.value);
    task.addLabel(label);
    createLabelHtml(document.getElementById(task.getId()).getElementsByClassName('labelList')[0], label);
    createLabelHtml(modal.getElementsByClassName('labelList')[0], label);

}


