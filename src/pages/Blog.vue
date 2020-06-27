<template>
  <Layout>
    <h1>Blog</h1>
    <!-- NOTE: <page-query> is referenced via $page.* -->
    <!-- NOTE: <static-query> is referenced via $static.* -->
    <article
      v-for="edge in $page.allPost.edges"
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
    <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  # NOTE: '@' is a Gridsome directive
  allPost (perPage:2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }    
    edges {
      node {
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

</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: { Pager },
};
</script>

<style>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
