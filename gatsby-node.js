const path = require(`path`);
exports.createPages = async ({actions, graphql}) => {
    const {data} = await graphql(`
    query {
        jahia {
            allNews {
                uuid
                title
            }
        }
    }
  `);
    data.jahia.allNews.forEach(({uuid, title}) => {
        actions.createPage({
            path: title.toLowerCase().replace(/\s/g, ''),
            component: path.resolve(`./src/components/news.js`),
            context: {
                newsId: uuid
            }
        });
    });
};
