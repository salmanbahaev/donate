import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

export default class App {
  #donateForm;
  #donateList;

  constructor() {
    this.#donateForm = new DonateForm();
    this.#donateList = new DonateList();
  }

  run() {
    document.body.append(
      this.#donateForm.render(),
      this.#donateList.render()
    );
  }
}
