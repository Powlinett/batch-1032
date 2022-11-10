import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link"]

  disable(event) {
    event.currentTarget.innerText = "clicked";
    event.currentTarget.disabled = true;
    this.linkTarget.classList.remove('d-none');
  }

  reset(event) {
    event.preventDefault();
    
    this.buttonTarget.disabled = false;
    this.buttonTarget.innerText = "Click me!";
    this.linkTarget.classList.add('d-none');
  }
}
