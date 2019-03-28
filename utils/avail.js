// Service to determine if product is in stock

function inStock(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isInStock = Math.random() > 0.5
            if (!isInStock) {
                displayOutOfStockMessage()
                reject(`${product.id} is out of stock`)
            }
            resolve(isInStock)
        }, Math.ceil(Math.random() * Math.ceil(1)) * 1000)
    })
}

function displayOutOfStockMessage() {
    let elem = document.getElementById("out-of-stock")
    elem.style.display = "block"
    elem.style.left = ((window.screen.width - elem.offsetWidth) / 2) + "px"
}

export const Avail = {
    inStock: inStock
}