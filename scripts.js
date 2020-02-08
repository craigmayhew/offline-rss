// HTML Elements
const form = document.querySelector('form');      // add feed: form
const input = document.getElementById('newFeed'); // add feed: input
const button = document.querySelector('button');  // click feed: button 
const nukeButton = document.querySelector('#nuke');  // nuke everything: button 
const nav = document.querySelector('#nav');          // nav

// Storage setup
let feedsArray = localStorage.getItem('feeds') ? JSON.parse(localStorage.getItem('feeds')) : [];
localStorage.setItem('feeds', JSON.stringify(feedsArray));

// Load storage data
const data = JSON.parse(localStorage.getItem('feeds'));

// load posts from an RSS feed
const viewFeed = (text) => {
    
}

// append <li> to nav
const navMaker = (text) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.addEventListener('click', viewFeed);
  li.appendChild(a);
  nav.appendChild(li);
}

// hitting enter when adding a new feed
form.addEventListener('submit', function (e) {
  e.preventDefault();

  feedsArray.push(input.value);
  localStorage.setItem('feeds', JSON.stringify(feedsArray));
  navMaker(input.value);
  input.value = "";
});

// render nav
data.forEach(item => {
  navMaker(item);
});

// nuke all data
nukeButton.addEventListener('click', function () {
  localStorage.clear();
  while (nav.firstChild) {
    nav.removeChild(nav.firstChild);
  }
  feedsArray = [];
});