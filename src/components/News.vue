<template>
  <section id="news">
    <div class="grey lighten-3"></div>
    <div class="py-8"></div>
    <v-container class="text-center" style="animation: fadeInAnimation ease 3s">
      <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.ai')}}</h3>
      <v-responsive class="mx-auto mb-6" width="56"></v-responsive>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="py-8 px-4 content-light2 item-card" color="lighten-3" >
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88" @click="gotoItem('pinglun')">
                  <v-icon
                    class="rotate-img"
                    large
                    style="background-color: #484848;"
                    v-text="$t('i18n.aiContent')[0].icon"
                  ></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
            <v-card-title
              class="justify-center font-weight-regular text-uppercase"
              v-text="$t('i18n.aiContent')[0].title"
            ></v-card-title>
          </v-card>
        </v-col>
         <v-col cols="12" md="4">
          <v-card class="py-8 px-4 content-light2 item-card" color="lighten-3" >
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88" @click="gotoItem('duihua')">
                  <v-icon
                    class="rotate-img"
                    large
                    style="background-color: #FF6633;"
                    v-text="$t('i18n.aiContent')[1].icon"
                  ></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
            <v-card-title
              class="justify-center font-weight-regular text-uppercase"
              v-text="$t('i18n.aiContent')[1].title"
            ></v-card-title>
          </v-card>
        </v-col>
         <v-col cols="12" md="4">
          <v-card class="py-8 px-4 content-light2 item-card" color="lighten-3" >
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88" @click="gotoItem('tupian')">
                  <v-icon
                    class="rotate-img"
                    large
                    style="background-color: #ADD8E6;"
                    v-text="$t('i18n.aiContent')[2].icon"
                  ></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
            <v-card-title
              class="justify-center font-weight-regular text-uppercase"
              v-text="$t('i18n.aiContent')[2].title"
            ></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-8"></div>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
     gotoItem(value) {
      var path = "../ai/#" + value;
      this.$router.push({ path: path }).catch(error => error);
      this.$store.dispatch("updateCurrentPage", 'ai');
    },
  }
};
</script>
