"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([
      {
        id: 1,
        type: 1,
        name: "20元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 10
      },
      {
        id: 2,
        type: 2,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 107,
        top: 10
      },
      {
        id: 3,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 204,
        top: 10
      },
      {
        id: 4,
        type: 1,
        name: "5元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 301,
        top: 10
      },
      {
        id: 5,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 398,
        top: 10
      },
      {
        id: 6,
        type: 1,
        name: "15元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 10
      },
      {
        id: 7,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 107
      },
      {
        id: 8,
        type: 2,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 204
      },
      {
        id: 9,
        type: 1,
        name: "5元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 301
      },
      {
        id: 10,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        top: 398,
        left: 495
      },
      {
        id: 11,
        type: 1,
        name: "10元红包",
        image_url: "/static/html/image/djj.jpg",
        top: 495,
        left: 495
      },
      {
        id: 12,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 398,
        top: 495
      },
      {
        id: 13,
        type: 2,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 301,
        top: 495
      },
      {
        id: 14,
        type: 1,
        name: "5元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 204,
        top: 495
      },
      {
        id: 15,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 107,
        top: 495
      },
      {
        id: 16,
        type: 1,
        name: "5元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 495
      },
      {
        id: 17,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 398
      },
      {
        id: 18,
        type: 1,
        name: "5元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 301
      },
      {
        id: 19,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 204
      },
      {
        id: 20,
        type: 1,
        name: "1元红包",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 107
      }
    ]);
    const circleList = common_vendor.ref([]);
    const colorCircleFirst = common_vendor.ref("#F12416");
    const constcolorCircleSecond = common_vendor.ref("#FFFFFF");
    const colorAwardDefault = common_vendor.ref("#F5F0FC");
    const colorAwardSelect = common_vendor.ref("#ffe400");
    const btntop = common_vendor.ref(0);
    const time = common_vendor.ref(null);
    const indexSelect = common_vendor.ref(randomNum(20, 0));
    const lottert = common_vendor.ref(0);
    const prize = common_vendor.ref(0);
    const prize_name = common_vendor.ref("");
    const men = common_vendor.ref(false);
    const init = () => {
      let cleft;
      let ctop;
      const dian = [];
      for (var j = 0; j < 24; j++) {
        if (j == 0) {
          cleft = 5;
          ctop = 5;
        } else if (j < 6) {
          ctop = 5;
          cleft += 105;
        } else if (j == 6) {
          ctop = 5;
          cleft = 630;
        } else if (j < 12) {
          ctop += 105;
          cleft = 630;
        } else if (j == 12) {
          ctop = 630;
          cleft = 630;
        } else if (j < 18) {
          ctop = 630;
          cleft -= 105;
        } else if (j == 18) {
          ctop = 630;
          cleft = 5;
        } else {
          if (!(j < 24))
            return;
          ctop -= 105, cleft = 5;
        }
        dian.push({
          topCircle: ctop,
          leftCircle: cleft
        });
      }
      circleList.value = dian;
      console.log("cric", circleList.value);
      console.log("prie", prize.value);
    };
    const toggleColors = () => {
      if (colorCircleFirst.value == "#FFFFFF") {
        colorCircleFirst.value = "#F12416";
        constcolorCircleSecond.value = "#FFFFFF";
      } else {
        colorCircleFirst.value = "#FFFFFF";
        constcolorCircleSecond.value = "#F12416";
        btntop.value = 0;
      }
    };
    const toggleBtnTop = () => {
      if (btntop.value === 0) {
        btntop.value = -20;
      } else {
        btntop.value = 0;
      }
    };
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function clearTimer() {
      if (time.value) {
        clearInterval(time.value);
        time.value = null;
      }
    }
    const check = () => {
      const cachedTime = common_vendor.index.getStorageSync("cachedTime");
      if (!cachedTime) {
        return;
      }
      const currentDate = getFormattedDate(/* @__PURE__ */ new Date());
      if (cachedTime == currentDate) {
        return true;
      } else {
        return false;
      }
    };
    function getFormattedDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    const startBtn = () => {
      if (time.value || check()) {
        common_vendor.index.showModal({
          // title:'每位嘉宾只允许抽奖一次',
          content: "今天抽奖名额结束，明天继续！"
          // success(res) {
          // 	if (res.confirm) {
          // 		uni.navigateTo({
          // 			url: '/pages/index/demo'
          // 		})
          // 	}
          // }
        });
        return;
      } else {
        clearInterval(btntopInterval);
        men.value = true;
        btntop.value = 0;
        lottert.value = 0;
        var i = indexSelect.value;
        const s = common_vendor.ref(0);
        let running = true;
        const update = () => {
          if (!running)
            return;
          if (time.value) {
            console.log("ssvalue", end.value);
            clearTimer();
          }
          time.value = setInterval(() => {
            i++;
            i %= 20;
            if (end.value > 0) {
              indexSelect.value = i;
              s.value = s.value + 100;
              end.value = end.value - 1;
              if (lottert.value > 0 && i + 1 === lottert.value) {
                clearTimer();
                clearendtimse();
                btntop.value = btntop.value === 0 ? -20 : 0;
                btntopInterval = setInterval(toggleBtnTop, 900);
                if (list[i].type === 2) {
                  prize.value = 2;
                  (/* @__PURE__ */ new Date()).getTime();
                  const currentDate = getFormattedDate(/* @__PURE__ */ new Date());
                  common_vendor.index.setStorageSync("cachedTime", currentDate);
                  common_vendor.index.setStorageSync("one", prize_name.value);
                  running = false;
                } else {
                  prize_name.value = list[i].name;
                  prize.value = 1;
                  running = false;
                  const currentDate = getFormattedDate(/* @__PURE__ */ new Date());
                  common_vendor.index.setStorageSync("cachedTime", currentDate);
                  common_vendor.index.setStorageSync("one", prize_name.value);
                }
                s.value = 0;
                return;
              }
            } else {
              s.value = s.value + 1;
              indexSelect.value = i;
              if (lottert.value > 0 && i + 1 === lottert.value) {
                clearTimer();
                clearendtimse();
                btntop.value = btntop.value === 0 ? -20 : 0;
                btntopInterval = setInterval(toggleBtnTop, 900);
                if (list[i].type === 2) {
                  prize.value = 2;
                  running = false;
                  const currentDate = getFormattedDate(/* @__PURE__ */ new Date());
                  common_vendor.index.setStorageSync("cachedTime", currentDate);
                  common_vendor.index.setStorageSync("one", prize_name.value);
                } else {
                  prize_name.value = list[i].name;
                  prize.value = 1;
                  running = false;
                  const currentDate = getFormattedDate(/* @__PURE__ */ new Date());
                  common_vendor.index.setStorageSync("cachedTime", currentDate);
                  common_vendor.index.setStorageSync("one", prize_name.value);
                }
                s.value = 0;
                return;
              }
            }
            update();
          }, 10 + s.value);
        };
        update();
        setTimeout(function() {
          lottert.value = randomNum(1, 20);
          console.log("ss", lottert.value);
          end.value = 10;
        }, 2e3 * 3);
      }
    };
    let btntopInterval;
    const endtime = common_vendor.ref(null);
    const end = common_vendor.ref(0);
    const conTinue = () => {
      men.value = false;
      prize.value = 0;
    };
    function clearendtimse() {
      if (endtime.value) {
        clearInterval(endtime.value);
        endtime.value = null;
      }
    }
    common_vendor.onMounted(() => {
      init();
      setInterval(toggleColors, 900);
      btntopInterval = setInterval(toggleBtnTop, 900);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(list, (box, index, i0) => {
          return {
            a: box.image_url,
            b: common_vendor.t(box.name),
            c: index,
            d: box.left + "rpx",
            e: box.top + "rpx",
            f: index == indexSelect.value ? colorAwardSelect.value : colorAwardDefault.value
          };
        }),
        b: btntop.value + "rpx",
        c: common_vendor.o(startBtn),
        d: common_vendor.f(circleList.value, (item, index, i0) => {
          return {
            a: index,
            b: item.topCircle + "rpx",
            c: item.leftCircle + "rpx",
            d: index % 2 == 0 ? colorCircleFirst.value : constcolorCircleSecond.value
          };
        }),
        e: prize.value === 1
      }, prize.value === 1 ? {
        f: common_vendor.t(prize_name.value),
        g: common_vendor.o(conTinue)
      } : {}, {
        h: prize.value == 2
      }, prize.value == 2 ? {
        i: common_vendor.o(conTinue)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/mac/Documents/choujain/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
