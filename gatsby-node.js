/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    const productTemplate = path.resolve('src/templates/product-template.js')
    return graphql(
        `{
            allProductsJson(limit: 10) {
                edges {
                    node {
                        id
                    }
                }
            }
        }`
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.allProductsJson.edges.forEach(edge => {
            createPage({
                path: edge.node.id,
                component: productTemplate,
                context: {
                    id: edge.node.id
                }
            })
        })
    })
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
    // If production JavaScript and CSS build
    if (stage === 'build-javascript') {
      // Turn off source maps
      actions.setWebpackConfig({
        devtool: false,
      })
    }
  };
