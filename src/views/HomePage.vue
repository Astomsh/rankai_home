<template>
  <div id="home-page">
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    class="mobile-display"
  >
    <v-carousel-item>
       <v-parallax height="400" src="../assets/images/banner1.jpg">
      <v-theme-provider dark>
        <v-container fill-heigh>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col
              class="white--text text-center"
              cols="12"
              tag="h1"
              style="animation: fadeInAnimation ease 3s"
            >
              <span class="font-weight-light display-1">{{$t('i18n.welcome')}}</span>
              <br />
              <span class="font-weight-bold welcome-title">{{$t('i18n.company')}}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-parallax>
    </v-carousel-item>
    <v-carousel-item>
      <v-parallax height="400" src="../assets/images/banner2.jpg">
      <v-theme-provider dark>
        <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col
              class="white--text text-left"
              cols="12"
              md="12"
              style="animation: fadeInAnimation ease 3s"
            >
              <span class="font-weight-medium display-1" >{{$t('i18n.bannerText').first}}</span>
              <br />
              <span class="font-weight-medium display-1" style="margin-left: 20px;">{{$t('i18n.bannerText').second}}</span>
            </v-col>
          </v-row>
        </v-theme-provider>
    </v-parallax>
    </v-carousel-item>
  </v-carousel>
    <section id="introduction">
    <div class="py-8"></div>
    <v-container class="text-center" transition="slide-x-reverse-transition">
      <!-- <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.introduction')}}</h3> -->
      <div class="py-8"></div>
      <v-responsive
        class="mx-auto font-weight-regular text-justify"
        max-width="1200"
        style="color: #012375;text-indent: 32px;font-size: large;"
      >
        <p>{{$t('i18n.introductionText1')}}</p>
      </v-responsive>
    </v-container>
  </section>
    <AIItems />
    <Partners />
  </div>
</template>

<script>
import AIItems from "../components/AIItems";
import Partners from "../components/Partners";
export default {
  name: "HomePage",
  data: () => ({
  }),
  components: {
    AIItems,
    Partners
  },
  mounted() {
  },
  methods: {
  }
};
</script>