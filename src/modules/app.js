import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
// import { mockDonates } from "../core/constants";

export default class App {
  #donateForm;
  #donateList;

  constructor() {
    this.state = {
      donates: [],
      totalAmount: 0,
    }
    this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
    this.#donateList = new DonateList(this.state.donates);
  }

  run() {
    document.body.append(this.#donateForm.render(), this.#donateList.render());
  }

  createNewDonate(newDonate) {
    this.state.donates = [
      ...this.state.donates,
      newDonate
    ]
    this.state.totalAmount += newDonate.amount
    this.#donateList.updateDonates(this.state.donates)
    this.#donateForm.updateTotalAmount(this.state.totalAmount)
  }
  
}
