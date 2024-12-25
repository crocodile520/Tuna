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
  __name: "my_baby",
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
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG300.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG281.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG282.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG283.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG284.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG285.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG287.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG298.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG299.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG300.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG301.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG302.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG303.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG304.jpg",
      "http://81.71.157.154:8081/static/blog/img/my_baby/WechatIMG305.jpg"
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
        e: common_vendor.sr(popup, "7ac544e5-0", {
          "k": "popup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ac544e5"], ["__file", "/Users/mac/Documents/choujain/pages/index/my_baby.vue"]]);
wx.createPage(MiniProgramPage);
