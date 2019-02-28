import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const listProducts = (data) => {
  return data.allProductsJson.edges.map((edge) => {
    const urlPath = "/" + edge.node.id
    return (
      <Link style={{display: 'inline-block', textAlign: 'center', width: "33%"}} to={urlPath} key={edge.node.id}>
        <div>
          <img src={edge.node.image} width="100%" alt="product"></img>
        </div>
        <div>
          {edge.node.name}
        </div>
      </Link>
    )
  });
}

const IndexPage = ({data}) => (
  <>
  <Layout>
    <div style={{height: "200px", overflow: "hidden"}}>
      <img style={{opacity: "0.1", zIndex: "-1"}} src="https://static1.squarespace.com/static/5b4e0e6a5b409b5848de216a/t/5b93580a8a922dd0d73f1368/1536382999696/smart-food-banner.jpg?format=2500w" alt="banner"/>
    </div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{textAlign: 'center', margin: '40px'}}>
      <h1>New to the Evergage Grocery?</h1>
      <h3>Welcome. Go buy something.</h3>
    </div>
    {listProducts(data)}
  </Layout>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          id
          name
          price
          image
        }
      }
    }
  }
`
