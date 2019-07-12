let newVisitor = false;
let haveHistory = true;

// dealing w/ local storage first to determine which texts to show
let name;
if (localStorage.getItem('name')) {
    name = localStorage.getItem('name');
} else {
    name = '';
    newVisitor = true;
}
localStorage.setItem('name', name);

let moodArray;
if (localStorage.getItem('moods')) {
    moodArray = JSON.parse(localStorage.getItem('moods'));
} else {
    moodArray = [];
    haveHistory = false;
}
localStorage.setItem('moods', JSON.stringify(moodArray));
const moodData = JSON.parse(localStorage.getItem('moods'));


// DOM
// texts
const introTexts = document.getElementById('intro');
const greetingText = document.getElementById('greeting');
const returnerTexts = document.getElementsByClassName('old');
const nameInstances = document.getElementsByClassName('name');
const moodInstances = document.getElementsByClassName('mood');
const lastMood = document.getElementsByClassName('last-mood');
const nameText = document.getElementById('nameText');
nameText.style.display = 'none';
const moodText = document.getElementById('moodText');
moodText.style.display = 'none';
const byeText = document.getElementById('bye-msg');
byeText.style.display = 'none';
// forms
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
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

//
//

// event listeners
nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    name = nameInput.value;
    localStorage.setItem('name', name);
    // byeText.style.display = 'inline-block';
    // window.setTimeout(function(){
    //     byeText.style.opacity = 1;
    //     byeText.style.transform = 'scale(1)';
    // },0);  
    for (var i = 0; i < nameInstances.length; i++) {
        nameInstances.item(i).textContent=name;
    }
    nameText.style.display = 'inline-block';
    nameForm.style.display = 'none';
    nameInput.value = '';
});

moodForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    moodArray.push(moodInput.value);
    localStorage.setItem('moods', JSON.stringify(moodArray));
    for (var i = 0; i < moodInstances.length; i++) {
        moodInstances.item(i).textContent=moodInput.value;
    }
    liMaker(moodInput.value);
    moodInput.value = '';
    moodText.style.display = 'inline-block';
    byeText.style.display = 'inline-block';
    moodForm.style.display = 'none';
    // window.setTimeout(function(){
    //     byeText.style.opacity = 1;
    //     byeText.style.transform = 'scale(1)';
    // },0);
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

moodData.forEach(item => {
  liMaker(item);
});

for (var i = 0; i < nameInstances.length; i++) {
    nameInstances.item(i).textContent=name;
}

for (var i = 0; i < lastMood.length; i++) {
    lastMood.item(i).textContent=moodData[moodData.length-1];
}


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