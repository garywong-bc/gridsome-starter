<template>
  <Layout>
    <h1># {{ $page.tag.title }}</h1>
    <article
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em;"
    >
      <g-image :src="edge.node.cover_image" style="width: 100%;"></g-image>
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link
          style="padding-right: 0.25em;"
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
          >#{{ tag.id }}</g-link
        >
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
      <!-- <div v-html="edge.node.content"></div> -->
    </article>
  </Layout>
</template>

<page-query>
query ($id:String!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          # GraphQL Fragment "...": to select which of the 2 union types
          # Post versus Tag
          ... on Post {
          id
          content
          title
          excerpt
          date(format: "MMMM Do, YYYY")
          tags {
            id
            path
          }
          timeToRead
          path
          cover_image (width: 1000, height:300, fit: cover, quality: 100, blur:10)
          }
        }
      }
    }
  }
}

</page-query>
