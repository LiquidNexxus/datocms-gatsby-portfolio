const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCourse {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsCourse.edges.map(({ node: course }) => {
        createPage({
          path: `course/${course.slug}`,
          component: path.resolve(`./src/templates/course.js`),
          context: {
            slug: course.slug,
          },
        })
      })
      resolve()
    })
  })
}
