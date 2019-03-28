import { Avail } from './avail'

class Cart {
    constructor() {
        if (!Cart.singleCart) {
            this._data = {
                // store products
                /**
                 * Could also store totals here, as:
                 * totalItems: 0,
                 * totalPrice: 0.0,
                 */
            }
            Cart.singleCart = this
        }
        return Cart.singleCart
    }

    getTotalItems() {
        // debugger
        if (Object.keys(this._data).length < 1) {
            return 0;
        }

        return Object.values(this._data).reduce((sum, itemObj) => {
            if (itemObj.quantity) {
                return sum + itemObj.quantity
            }
            
        }, 0)
    }

    calculateTotalPrice() {
        if (Object.keys(this._data).length < 1) {
            return 0;
        }

        return Object.values(this._data).reduce((sum, itemObj) => {
            return Number.toFixed(sum + itemObj.price);
        }, 0.00)
    }

    addToCart(product, quantity) {
        const contents = this._data

        if (product) {
            return Avail.inStock(product)
            .then(() => {
                const productId = product.id;
        
                if (!contents[productId]) {
                    contents[productId] = {
                        productName: product.name,
                        price: parseFloat(product.price),
                        quantity: 0,
                    };
                }

                contents[productId].quantity += quantity
                
                const totalContents = this.getTotalItems();
                const totalPrice = this.calculateTotalPrice();

                return `${totalContents} | $ ${totalPrice}`
            })
            .catch(errors => {
                console.log(errors)
                // return this.getTotal();
            })
        }            
    }
}

const singleCart = new Cart();

export default singleCart;