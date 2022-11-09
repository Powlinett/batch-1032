const searchMovies = (search) => {
  fetch(`http://www.omdbapi.com/?s=${search}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;

      const list = document.querySelector('#results');
      list.innerHTML = "";

      movies.forEach((movie) => {
        const title = movie.Title;
        const poster = movie.Poster;

        const liString = `
        <li>
          <p>${title}</p>
          <img src="${poster}">
        </li>
      `;

        list.insertAdjacentHTML('beforeend', liString);
      });
    });
};

searchMovies('harry potter');

const moviesForm = document.querySelector('#search-form');
moviesForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = moviesForm.querySelector('#search-input');
  const search = input.value;

  searchMovies(search);
});

const userForm = document.querySelector('#form');

const createUser = (event) => {
  event.preventDefault();

  const emailValue = userForm.querySelector('#email').value; // email: "eve.holt@reqres.in"
  const passwordValue = userForm.querySelector('#password').value; // password: "pistol"

  fetch("https://reqres.in/api/register", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

userForm.addEventListener('submit', createUser);
