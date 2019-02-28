import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Cart from "../../utils/cart"
import MiniCart from "./minicart";

export default class Header extends React.Component {

  componentDidMount() {
    document.getElementsByClassName('cart-number')[0].innerText = Cart.renderMiniCart()
  }
  render() {
    return (
      <header
        style={{
          background: `#a5b95e`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
            display: 'inline-block',
            width: '80%'
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {this.props.siteTitle}
            </Link>
          </h1>
        </div>
        <MiniCart />
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
