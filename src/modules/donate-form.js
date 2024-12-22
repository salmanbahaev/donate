export class DonateForm {


  render() {
    const form = document.createElement('form')
    form.className = 'donate-form'

    const h1 = document.createElement('h1')
    h1.id = 'total-amount'
    h1.textContent = '28$'

    const labelForm = document.createElement('label')
    labelForm.className = 'donate-form__input-label'
    labelForm.textContent = 'Введите сумму ТЕСТ'

    const inputForm = document.createElement('input')
    inputForm.className = 'donate-form__donate-input'
    inputForm.name = 'amount'
    inputForm.type = 'number'
    inputForm.max = '100'
    inputForm.min = '1'
    inputForm.required = ''

    const buttonForm = document.createElement('button')
    buttonForm.className = 'donate-form__submit-button'
    buttonForm.type = 'submit'
    buttonForm.textContent = 'Задонатить'

    labelForm.append(inputForm)
    form.append(h1, labelForm, buttonForm)

    return form
  }
}