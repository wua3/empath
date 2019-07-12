const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');
const showButton = document.getElementById('show-log');
const hideButton = document.getElementById('hide-log');
const input = document.getElementById('item');
const log = document.getElementById('log');
log.style.display = 'none';
hideButton.style.display = 'none';

let itemsArray;
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'));
} else {
    itemsArray = [];
}

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
};

data.forEach(item => {
    liMaker(item)
});

clearButton.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});


form.addEventListener('submit', function(e) {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    liMaker(input.value);
    input.value = '';
});

showButton.addEventListener('click', function() {
    showLog();
});

hideButton.addEventListener('click', function() {
    hideLog();
});

function showLog() {
    showButton.style.display = 'none';
    hideButton.style.display = 'block';
    log.style.display = 'block';
}

function hideLog() {
    hideButton.style.display = 'none';
    showButton.style.display = 'block';
    log.style.display = 'none';
}