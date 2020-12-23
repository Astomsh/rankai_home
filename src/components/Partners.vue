<template>
  <section id="partner">
    <div class="grey lighten-3"></div>
    <v-container class="text-center">
      <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.partner')}}</h3>
      <v-responsive class="mx-auto mb-6" width="56">
      </v-responsive>
      <v-row>
          <v-col
            v-for="({ url, icon, name }, i) in $t('i18n.partners')"
            :key="i"
            cols="12"
            md="3"
          >
            <v-card class="py-8 px-4 content-light" flat style="height:100%">
              <v-theme-provider dark>
                <a :href="url" target="_blank">
                    <img :src="icon" height="52px">
                </a>
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-regular text-uppercase content-text"
                v-text="name"
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
  name: "Partner",
  data: () => ({})
};
</script>
