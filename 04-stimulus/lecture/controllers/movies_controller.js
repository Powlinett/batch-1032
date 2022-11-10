
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    this.fetchMovies('harry potter');
  }

  fetchMovies(search) {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(data => this.insertMovies(data));
  }

  insertMovies(data) {
    this.listTarget.innerHTML = "";
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`;
      this.listTarget.insertAdjacentHTML("beforeend", movieTag);
    });
  };

  searchMovies(event) {
    event.preventDefault();
    this.fetchMovies(this.inputTarget.value);
  }
}
