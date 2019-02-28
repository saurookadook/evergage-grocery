import React from "react"

function getTableValue(props) {
    if (props.attr === "weight" || props.attr === "calories") {
        return <td data-val={props.value}>{props.value}</td>
    } else {
        return <td>{props.value}</td>
    }
}

const ProductTableRow = (props) => {
    return (
        <tr>
            <td>{props.attr}</td>
            {getTableValue(props)}
        </tr>
    )
}

export default ProductTableRow