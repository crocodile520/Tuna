"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo",
  setup(__props) {
    const images = [
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
    ];
    common_vendor.ref({
      poster: "https://img2.baidu.com/it/u=2861004349,4239275065&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
      name: "告白气球",
      author: "暂无",
      src: "http://www.qeecc.com/plug/down.php?ac=music&id=d3l5ZHd4a3hz&k=320"
    });
    setTimeout(() => {
      common_vendor.index.clearStorageSync();
      console.log("删除缓存");
    }, 3e4);
    const input = common_vendor.ref("");
    function submit(e) {
      common_vendor.index.showToast({
        "title": "祝福留言提交"
      });
      input.value = "";
      console.log("祝福留言提交");
    }
    const innerAudioContext = common_vendor.index.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    innerAudioContext.src = "http://www.qeecc.com/plug/down.php?ac=music&id=d3l5ZHd4a3hz&k=320";
    innerAudioContext.onPlay(() => {
      console.log("开始播放");
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
    const open = () => {
      innerAudioContext.play();
    };
    common_vendor.onShow(() => {
      open();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(images, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        b: input.value,
        c: common_vendor.o(($event) => input.value = $event.detail.value),
        d: common_vendor.o(submit),
        e: common_vendor.o((...args) => _ctx.submitMessage && _ctx.submitMessage(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c8d25e8"], ["__file", "/Users/mac/Documents/choujain/pages/index/demo.vue"]]);
wx.createPage(MiniProgramPage);
