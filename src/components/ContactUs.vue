<template>
  <section id="contact-us" class="lighten-3">
    <div class="py-8"></div>
    <div class="grey lighten-3"></div>
    <v-container class="text-center">
      <h3 class="font-weight-medium mb-3 item-title">{{$t('i18n.contactUs')}}</h3>
      <v-responsive class="mx-auto mb-6" width="56">
        <!-- <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>-->
      </v-responsive>
    </v-container>
    <v-container>
      <v-row style="margin:40px 0 0 0">
        <v-col cols="24" md="24">
          <div class="font-weight-bold">{{$t('i18n.busEmail')}}</div>
          <div class="font-weight-regular">
            <v-icon color="#0050a0">mdi-email</v-icon>
            <a href="mailto:xumingyang@iranktek.com">{{$t('i18n.busEmailText')}}</a>
          </div>
        </v-col>
      </v-row>
      <v-row style="margin:40px 0 0 0">
        <v-col cols="24" md="24">
          <div class="font-weight-bold">{{$t('i18n.hrEmail')}}</div>
          <div class="font-weight-regular">
            <v-icon color="#0050a0">mdi-email</v-icon>
            <a href="mailto:business@iranktek.com">{{$t('i18n.hrEmailText')}}</a>
          </div>
        </v-col>
      </v-row>
      <v-row style="margin:40px 0 0 0">
        <v-col cols="24" md="24">
          <div class="font-weight-bold">{{$t('i18n.address')}}</div>
          <div class="font-weight-regular">
            <v-icon color="#0050a0">mdi-domain</v-icon>
            {{$t('i18n.addressText')}}
          </div>
        </v-col>
      </v-row>
      <baidu-map style="margin:40px 0;height:400px" :center="center" :zoom="zoom" @ready="handler" enableScrollWheelZoom="ture" ak="3aD0HjYFcN56II3lGCmSjMScynh1pAED">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-marker :position="center" :dragging="false" ></bm-marker>
      </baidu-map>
    </v-container>
  </section>
</template>

<script>
import {BaiduMap, BmMarker, BmNavigation} from 'vue-baidu-map'
export default {
  name: "ContactUs",
  components: {
    BaiduMap,
    BmMarker,
    BmNavigation
  },
  data: () => ({
    center: {lng: 117.141506,lat:31.843907},
    zoom: 3
  }),
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 117.141506;
      this.center.lat = 31.843907;
      this.zoom = 16
    }
  }
};
</script>
