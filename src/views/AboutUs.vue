<template>
  <div class="about">
    <v-parallax
      class="parallax-background mobile-display"
      src="../assets/images/banner3.jpg"
    >
      <v-theme-provider dark>
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col
              class="white--text text-center"
              cols="12"
              tag="h1"
              style="animation: fadeInAnimation ease 3s"
            >
              <span class="font-weight-light display-1">{{
                $t("i18n.aboutUs")
              }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-parallax>
    <Introduction />
    <ContactUs />
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {
    Introduction: () => import("@/components/Introduction"),
    ContactUs: () => import("@/components/ContactUs"),
  },
};
</script>
