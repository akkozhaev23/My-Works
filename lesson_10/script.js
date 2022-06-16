let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let up = document.querySelector('#up');
let down = document.querySelector('#down');

next.onclick = function () {
    let select = document.querySelector('#select');
    if (select.nextElementSibling) {
        select.id = '';
        select.nextElementSibling.id = 'select';
    }
}

prev.onclick = function() {
    let select = document.querySelector('#select')
    if(select.previousElementSibling) {
        select.id = ''
        select.previousElementSibling.id = 'select'
    }
}

up.onclick = function() {
    let select = document.querySelector('#select')
    
    if(select.parentElement && select.parentElement.parentElement !== document.body) {
        select.id = ''
        select.parentElement.parentElement.id = 'select'
    }
}

down.onclick = function() {
    let select = document.querySelector('#select')

    if(select.firstElementChild) {
        select.id = ''
        select.firstElementChild.firstElementChild.id = 'select'
    }
}

let inpFold = document.querySelector('#folder-name')
let addBtn = document.querySelector('#add')

addBtn.onclick = function() {
    let select = document.querySelector('#select')
    let newFolder = document.createElement('li')
    newFolder.textContent = inpFold.value;
    if (select.firstElementChild) {
        select.firstElementChild.append(newFolder)
    } else { 
        let ul = document.createElement('ul')
        ul.append(newFolder)
        select.append(ul)
    }
    select.id = ''
    newFolder.id = 'select'
}