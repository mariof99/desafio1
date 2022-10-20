import {Task} from '.';



const createTaskHtml = (taskHolderDiv,task) => {
    const htmlTask = `
        <div class="twelve columns tag">
            <p>${(task)}</p>
                <div class="row">
                    <div class="seven columns"></div>
                    <div class="five columns">
                       <button class="bttnSubLabel">add label</button>
                       <button class="bttnSubLabel">add checklist</button>
                    </div>
                </div> `;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('twelve', 'columns', 'tag');
    taskDiv.id = new Date().getTime();
    taskDiv.innerHTML(htmlTask); 

    taskHolderDiv.append(taskDiv);

    taskDiv.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.id);
    });

    return taskDiv;
}



// const createAddLabelHtml;

// const createAddCheckListHtml;
