const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const {data} = await graphql(`
    query {
        jahia {
            allNews {
                uuid
                title
            }          
            media: companiesByIndustry(property: title, equals: "Media", sortBy: {fieldName: "name", ignoreCase: true, sortType: ASC}) {
                uuid
                name
            }
            retail: companiesByIndustry(property: title, equals: "Retail", sortBy: {fieldName: "name", ignoreCase: true, sortType: ASC}) {
                uuid
                name
            }
        }
    }
  `)
  data.jahia.allNews.forEach(({ uuid, title }) => {
    actions.createPage({
      path: title.toLowerCase().replace(/\s/g,""),
      component: path.resolve(`./src/components/news.js`),
      context: {
        newsId: uuid,
      },
    })
  })
  data.jahia.media.forEach(({ uuid, name }) => {
    actions.createPage({
      path: name.toLowerCase().replace(/\s/g,""),
      component: path.resolve(`./src/components/company.js`),
      context: {
        companyId: uuid,
      },
    })
  })
  data.jahia.retail.forEach(({ uuid, name }) => {
    actions.createPage({
      path: name.toLowerCase().replace(/\s/g,""),
      component: path.resolve(`./src/components/company.js`),
      context: {
        companyId: uuid,
      },
    })
  })
}