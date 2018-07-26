const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogs.js`);

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            layout
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
            // select layout based on blog layout value
          let template = null;
          switch(node.frontmatter.layout) {
            case "blog":
              template = blogPostTemplate;
              break;
          }
          
          createPage({
            path: node.frontmatter.path,
            component: template,
            context: {
              route: node.frontmatter.path
            } 
          });
        });
    });
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      extensions: ['.json'],
    }
  })
}