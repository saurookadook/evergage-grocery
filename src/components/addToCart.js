import React from "react"

const AddToCart = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            Qty: <input style={{width: '50px'}} type="text" onChange={props.onChange}/>
            <input type='submit' value="Add to Cart" className="btn"/>
            <input type='button' value="Favorite" className="btn"/>
        </form>
    )
}

export default AddToCart