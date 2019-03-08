import { Avail } from './avail'

class Cart {
    constructor() {
        if (!Cart.singleCart) {
            this._data = {
                // store products
            }
            Cart.singleCart = this
        }
        return Cart.singleCart
    }
    
    addToCart(product, quantity) {
        // TODO
    }
}

const singleCart = new Cart();

export default singleCart;