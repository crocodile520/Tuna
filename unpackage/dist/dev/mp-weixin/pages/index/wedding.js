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
  __name: "wedding",
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
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01294.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01304.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01312.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01344.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01348.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01356.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01366.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01375.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01390.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01395.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01402.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01420.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01443.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01445.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01453.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01458.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01479.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01497.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01505.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01507.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01534.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01514.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01539.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01587.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01608.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01611.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01617.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01624.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01631.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01637.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01651.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01662.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01676.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01697.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01718.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01732.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01749.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01753.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01777.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01786.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01802.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01840.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01900.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01913.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01923.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01958.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01969.jpg",
      "http://81.71.157.154:8081/static/blog/img/wedding_img/DSC01988.jpg"
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
        e: common_vendor.sr(popup, "8ae5a4b6-0", {
          "k": "popup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ae5a4b6"], ["__file", "/Users/mac/Documents/choujain/pages/index/wedding.vue"]]);
wx.createPage(MiniProgramPage);
