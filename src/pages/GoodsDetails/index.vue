<template>
  <div class="goods-details">
    <div class="goods-details-nav">
      <van-icon name="arrow-left" @click="toRoute"></van-icon>
      <!-- <van-tabs v-model="active" class="goods-details-tab">
        <van-tab title="商品"></van-tab>
        <van-tab title="评价"></van-tab>
        <van-tab title="详情"></van-tab>
        <van-tab title="推荐"></van-tab>
      </van-tabs>-->
      <p>1號當鋪蔬菜</p>
      <van-icon name="weapp-nav" @click="showShare = true"></van-icon>
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
    <div class="goods-details-centent">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="showMaxBrowse">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315062764,550271931&fm=26&gp=0.jpg"
              alt
            />
          </div>
          <div class="swiper-slide" @click="showMaxBrowse">
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2877344882,1349295224&fm=26&gp=0.jpg"
              alt
            />
          </div>
          <div class="swiper-slide" @click="showMaxBrowse">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1165665177,1342964217&fm=26&gp=0.jpg"
              alt
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <div>
        <van-row class="goods-details-name">
          <van-col span="24">
            <span class="name">胡蘿蔔 450g</span>
          </van-col>
          <van-col span="24">
            <span class="Details">清炒，煲湯精選，美味之選</span>
          </van-col>
          <van-col span="20">
            <span class="price">$2.15</span>
            <span class="weight">/份/盒/袋</span>
          </van-col>
        </van-row>
        <van-cell
          title="現在下單，最快今日12：00-12：30送達"
          icon="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3008344044,586963172&fm=26&gp=0.jpg"
          @click="show=!show"
        >
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="arrow" class="arrow=icon" />
          </template>
        </van-cell>
        <div class="noRefund">
          <van-icon name="passed"></van-icon>
          <span>不支持7天無理由退款</span>
        </div>
        <van-cell title="已選：450g/份" @click="showShopping=!showShopping">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="arrow" class="arrow=icon" />
          </template>
        </van-cell>
        <van-popup
          v-model="showShopping"
          round
          position="bottom"
          :style="{ height: '40%' }"
          class="Shopping-popup"
        >
          <van-row>
            <van-col span="8">
              <img
                class="goodsImg"
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2877344882,1349295224&fm=26&gp=0.jpg"
                alt
              />
            </van-col>
            <van-col span="16" class="goodsConfig">
              <p class="name">胡蘿蔔</p>
              <p class="price">
                $2.15
                <span>/份</span>
              </p>
              <p class="unit">已選：1份</p>
            </van-col>
            <van-col span="24">
              <p class="Spec">規格：480g/份</p>
            </van-col>
            <van-col class="num" span="24">
              <van-col span="16">
                <p>購買數量</p>
              </van-col>
              <van-col span="8">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
            <van-col span="24" class="add">
              <van-button round type="info" @click="addGoods">加入購物車</van-button>
            </van-col>
          </van-row>
        </van-popup>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
          <div></div>
        </van-popup>
        <!-- <van-cell
          title="現在下單，最快今日12：00-12：30送達"
          icon="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3008344044,586963172&fm=26&gp=0.jpg"
        >
          使用 right-icon 插槽来自定义右侧图标
          <template #right-icon>
            <van-icon name="arrow" class="arrow=icon" />
          </template>
        </van-cell>-->
      </div>
      <div class="goods-details-Img">
        <p>
          <img src="../../assets/20200730123418.jpg" alt />
        </p>
        <p>
          <img src="../../assets/20200730123413.jpg" alt />
        </p>
        <p>
          <img src="../../assets/20200730123424.jpg" alt />
        </p>

        <p>
          <img src="../../assets/20200730123350.jpg" alt />
        </p>
      </div>
    </div>
    <div class="goods-details-footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />

        <van-goods-action-icon icon="shop-o" text="當鋪" @click="onClickIcon" />
        <van-goods-action-button type="danger" text="立即購買" @click="onClickButton" />
      </van-goods-action>
    </div>
    <div id="shangxia2">
      <span id="gotop1" ref="gotop1">
        <img src="../../assets/huojian.svg" alt="返回顶部小火箭" />
      </span>
    </div>
    <div id="ball" ref="ball"></div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'

