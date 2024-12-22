import { DonateForm } from "./donate-form"

export default class App {
  #donateForm

  constructor() {
    this.#donateForm = new DonateForm()
  }


  run() {
    const h2 = document.createElement('h2')
    h2.textContent = 'Well, we begine'
    document.body.append(h2, this.#donateForm.render())
  }
}