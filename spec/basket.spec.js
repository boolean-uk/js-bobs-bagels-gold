const Basket = require("../src/Basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });

  it('addItem returns true if item is successfully added', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }

    // execute
    const result = basket.addItem(item)

    // verify
    expect(result).toEqual(true)
  })

  it('addItem returns false if basket is full', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }

    const items = [
      {
        "sku": "BGLO",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Onion"
      },
      {
        "sku": "BGLP",
        "price": 0.39,
        "name": "Bagel",
        "variant": "Plain"
      },
      {
        "sku": "BGLB",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Blueberry"
      },
      {
        "sku": "BGLS",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Sesame"
      }
    ]

    basket.basket = items

    // execute
    const result = basket.addItem(item)

    // verify
    expect(result).toEqual(false)
  })

  it('addItem returns false if item is not successfully added', () => {
    // setup
    const item = 528

    // execute
    const result = basket.addItem(item)

    // verify
    expect(result).toEqual(false)
  })

  it('addItem returns false if item already exists', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }

    // execute
    basket.addItem(item)
    const result = basket.addItem(item)

    // verify
    expect(result).toEqual(false)
  })

  it('removeItem returns true if item is successfully removed', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }
    basket.addItem(item)

    // execute
    const result = basket.removeItem(item)

    // verify
    expect(result).toEqual(true)
  })

  it('removeItem returns false if item is not successfully removed', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }

    // execute
    const result = basket.removeItem(item)

    // verify
    expect(result).toEqual(false)
  })

  it('setSize return true on successfully changing size of basket', () => {
    // setup
    const size = 20

    // execute
    const result = basket.setSize(size)

    // verify
    expect(result).toEqual(true)
  })

  it('setSize return false on unsuccessfully changing size of basket', () => {
    // setup
    const size = -20

    // execute
    const result = basket.setSize(size)

    // verify
    expect(result).toEqual(false)
  })

  it('checkItemPrice returns price when prompted with an item', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }
    
    // execute
    const result = basket.checkItemPrice(item)

    // verify
    expect(result).toEqual(item.price)
  })

  it('checkItemPrice returns false when prompted with an invalid item', () => {
    // setup
    const item = {
      "sku": "BGLO",
      "variant": "Onion"
    }
    
    // execute
    const result = basket.checkItemPrice(item)

    // verify
    expect(result).toEqual(false)
  })

  it('total returns total price of all items in basket', () => {
    // setup
    const items = [
      {
        "sku": "BGLO",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Onion"
      },
      {
        "sku": "BGLP",
        "price": 0.39,
        "name": "Bagel",
        "variant": "Plain"
      },
      {
        "sku": "BGLB",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Blueberry"
      },
      {
        "sku": "BGLS",
        "price": 0.49,
        "name": "Bagel",
        "variant": "Sesame"
      },
      {
        "sku": "BGLA",
        "price": 0.99,
        "name": "Bagel",
        "variant": "Asiago"
      }
    ]

    basket.basket = items

    // execute
    const result = basket.total()

    // verify
    expect(result).toEqual('2.85')
  })

  it('total returns total price of all items in basket', () => {
    // setup

    // execute
    const result = basket.total()

    // verify
    expect(result).toEqual('0')
  })
})
