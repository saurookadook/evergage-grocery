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
                 * 
                 * but calculating them by the objects in the cart seems a little 
                 * less prone to error. For performance concerns, could incorporate
                 * some kind of caching or use of memoization to limit redundant iterations
                 */
            }
            Cart.singleCart = this

        }

        return Cart.singleCart
    }

    getTotals() {
        const totals = {
            totalItems: 0,
            totalPrice: '0'
        }

        if (Object.keys(this._data).length < 1) {
            return totals;
        }

        return Object.keys(this._data).reduce((sum, key) => {
            const itemObj = this._data[key];
            sum.totalItems += itemObj.quantity
            sum.totalPrice = (parseFloat(sum.totalPrice) + (parseFloat(itemObj.price) * parseFloat(itemObj.quantity))).toFixed(2);

            console.log(`${key}: ${itemObj.quantity}`)

            return sum
        }, totals)
    }

    formattedTotals() {
        const totals = this.getTotals();

        return `${totals.totalItems} | $ ${totals.totalPrice}`
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
                        price: parseFloat(product.price).toFixed(2),
                        quantity: 0,
                    };
                }

                contents[productId].quantity += quantity
                
                return this.formattedTotals();
            })
            .catch(errors => {
                console.log(errors)
                return this.formattedTotals();
            })
        }            
    }
}

const singleCart = new Cart();

export default singleCart;