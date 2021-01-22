<template>
  <v-footer light color="#F5F5F5">
    <v-container>
      <v-row class="mobile-display">
        <v-col cols="12" class="align-center mr-3">
          <v-row >
            <v-col clos="12" md="1"/>
            <v-col cols="12" md="2">
                <v-img
                  class="shrink mr-2"
                  contain
                  src="../assets/images/logo2.png"
                  width="200"
                />
            </v-col>
            <v-col cols="12" md="5" style="text-indent: 40px;">
                <p style="font-size:20px;">{{ $t("i18n.footerText") }}</p>
            </v-col>
            <v-col cols="12" md="1"/>
            <v-col cols="12" md="2">
              <v-row>{{ $t("i18n.follow") }}</v-row>
              <v-row style="margin-top: 10px">
                <div class="d-flex float-right">
                  <v-img
                    class="shrink mr-2 mobile-display"
                    contain
                    src="../assets/images/gzh.jpg"
                    width="120"
                    title="关注公众号"
                    style="cursor: pointer"
                  />
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" md="1"/>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="font-weight-thin text-center">
        <v-col
          cols="24"
          class="align-center mr-3"
          style="padding: 20px 0px 0px 0px"
        >
          <span class="mx-3">{{ $t("i18n.copyright") }}</span>
          <span class="mx-3">{{ $t("i18n.company") }}</span>
          <span class="mx-3">
            <a
              style="display: inline-block; text-decoration: none; color: #000"
              rel="nofollow"
              href="http://www.beian.miit.gov.cn"
              target="_blank"
            >
              <p style="margin-bottom: 0px !important">
                {{ $t("i18n.record") }}
              </p>
            </a>
          </span>
          <span class="mx-3">
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34019202000912"
              style="
                display: inline-block;
                text-decoration: none;
                height: 20px;
                line-height: 20px;
                color: #000;
              "
            >
              <img
                src="../assets/images/beian.png"
                style="float: left; margin-right: 5px"
              />
              <p style="white-space: nowrap">{{ $t("i18n.record2") }}</p>
            </a>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
  methods: {},
};
</script>
<style scoped>
</style>>
