export class DonateList {
  constructor(donates) {
    this.donates = donates

    this.donatesContainer = document.createElement('div')
    this.donatesContainer.className = 'donates-container__donates'
  }

  updateDonates(updatedDonates) {
    this.donatesContainer.innerHTML = ''
    
    updatedDonates.forEach(donate => {
      const donateItem = document.createElement('div')
      donateItem.className = 'donate-item'
      donateItem.textContent = `${donate.date} - `
      
      const donateItemMoney = document.createElement('b')
      donateItemMoney.textContent = `${donate.amount}$`
      donateItem.append(donateItemMoney)
      
      this.donatesContainer.append(donateItem)
    });
  }

  render() {
    this.updateDonates(this.donates)

    const container = document.createElement('div')
    container.className = 'donates-container'

    const h2 = document.createElement('h2')
    h2.className = 'donates-container__title'
    h2.textContent = 'Список донатов'

    
    this.donates

    container.append(h2, this.donatesContainer)

    return container
  }

}