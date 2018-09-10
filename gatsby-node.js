const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type == 'MarkdownRemark') {
    let path = "";
    
    /* if(node.frontmatter.layout == "doctor") {
      let name = node.frontmatter.name;
      let id = node.frontmatter.id;

      path = "content/doctors/" + name + "-" + id;
    }
    else if (node.frontmatter.layout == "video") {
      let title = node.frontmatter.title;
      let date = node.frontmatter.date;
      date = date.slice(0, date.search("T"));
      title = title.toLowerCase().trim().split(' ').join('-');
      path = "content/videos/" + date + '-' + title;
    } */
    if(node.frontmatter.layout == "blog") {
      let date = node.frontmatter.date;
      let title = node.frontmatter.title;
      date = date.slice(0, date.search("T"));
      title = title.toLowerCase().trim().split(' ').join('-');
      path = "content/blog/" + date + '-' + title;
    }

    createNodeField({
      node,
      name: 'route',
      value: path
    });
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

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

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      extensions: ['.json'],
    }
  })
}