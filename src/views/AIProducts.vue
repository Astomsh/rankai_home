<template>
  <div class="about">
    <section
      class="parallax-background mobile-display"
      style="height:400px;background: rgb(37, 150, 246);"
    >
      <div
        style="height:300px;background: rgb(37, 150, 246);display: flex;justify-content: flex-end;"
      >
        <div class="white--text text-left title-label" style="animation: fadeInAnimation ease 3s;">
          <span class="font-weight-medium">{{$t('i18n.ai')}}</span>
        </div>
        <div style="animation: fadeInAnimation ease 3s">
          <img
            style="height:300px;width:540px;float:right;margin-right: 50px;"
            src="../assets/images/ai.gif"
          />
        </div>
      </div>
    </section>
    <section id="service">
      <div class="py-8"></div>
      <v-container class="text-center">
        <!-- <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.service')}}</h3> -->
        <v-responsive class="mx-auto mb-4" width="56"></v-responsive>
        <v-responsive
          class="mx-auto font-weight-regular text-justify"
          max-width="1200"
          style="color: #012375;text-indent: 32px;font-size: large;"
        >{{$t('i18n.aiServiceText')}}</v-responsive>
        <div class="py-8"></div>
      </v-container>
    </section>
    <section id="cases">
      <v-container class="text-center">
        <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.cases')}}</h3>
        <v-responsive class="mx-auto mb-6" width="56"></v-responsive>
        <v-row id="pinglun">
          <v-col cols="12" md="12">
            <v-card class="py-8 px-4 content-light" color="lighten-3" style="height:100%">
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="$t('i18n.aiContent')[0].icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-regular text-uppercase"
                v-text="$t('i18n.aiContent')[0].title"
              ></v-card-title>
              <v-card-text class="subtitle-1 text-justify" v-text="$t('i18n.aiContent')[0].text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="duihua">
          <v-col cols="12" md="12">
            <v-card class="py-8 px-4 content-light" color="lighten-3" style="height:100%">
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="$t('i18n.aiContent')[1].icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-regular text-uppercase"
                v-text="$t('i18n.aiContent')[1].title"
              ></v-card-title>
              <v-card-text class="subtitle-1 text-justify" v-text="$t('i18n.aiContent')[1].text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="tupian">
          <v-col cols="12" md="12">
            <v-card class="py-8 px-4 content-light" color="lighten-3" style="height:100%">
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="$t('i18n.aiContent')[2].icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-regular text-uppercase"
                v-text="$t('i18n.aiContent')[2].title"
              ></v-card-title>
              <v-card-text class="subtitle-1 text-justify" v-text="$t('i18n.aiContent')[2].text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-8"></div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    var hash = window.location.hash;
    var index = hash.lastIndexOf("#");
    if (index != -1) {
      var id = hash.substring(index + 1, hash.length + 1);
      var div = document.getElementById(id);
      if (div) {
        div.scrollIntoView();
      }
    }
  }
};
</script>
