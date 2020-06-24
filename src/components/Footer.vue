<template>
  <footer>
    Copyright {{getCurrentYear}} by
    <a :href="href">SBD</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: "https://www.sbd.ca/"
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: 0.5px;
  padding: 20x;
}
</style>