import React from "react"

const OutOfStock = (props) => {
    function hidePopup() {
        let elem = document.getElementById("out-of-stock")
        elem.style.display = "none"
    }
    return (
        <div id="out-of-stock">
            <div style={{"fontWeight": "bold"}}>OUT OF STOCK</div>
            <div>Sorry, product #{props.product.id} is no longer available</div>
            <div style={{position: "absolute", top: "-10px", right: "5px", cursor: "pointer"}} onClick={hidePopup}>x</div>
        </div>
    )
}

export default OutOfStock