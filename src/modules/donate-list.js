export class DonateList {
  constructor(donates) {
    this.donates = donates
  }

  render() {
    const container = document.createElement('div')
    container.className = 'donates-container'

    const h2 = document.createElement('h2')
    h2.className = 'donates-container__title'
    h2.textContent = 'Список донатов'

    const donatesContainer = document.createElement('div')
    donatesContainer.className = 'donates-container__donates'

    for (let i = 0; i < 4; i++) {
      const donateItem = document.createElement('div')
      donateItem.className = 'donate-item'
      donateItem.textContent = 'July 6th 2021, 10:28:49 am - '
      
      const donateItemMoney = document.createElement('b')
      donateItemMoney.textContent = '4$'
      donateItem.append(donateItemMoney)
      
      donatesContainer.append(donateItem)
    }

    container.append(h2, donatesContainer)

    return container
  }
}