export const createLabelHtml = (taskDiv, label) => {
    const labelSpan = document.createElement('span');
    labelSpan.classList.add('labelSpan');
    labelSpan.style.backgroundColor = label.getColor();
    labelSpan.innerText = label.getText();
    taskDiv.appendChild(labelSpan);
}
