const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type == 'MarkdownRemark') {
    if(node.frontmatter.layout == "blog") {
      let path = "";

      let date = node.frontmatter.date;
      let title = node.frontmatter.title;
      date = date.slice(0, date.search("T"));
      title = title.toLowerCase().trim().split(' ').join('-');
      path = "blog/" + date + '-' + title;
      
      createNodeField({
        node,
        name: 'route',
        value: path
      });
    }
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogs.jsx`);

  return graphql(`{
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "blog"}}}) {
      edges {
        node {
          frontmatter {
            title
            date
            layout
          }
          fields {
            route
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
          switch (node.frontmatter.layout) {
            case "blog":
              template = blogPostTemplate;
              break;
          }

          const route = node.fields.route;

          createPage({
            path: route,
            component: template,
            context: {
              route: route
            }
          });
        });
    });
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.json'],
    }
  })
}