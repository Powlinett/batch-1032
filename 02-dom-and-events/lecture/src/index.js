// SELECT ONE DOM ELEMENT

const list = document.querySelector('#players');

// INSERT HTML
list.insertAdjacentHTML("beforeend", "<li class='yellow'>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

const luke = list.querySelector('.green');


const orderedList = document.querySelector('#fifa-wins');

// SELECT SOME DOM ELEMENTS
const countries = orderedList.querySelectorAll('li');

countries.forEach((country) => {
  console.log(country.innerText);
});

orderedList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// CHANGE CSS STYLE
orderedList.style.display = "none";
orderedList.style.display = "";


// READ/WRITE INPUTS
const input = document.querySelector('#email');
input.value = "pauline@gmail.com";

// innerText !== innerTest
const home = document.querySelector('#home');
console.log(home.innerText);
console.log(home.innerHTML);


// ACCESS DATASET ATTRIBUTES
const user = document.querySelector('#user');
console.log(user.dataset.uid);
console.log(user.dataset.githubNickname);

// EVENT LISTENER & TARGET
const romain = document.querySelector('#romain');
romain.addEventListener('mouseover', (event) => {
  console.log(event);
  console.log(event.currentTarget);
});

const images = document.querySelectorAll('.img');
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    image.classList.toggle('img-circle');
  });
});
