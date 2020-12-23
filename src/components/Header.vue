<template>
  <v-container>
    <v-app-bar color="#fff" light flat class="mobile-display">
      <div class="d-flex align-center mr-3" style="cursor: pointer;">
        <v-img class="shrink mr-2" contain src="../assets/images/logo.png" width="70" />
        <span
          class="justify-center font-weight-black text-uppercase header-title"
          @click="gotoPage('homePage')"
        >{{$t('i18n.company')}}</span>
      </div>
      <v-tabs
        style="margin-right:60px"
        v-model="currentPage"
        light
        right
        slider-size="0"
        color="#0050a0"
        class="font-weight-bold"
      >
        <v-tab
          class="title-btn"
          :href="`#homePage`"
          @click="gotoPage('homePage')"
        >{{$t('i18n.homePage')}}</v-tab>
        <v-tab class="title-btn" :href="`#ai`" @click="gotoPage('ai')">{{$t('i18n.ai')}}</v-tab>
        <v-tab
          class="title-btn"
          :href="`#aboutUs`"
          @click="gotoPage('aboutUs')"
        >{{ $t('i18n.aboutUs') }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn class="mx-2" fab outlined color="#0050a0" @click="changeLanguage()">{{$t('i18n.lang')}}</v-btn>
    </v-app-bar>
    <v-app-bar app color="#fff" light src class="pc-display">
      <div class="d-flex align-center mr-3" style="cursor: pointer;">
        <v-img class="shrink mr-2" contain src="../assets/images/logo.png" width="50" />
        <span
          class="justify-center font-weight-black text-uppercase header-title"
          @click="gotoPage('homePage')"
        >{{$t('i18n.company')}}</span>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon light @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn
        class="mx-2"
        fab
        outlined
        small
        color="#0050a0"
        @click="changeLanguage()"
      >{{$t('i18n.lang')}}</v-btn>
    </v-app-bar>
    <v-app-bar app color="#fff" light flat src class="pc-display mobile-title">
      <p style="width:100%;color: #fff;">{{$t("i18n." + this.currentPage)}}</p>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      flat
      dark
      color="#0050A0"
      temporary
      width="200px"
      overlay-opacity="0.4"
    >
      <v-list>
        <v-list-item @click="gotoPage('homePage')">{{ $t('i18n.homePage') }}</v-list-item>
        <v-list-item
          @click="gotoPage('blockChain')"
        >{{ $t('i18n.blockChain') }}</v-list-item>
        <v-list-item @click="gotoPage('ai')">{{ $t('i18n.ai') }}</v-list-item>
         <v-list-item
          @click="gotoPage('products')"
        >{{ $t('i18n.products') }}</v-list-item>
        <v-list-item @click="gotoPage('aboutUs')">{{ $t('i18n.aboutUs') }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  computed: {
     currentPage: {
      get: function() {
        return this.$store.getters.currentPage;
      },
      set: function() {}
    }
  },
  data: () => ({
    drawer: null,
    page: "homePage",
  }),
  mounted(){
    this.loadPage();
  },
  methods: {
    goGithub() {
      var url = "https://github.com/HFJingchuang";
      window.open(url);
    },
    gotoPage(value) {
      var path = "/" + value;
      this.$router.push({ path: path }).catch((error) => error);
      this.closeNav();
      if (value == "solutions" || value == "productions") {
        this.set("blockChain");
      } else {
        this.set(value);
      }
    },
    changeLanguage() {
      let local = this.$i18n.locale;
      if (!local || local === "") {
        this.$i18n.locale = "zh";
        localStorage.setItem("languageType", this.$i18n.locale);
      } else if (local === "zh") {
        this.$i18n.locale = "en";
        localStorage.setItem("languageType", this.$i18n.locale);
      } else {
        this.$i18n.locale = "zh";
        localStorage.setItem("languageType", this.$i18n.locale);
      }
      var title = "i18n." + this.currentPage;
      this.title = this.$t(title);
    },
    closeNav() {
      this.drawer = false;
    },
    set(page) {
      this.$store.dispatch("updateCurrentPage", page);
    },
    loadPage() {
      this.$store.dispatch("updateCurrentPage", this.$route.path.split("/")[1]);
    }
  },
};
</script>
