<template>
  <section id="introduction">
    <div class="py-8"></div>
    <v-container class="text-center" transition="slide-x-reverse-transition">
      <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.introduction')}}</h3>
      <div class="py-8"></div>
      <v-responsive
        class="mx-auto font-weight-regular text-justify"
        style="color: #012375;text-indent: 32px;"
      >
        <v-row>
          <v-col cols="12" md="6">
            <img
              src="../assets/images/bg001.jpg"
              style="height: 300px;width: 300px;float: left;margin-right: 90px;"
            />
          </v-col>
          <v-col cols="12" md="6">
            <p>{{$t('i18n.introductionText1')}}</p>
            <p>{{$t('i18n.introductionText2')}}</p>
          </v-col>
        </v-row>
      </v-responsive>
      <div class="py-8"></div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Introduction",

  data: () => ({})
};
</script>
