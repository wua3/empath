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

let moodArray = [];
if (localStorage.getItem('moods') && localStorage.getItem('moods').length > 2) {
    moodArray = JSON.parse(localStorage.getItem('moods'));
} else {
    moodArray = [];
    haveHistory = false;
}
localStorage.setItem('moods', JSON.stringify(moodArray));
const moodData = JSON.parse(localStorage.getItem('moods'));

// turn everything invisible
// DOM
// texts
const introTexts = document.getElementsByClassName('intro');
for (let i = 0; i < introTexts.length; i++) {
    introTexts.item(i).style.display = 'none';
}

const checkinTexts = document.getElementsByClassName('checkin');
for (let i = 0; i < checkinTexts.length; i++) {
    checkinTexts.item(i).style.display = 'none';
}

const checkin2Texts = document.getElementsByClassName('checkin2');
for (let i = 0; i < checkin2Texts.length; i++) {
    checkin2Texts.item(i).style.display = 'none';
}

const nameText = document.getElementById('nameText');
nameText.style.display = 'none';
const moodText = document.getElementById('moodText');
moodText.style.display = 'none';
const byeText = document.getElementById('bye-msg');
byeText.style.display = 'none';

const nameInstances = document.getElementsByClassName('name');
const moodInstances = document.getElementsByClassName('mood');
const lastMood = document.getElementsByClassName('last-mood');

// forms
const nameForm = document.getElementById('nameForm');
nameForm.style.display = 'none';
const nameInput = document.getElementById('name');
const moodForm = document.getElementById('moodForm');
moodForm.style.display = 'none';
const moodInput = document.getElementById('mood');

// log
const log = document.getElementById('log');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');
const showButton = document.getElementById('show-log');
showButton.style.display = 'none';
const hideButton = document.getElementById('hide-log');
log.style.display = 'none';
hideButton.style.display = 'none';

//
//
let totalTime = 1000;
let timeInterval = 2000;

if (newVisitor) {
    for (let i = 0; i < introTexts.length; i++) {
        setTimeout(function() {
            introTexts.item(i).style.display = 'inline-block';
        }, timeInterval += totalTime);
    }
    setTimeout(function() {
        nameForm.style.display = 'flex';
    }, timeInterval += totalTime);
} else if (haveHistory) {
    for (let i = 0; i < checkinTexts.length; i++) {
        setTimeout(function() {
            checkinTexts.item(i).style.display = 'inline-block';
        }, timeInterval += totalTime);
    }
    setTimeout(function() {
        moodForm.style.display = 'flex';
        showButton.style.display = 'flex';
    }, timeInterval += totalTime);
} else if (!haveHistory) {
    for (let i = 0; i < checkin2Texts.length; i++) {
        setTimeout(function() {
            checkin2Texts.item(i).style.display = 'inline-block';
        }, timeInterval += totalTime);
    }
    setTimeout(function() {
        moodForm.style.display = 'flex';
        showButton.style.display = 'flex';
    }, timeInterval += totalTime);
}

// event listeners
nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    name = nameInput.value;
    localStorage.setItem('name', name);
    for (let i = 0; i < nameInstances.length; i++) {
        nameInstances.item(i).textContent=name;
    }
    nameText.style.display = 'inline-block';
    nameForm.style.display = 'none';
    nameInput.value = '';
    for (let i = 0; i < checkin2Texts.length; i++) {
        setTimeout(function() {
            checkin2Texts.item(i).style.display = 'inline-block';
        }, timeInterval += totalTime);
    }
    setTimeout(function() {
        moodForm.style.display = 'flex';
    }, timeInterval += totalTime);
    setTimeout(function() {
        showButton.style.display = 'flex';
    }, timeInterval += totalTime);
});

moodForm.addEventListener('submit', function(e) {
    e.preventDefault();

    moodArray.push(moodInput.value);
    localStorage.setItem('moods', JSON.stringify(moodArray));
    for (let i = 0; i < moodInstances.length; i++) {
        moodInstances.item(i).textContent=moodInput.value;
    }
    liMaker(moodInput.value);
    moodInput.value = '';
    moodText.style.display = 'inline-block';
    moodForm.style.display = 'none';
    setTimeout(function() {
        byeText.style.display = 'inline-block';
    }, timeInterval);
});

clearButton.addEventListener('click', function() {
    let rememberName = name;
    localStorage.clear();
    localStorage.setItem('name', name);
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

// other display stuff
const liMaker = text => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
};

moodData.forEach(item => {
  liMaker(item);
});

for (let i = 0; i < nameInstances.length; i++) {
    nameInstances.item(i).textContent=name;
}

for (let i = 0; i < lastMood.length; i++) {
    lastMood.item(i).textContent=moodData[moodData.length-1];
}