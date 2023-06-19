const inventory = require('./inventory.js')

class Basket {
  constructor() {
    this.basket = [];
    this.basketSize = 4;
  }

  addItem(item) {
    if(typeof item != 'object') {
      return false
    }

    if(this.basket.length >= this.basketSize) {
      console.error('Unable to add item, basket is full.')
      return false
    }

    if(this.basket.includes(item)) {
      console.error('Unable to add item, item already exists in basket.')
      return false
    }

    this.basket.push(item)
    return true
  }

  removeItem(item) {
    if(!this.basket.includes(item)) {
      console.error('Unable to remove item, basket is empty')
      return false
    }

    this.basket.splice(this.basket.indexOf(item), 1)
    return true
  }

  setSize(size) {
    if(size <= 0) {
      console.error('Unable to change size, invalid size')
      return false
    }
    this.basketSize = size
    return true
  }

  checkItemPrice(item) {
    if(item.price) {
      return item.price
    }

    console.error('Unable to check price, invalid item.')
    return false
  }

  total() {
    let total = 0
    this.basket.forEach(item => {
      total += item.price
    })
    return total.toString()
  }
}
const item = {
  "sku": "BGLO",
  "price": 0.49,
  "name": "Bagel",
  "variant": "Onion"
}

module.exports = Basket;
