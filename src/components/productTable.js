import React from "react"
import ProductTableRow from "./productTableRow";

class ProductTable extends React.PureComponent {
    // from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    renderAttributes(attributes) {
        let rows = [];
        for (let attr in attributes) {
            rows.push(<ProductTableRow key={attr} attr={attr} value={attributes[attr]}/>)
        }
        return this.shuffle(rows);
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.renderAttributes(this.props.attributes)}
                </tbody>
            </table>
        )
    }
}

export default ProductTable