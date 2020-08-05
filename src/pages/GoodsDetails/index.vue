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
      <p>{{$route.query.pawnshop||'叻叻豬肉鋪'}}</p>
      <van-icon name="weapp-nav" @click="showShare = true"></van-icon>
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
    <div class="goods-details-centent">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="showMaxBrowse">
            <img :src="item.img" alt />
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
            <span class="name">{{item.name}}</span>
          </van-col>
          <van-col span="24">
            <span class="Details">{{item.Introduce}}</span>
          </van-col>
          <van-col span="20">
            <span class="price">${{item.price}}</span>
            <span class="weight">/{{item.weight}}</span>
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
          :style="{ height: '50%' }"
          class="Shopping-popup"
        >
          <van-row>
            <van-col span="8">
              <img class="goodsImg" :src="item.img" alt />
            </van-col>
            <van-col span="16" class="goodsConfig">
              <p class="name">{{item.name}}</p>
              <p class="price">
                ${{item.price}}
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
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
            <van-col span="24" class="add">
              <van-button round type="info" @click="addGoods($event,item)">加入購物車</van-button>
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
      <van-tabs v-model="active">
        <van-tab title="商品介紹">
          <div class="goods-details-Img">
            <p v-for=" (item,index) in item.list" :key="index">
              <img :src="item" alt />
            </p>
          </div>
        </van-tab>
        <van-tab title="規格參數">
          <div class="detail_item" id="detail2">
            <div id="package" style>
              <div class="mod_tit_line">
                <span>包裝清單</span>
              </div>
              <div class="mod_row" id="detPackage">xxxxxx,450g</div>
            </div>
            <div class="inner">
              <div class="mod_tit_line">
                <span>商品參數</span>
              </div>
              <div id="detParam">
                <br />
                <p>
                  <van-row>
                    <van-col span="6">
                      <span>商品編號</span>
                    </van-col>
                    <van-col span="10">
                      <span>7629757</span>
                    </van-col>
                  </van-row>
                </p>

                <p>
                  <van-row>
                    <van-col span="6">
                      <span>淨含量</span>
                    </van-col>
                    <van-col span="10">
                      <span>1.2kg</span>
                    </van-col>
                  </van-row>
                </p>

                <p>
                  <van-row>
                    <van-col span="6">
                      <span>貯存條件</span>
                    </van-col>
                    <van-col span="10">
                      <span>深冷、冷凍-18℃</span>
                    </van-col>
                  </van-row>
                </p>

                <p>
                  <van-row>
                    <van-col span="6">
                      <span>保質期</span>
                    </van-col>
                    <van-col span="10">
                      <span>365天</span>
                    </van-col>
                  </van-row>
                </p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="售後保障">
          <div class="mod_tit_line">
            <span>商品参数</span>
          </div>
          <!-- <span>“日日食良”服務是為魔鏡等級S2及以上的京東優質客戶提供的售後特色服務，符合條件的生鮮自營訂單商品有破損或腐壞等問題，可以在商品簽收後48小時內提交“優鮮賠”申請，提交申請後100分鐘內稽核通過後即享補償或退款，無需返回商品，為客戶節省了返回商品的物流等待時間和收貨檢測的處理時間（非鮮活易腐類商品除外）</span> -->
          <span>
            <!-- <br /> -->
            <br />异常問題：
            商品促銷資訊以商品詳情頁“促銷”欄中的資訊為准；商品的具體售價以訂單結算頁價格為准；如您發現活動商品售價或促銷資訊有异常，建議購買前先聯系銷售商諮詢。
          </span>
        </van-tab>
      </van-tabs>
    </div>
    <div class="goods-details-footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />

        <van-goods-action-icon icon="shop-o" text="店鋪" @click="onClickIcon" />
        <van-goods-action-button type="danger" text="立即購買" @click="onClickButton" />
      </van-goods-action>
    </div>
    <div id="shangxia2">
      <span id="gotop1" ref="gotop1">
        <img src="img/huojian.svg" alt="返回顶部小火箭" />
      </span>
    </div>
    <div id="ball" ref="ball"></div>
  </div>
</template>
<script>
import { ImagePreview, Dialog } from 'vant'
import { mapState } from 'vuex'
import Swiper from 'swiper'
export default {
  components: {},
  data() {
    return {
      active: 0,
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

      list: [],
      item: {},
    }
  },
  mounted() {
    let obj = JSON.parse(this.$route.query.item)
    this.item = {
      ...obj,
      num: 1,
    }
    this.list = obj.list
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
      ImagePreview([JSON.parse(this.$route.query.item).img])
    },
    onClickIcon() {
      Toast('点击图标')
    },
    onClickButton() {
      if (this.isLogin) {
        this.$store.commit('Update_payOrdersList', this.item)
        this.$router.push({
          path: '/pay',
        })
      } else {
        Dialog.confirm({
          title: '提示',
          message: '你還沒有登錄哦，現在馬上去登陸！',
        })
          .then(() => {
            // on confirm
            this.$router.push({ path: '/login' })
          })
          .catch(() => {
            // on cancel
          })
      }
    },
    addGoods(e, item) {
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
      this.$store.commit('Update_shoppingCartList', item)
    },
    toRoute() {
      this.$router.go(-1)
    },
  },
  computed: {
    ...mapState({ isLogin: (state) => state.login.isLogin }),
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
.van-tabs__nav {
  background-color: #ffa341;
  // border-radius: 10px;
  // margin-top: 10px;
  .van-tab {
    border-radius: 10px;
  }
}
.detail_item {
  #package {
    padding: 10px 0px;
    text-align: center;
  }

  .inner {
    text-align: center;
    #detParam {
      margin-top: 10px;
      border-bottom: 1px solid #cccccc;
      // padding: 0px 20px;
      // border-radius: 10px;
      p {
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        padding: 10px 0px;
        // &:nth-last-child(1) {
        //   border: 1px solid #cccccc;
        // }
      }
    }
  }
}
.mod_tit_line {
  position: relative;
  text-align: center;
  margin: 10px 0px;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    margin: auto;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 1px;
    transform: scaleY(0.3);
    background-color: #000;
    z-index: -1;
  }
  span {
    background-color: white;
    width: 90px;
    display: inline-block;
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