import Swiper from 'swiper'
export default {
  components: {},
  data() {
    return {
      active: 2,
      showShare: false,
      show: false,
      showShopping: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      value: 0,
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })
    $(function () {
      // 默认速度
      $('#gotop6').click(function () {
        TweenMax.to(window, 1, { scrollTo: 0 })
      })

      // 弹跳球式滚动底部 .box2是要滚动地方的id或者锚点
      $('#gotop5').click(function () {
        TweenMax.to(window, 2, { scrollTo: '.box2', ease: Bounce.easeOut })
      })

      // 返回顶部，绑定gotop1图标和gotop2文字事件
      $('#gotop1,#gotop2').click(function (e) {
        TweenMax.to(window, 1.5, { scrollTo: 0, ease: Expo.easeInOut })
        var huojian = new TimelineLite()
        huojian
          .to('#gotop1', 1, {
            rotationY: 720,
            scale: 0.6,
            y: '+=40',
            ease: Power4.easeOut,
          })
          .to('#gotop1', 1, { y: -1000, opacity: 0, ease: Power4.easeOut }, 0.6)
          .to(
            '#gotop1',
            1,
            {
              y: 0,
              rotationY: 0,
              opacity: 1,
              scale: 1,
              ease: Expo.easeOut,
              clearProps: 'all',
            },
            '1.4'
          )
      })

      // 以1秒慢快慢的速度滚动顶部
      $('#gotop3').click(function () {
        TweenMax.to(window, 1, { scrollTo: 0, ease: Expo.easeInOut })
      })

      // 以1.5秒快慢快的速度滚动顶部
      $('#gotop4').click(function () {
        TweenMax.to(window, 1.5, {
          scrollTo: 0,
          ease: SlowMo.ease.config(0.7, 0.7, false),
        })
      })
    })
    // $(document).scroll((e) => {
    //   if ($(document).scrollTop() >= 300) {
    //     this.$refs.gotop1.style.display = 'block'
    //   }
    // })
  },
  methods: {
    onSelect(option) {
      // Toast(option.name)
      this.showShare = false
    },
    showMaxBrowse() {
      ImagePreview([
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315062764,550271931&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2877344882,1349295224&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1165665177,1342964217&fm=26&gp=0.jpg',
      ])
    },
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      this.$router.push({ path: '/pay' })
    },
    addGoods(e) {
      this.$refs.ball.style.top = e.pageY + 'px'
      this.$refs.ball.style.left = e.pageX + 'px'
      this.$refs.ball.style.transition = 'left 0s, top 0s'
      this.$refs.ball.style.opacity = 1
      this.showShopping = !this.showShopping
      setTimeout(() => {
        this.$refs.ball.style.top = 0.14 + 'rem'
        this.$refs.ball.style.left = 3.39 + 'rem'
        this.$refs.ball.style.transition = 'left 0.5s linear, top 0.5s ease-in'
      }, 20)
    },
    toRoute() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less">
.goods-details {
  padding-top: 50px;
  .goods-details-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    i {
      font-size: 20px;
      margin: 0px 5px;
    }
  }
  .goods-details-tab {
    flex: 1;
  }
  .goods-details-centent {
    padding: 0px 10px;
    .swiper-slide {
      img {
        width: 100%;
      }
    }
    .goods-details-name {
      width: 100%;
      span {
        display: inline-block;
      }
      .name {
        font-size: 16px;
        font-weight: 700;

        padding: 5px 5px 0px 10px;
      }
      .Details {
        color: #bbbbbb;

        padding: 5px 5px 0px 10px;
      }
      .price {
        font-size: 16px;
        font-weight: 700;
        color: red;
        padding: 5px 5px 0px 10px;
      }
    }
    .noRefund {
      // text-align: C;
      padding: 10px 15px;
      border-radius: 10px;
      // background-color: #dddddd;
      i {
        color: red;
      }
    }
    .Shopping-popup {
      padding: 10px 10px;
      box-sizing: border-box;
      // border-radius: 10px 10px 0 0;
      .goodsImg {
        width: 100%;
      }
      .goodsConfig {
        padding: 0px 10px;
        .name {
          font-weight: 600;
          padding: 5px 0px;
        }
        .price {
          color: red;
          font-weight: 400;
          padding: 5px 0px;
          span {
            color: #bbbbbb;
          }
        }
      }
      .Spec {
        margin: 5px 0px;
        padding: 10px 0px;

        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          border-top: 1px solid #cccccc;
          top: 0px;
          left: 0px;
          transform: scaleY(0.5);
        }
      }
      .num {
        position: relative;
        // height: 100%;
        padding: 10px 0px;
        .van-stepper {
          text-align: right;
        }
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          border-top: 1px solid #cccccc;
          top: 1px;
          left: 0px;
          transform: scaleY(0.5);
        }
      }
      .add {
        text-align: center;
        padding: 20px 0px;
        button {
          width: 90%;
          height: 30px;
        }
      }
    }
    .goods-details-footer {
      position: fixed;
      bottom: 0px;
    }
    .van-cell {
      background-color: #dddddd;
      border-radius: 10px;
      margin: 5px 0px;
      display: flex;
      align-items: center;
    }
  }
  .goods-details-Img {
    p {
      margin-top: 10px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
}
#ball {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  position: fixed;
  transition: left 0.5s linear, top 0.5s ease- in;
  z-index: 1000;
  opacity: 0;
}
#gotop1 {
  width: 60px;
  position: fixed;
  bottom: 50px;
  cursor: pointer;
  z-index: 100;
  left: calc(100% - 60px);
  margin-right: -620px;
  // display: none;
}

/* 小火箭悬停特效 */

#gotop1:hover {
  animation: rubberBand 1s;
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

#gotop5 {
  padding: 12px 0;
  font-size: 24px;
  background: #45d3ff;
  display: block;
  color: #fff;
}

.box2 {
  background: #ffa341;
  height: 70px;
  line-height: 70px;
}

.box2 > a {
  margin-left: 15px;
}
</style>