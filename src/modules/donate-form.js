import { CURRENCY_SIGN } from "../core/constants";

export class DonateForm {
  constructor(totalAmount, createNewDonate) {
    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;

    this.form = document.createElement("form");
    this.form.className = "donate-form";

    this.inputForm = document.createElement("input");
    this.inputForm.className = "donate-form__donate-input";
    this.inputForm.name = "amount";
    this.inputForm.type = "number";
    this.inputForm.max = "100";
    this.inputForm.min = "1";
    this.inputForm.required = "";

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.inputForm.value) {
        const newDonateCreated = {
          date: new Date(),
          amount: Number(this.inputForm.value),
        };
        this.createNewDonate(newDonateCreated);
        this.inputForm.value = "";
      }
    });

    this.h1 = document.createElement("h1");
    this.h1.id = "total-amount";
  }

  updateTotalAmount(newAmount) {
    this.h1.textContent = `${newAmount}${CURRENCY_SIGN}`;
  }

  render() {
    this.updateTotalAmount(this.totalAmount);

    const labelForm = document.createElement("label");
    labelForm.className = "donate-form__input-label";
    labelForm.textContent = "Введите сумму ТЕСТ";

    const buttonForm = document.createElement("button");
    buttonForm.className = "donate-form__submit-button";
    buttonForm.type = "submit";
    buttonForm.textContent = "Задонатить";

    labelForm.append(this.inputForm);
    this.form.append(this.h1, labelForm, buttonForm);

    return this.form;
  }
}
