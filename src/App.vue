<template>
  <v-app>
    <div id="header">
      <Header />
    </div>
    <Content />
    <Footer />
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {
    Header: () => import("@/components/Header"),
    Content: () => import("@/components/Content"),
    Footer: () => import("@/components/Footer")
  },
  data: () => ({}),
  mounted() {
    window.addEventListener("unload", this.saveState);
  },
  methods: {
    saveState() {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state));
    }
  }
};
</script>
<style  lang="scss" scoped >
html,
body {
  margin: 0px;
  height: 100%;
}
</style>
