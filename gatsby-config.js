module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhiyue/68db99a329d1498aaf1e5ff7af519f7e?v=90354b40c8e843b9ae201bb27b98b54f"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhiyue/4299f917a182451bac7d4f8e970818e5?v=8181d285bf54472dbcb6dd427ef00942"
            }
        }
    ],
}
