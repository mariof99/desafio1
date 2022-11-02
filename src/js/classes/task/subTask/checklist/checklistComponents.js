const createCheckListHtml = (parentDiv, checkList) => {
    chcklstDiv = document.createElement('div');
    chcklstDiv.classList.add('checkList');
    const chcklstHtml = `
        <h4>${(checkList.getTitle())}</h4><br><br>
    `;

    checkList.getOptions().forEach((option, i) => {
        chcklstHtml += `
            <input type="checkbox" id="op${(i)}" name="op${(i)}" value="op${(i)}">
            <label for="op${(i)}"> op${(option['text'])}</label><br>`;
    });

    chcklstDiv.innerHTML = chcklstHtml;
    parentDiv.append(chcklstHtml);

    return chcklstDiv;
}