<template>
  <!-- NOTE: <page-query> is referenced via $page.* -->
  <!-- NOTE: <static-query> is referenced via $static.* -->
  <Layout> <div v-html="$page.post.content"></div> </Layout>
</template>

<page-query>
query($path: String!) {
  post(path: $path) {
    content
  }
}
</page-query>
