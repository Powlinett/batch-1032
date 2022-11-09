const authorization = "Bearer sk_***";
const clearbitUrl = "https://person.clearbit.com/v1/people/email"
// 1. Ecouter le submit du form
// 2. Récupérer la valeure de l'input
// 3. Feth vers l'API
// 4. Update notre DOM

const updateTd = (id, value) => {
  const tdElement = document.querySelector(id);
  tdElement.innerText = value;
};

const form = document.querySelector('#clearbitForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = form.querySelector('#clearbitEmail');
  const email = input.value;
  fetch(`${clearbitUrl}/${email}`, {
    headers:{
      Authorization: authorization
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const userEmail = data.email;
      const location = data.location;
      const bio = data.bio;
      const fullname = data.name.fullName;

      updateTd('#userName', fullname);
      updateTd('#userBio', bio);
      updateTd('#userLocation', location);
      updateTd('#userEmail', userEmail);
    });
});
