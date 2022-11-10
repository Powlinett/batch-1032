import { Controller } from "@hotwired/stimulus"

const url = "https://wagon-garage-api.herokuapp.com/ferrari/cars";

export default class extends Controller {
  static targets = ["carsList"]

  connect() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => {
        this.displayCar(car)
      })
    })

  }
  createCar(event) {
    event.preventDefault();

    //on recupère les inputs
    const inputs = event.currentTarget.querySelectorAll(".form-control");
    const carData = {};

    //creer un hash avec les bons elements
    inputs.forEach((input) => {
      const key = input.getAttribute('name');
      const value = input.value;
      carData[key] = value;
    });

    //envoyer notre requete post
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carData)
    })
      .then((response) => response.json())
      .then((data) => this.displayCar(data))
    //Afficher la nouvelle car
  }


  displayCar(car) {
    const newCar = `<div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>`

    this.carsListTarget.insertAdjacentHTML("beforeend", newCar)
  }
}
