import React from "react"
import Cart from "../../utils/cart"

const MiniCart = (props) => {
    const imgSrc = "https://image.flaticon.com/icons/svg/2/2772.svg"
    return (
        <span style={{display: 'inline-block', height: '25px'}}>
            <img style={{display: 'inline-block', height: '100%', margin: '0px 10px 0px 0px', float: 'left'}} src={imgSrc} alt="cart logo"/>
            <div style={{display: 'inline-block'}} className="mini-cart">
                <div onClick={Cart.renderMiniCartOpen}>Cart: <span className='cart-number'></span></div>
            </div>
        </span>
    )
}

export default MiniCart