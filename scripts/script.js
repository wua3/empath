// DOM
// texts
const introTexts = document.getElementById('intro');
const greetingText = document.getElementById('greeting');
// forms
const moodForm = document.getElementById('moodForm');
const moodInput = document.getElementById('mood');
// log
const log = document.getElementById('log');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');
const showButton = document.getElementById('show-log');
const hideButton = document.getElementById('hide-log');
log.style.display = 'none';
hideButton.style.display = 'none';

// dealing w/ local storage
let moodArray;
if (localStorage.getItem('moods')) {
    moodArray = JSON.parse(localStorage.getItem('moods'));
} else {
    moodArray = [];
}
localStorage.setItem('moods', JSON.stringify(moodArray));
const data = JSON.parse(localStorage.getItem('moods'));

//
//

// event listeners
moodForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    moodArray.push(moodInput.value);
    localStorage.setItem('moods', JSON.stringify(moodArray));
    liMaker(moodInput.value);
    moodInput.value = '';
});

clearButton.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
});

showButton.addEventListener('click', function() {
    showButton.style.display = 'none';
    hideButton.style.display = 'flex';
    log.style.display = 'flex';
});

hideButton.addEventListener('click', function() {
    hideButton.style.display = 'none';
    showButton.style.display = 'flex';
    log.style.display = 'none';
});

//
//

// display
const liMaker = text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

data.forEach(item => {
  liMaker(item);
});


/* // texts
const introTexts = document.getElementById('intro');
const greetingText = document.getElementById('greeting');

// forms
const nameForm = document.getElementById('nameForm');
const moodForm = document.getElementById('moodForm');
const moodInput = document.getElementById('mood');

// log
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');

// dealing w/ local storage
let moodsArray;
if (localStorage.getItem('moods')) {
    moodsArray = JSON.parse(localStorage.getItem('moods'));
} else {
    moodsArray = [];
}
localStorage.setItem('moods', JSON.stringify(moodsArray));
const moodsData = JSON.parse(localStorage.getItems('moods'));

const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
};

// event listeners
moodForm.addEventListener('submit', function(e) {
    e.preventDefault();

    moodsArray.push(moodInput.value);
    localStorage.setItem('moods', JSON.stringify(moodsArray));
    liMaker(moodInput.value);
    moodInput.value = '';
});

// update display
moodsData.forEach(item => {
    liMaker(item)
});

clearButton.addEventListener('click', function() {
    localStorage.clear()
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
}) */


/* const form = document.querySelector('form');
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
} */