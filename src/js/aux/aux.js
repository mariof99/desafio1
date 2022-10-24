export const displayElement = (elmnt) => {
    elmnt.classList.remove('hide');
    elmnt.classList.add('display');
}

export const hideElement = (elmnt) => {
    elmnt.classList.remove('display');
    elmnt.classList.add('hide');
}
