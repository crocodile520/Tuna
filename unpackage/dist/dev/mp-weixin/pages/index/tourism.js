"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "tourism",
  setup(__props) {
    const popup = common_vendor.ref(false);
    const btn_img = (item) => {
      popup.value.open("center");
      scale.value = 1;
      path.value = item;
    };
    const path = common_vendor.ref();
    const break_img = () => {
      popup.value.close();
      scale.value = 1;
    };
    const scale = common_vendor.ref(1);
    const onScale = (e) => {
      scale.value = e.detail.scale;
    };
    const imageList = common_vendor.ref([
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG181.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG182.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG183.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG184.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG185.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG186.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG187.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG188.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG189.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG190.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG191.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG192.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG193.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG194.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG195.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG196.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG197.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG231.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG232.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG235.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG254.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG255.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG257.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG258.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG260.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG261.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG263.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG265.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG266.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG268.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG269.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG271.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG272.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG288.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG289.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG290.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG291.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG292.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG293.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG294.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG295.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG296.jpg",
      "http://81.71.157.154:8081/static/blog/img/tourism_img/WechatIMG297.jpg"
    ]);
    const maxImagesPerRow = common_vendor.ref(2);
    common_vendor.computed(() => {
      return `${100 / maxImagesPerRow.value - 2}%`;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imageList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => btn_img(item), index),
            b: index,
            c: item
          };
        }),
        b: path.value,
        c: common_vendor.o(break_img),
        d: common_vendor.o(onScale),
        e: common_vendor.sr(popup, "66c84b34-0", {
          "k": "popup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-66c84b34"], ["__file", "/Users/mac/Documents/choujain/pages/index/tourism.vue"]]);
wx.createPage(MiniProgramPage);
