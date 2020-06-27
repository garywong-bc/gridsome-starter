// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  siteDescription: "One stop shopping lorem ipsum..",
  // NOTE: credentials should use dotEnv, referencing process.env.XXX
  //       (no quotes needed arount this variable)
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        baseDir: "./content",
        path: "**/*.md",
        // NOTE: above, 'route' was optional as it built it off of 'baseDir/typeName'
        refs: {
          // Reference to existing authors by id.
          // author: 'Author',
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            create: true,
            route: "/tag/:id",
            // NOTE: above, 'route' is needed as GraphQL didn't generate 'path' at first
          },
        },
      },
    },
  ],
  templates: {
    Post: "/blog/:slug",
  },
  transformers: {
    remark: {
      // global remark options
    },
  },
};
