<template>
  <div id="pawnshop">
    <div class="pawnshop-nav-wrap">
      <ul class="pawnshop-nav">
        <li>
          <router-link to="/home">
            <van-icon
              name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596016875361&di=5dd8def52795f095983d5c9dae944bea&imgtype=0&src=http%3A%2F%2Fimg1.yiwugou.com%2Fi004%2F2015%2F05%2F25%2F19%2Ffd832a5855638c8ec536b9777d62681d.png"
            ></van-icon>
            <span>首頁</span>
          </router-link>
        </li>
        <li @click="switchPawnshop(6)">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=633842909,565973887&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===6}">推薦</span>
        </li>
        <li @click="switchPawnshop(0)">
          <van-icon
            name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3169021353,2597420932&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===0}">蔬菜</span>
        </li>
        <li @click="switchPawnshop(1)">
          <van-icon
            name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596018062517&di=198f6d7f38e3775fb5532cab0840739b&imgtype=0&src=http%3A%2F%2Fnews.youth.cn%2Fgj%2F201504%2FW020150421530617370093.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===1}">肉類</span>
        </li>
        <li @click="switchPawnshop(2)">
          <van-icon
            name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2895540521,2528989340&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===2}">冰鮮肉</span>
        </li>
        <li @click="switchPawnshop(3)">
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1902580175,836200988&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===3}">魚類</span>
        </li>
        <li @click="switchPawnshop(4)">
          <van-icon
            name="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3135547534,2907623747&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===4}">生果</span>
        </li>
        <li @click="switchPawnshop(5)">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2635714501,2084174949&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===5}">海鮮</span>
        </li>

        <li>
          <van-icon
            name="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3486720123,2739477743&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===7}">其他</span>
        </li>
      </ul>
    </div>
    <div class="pawnshop-centent">
      <ul class="pawnshopList-max">
        <li class="pawnshopItem-max" v-if="isActive===0">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号蔬菜当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===1">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号肉类当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===2">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号冰鲜肉当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===3">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号鱼类当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===4">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号生果当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===5">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList">
              <div class="shop-food">
                <div class="shop-logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3826298508,3900552259&fm=26&gp=0.jpg"
                    alt
                  />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港1号海鲜当铺</span>
                    <p>正在营业</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00~次日07:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、卫生干净、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="recommend" v-show="isActive===6">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/127ea298-4cec-40ef-a6f3-90d7ead7b1b2.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/364da3c2-4030-40f6-bb61-1e121c898252.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/665cd8b1-1a7f-427b-9f10-23387d73bd44.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/87e8859d-901a-44e0-842e-42c88b3c3bbd.png" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="shop-recommend">
          <p>
            <van-icon name="fire" />本店推薦
          </p>
          <img src="../../assets/8fd196fd-f8d8-4967-834e-73dedc97d5d6.png" alt />
          <ul class="list">
            <li class="item">
              <img src="../../assets/fd0936c1-ab16-4316-9f25-d799f2020bc0.png" alt />
              <span>永佑加拿大猪肋排800g排骨猪肉冷鏈生鮮燉湯</span>
              <span>$63.8</span>
            </li>
            <li class="item">
              <img src="../../assets/20200731115130.png" alt />
              <span>天譜樂食澳大利亞原切M3雪花烤肉片200g進口穀飼牛肉片安格斯烤肉食材生鮮</span>
              <span>$87.8</span>
            </li>
            <li class="item">
              <img src="../../assets/3efaebca-6bde-4e70-8344-c0bfa279740a.png" alt />
              <span>首食惠紐西蘭羔羊肉片500g/袋首農出品羊排肉卷火鍋食材</span>
              <span>$358.8</span>
            </li>
            <li class="item">
              <img src="../../assets/16a57ee6-d2c9-4c9c-a985-c2dfa48180a6.png" alt />
              <span>華英贛南散養生態麻鴨1.25kg新鮮鴨肉整鴨土鴨</span>
              <span>$93.5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
// import IScroll from 'iscroll/build/iscroll-probe'
export default {
  components: {},
  data() {
    return {
      iscroll: null,
      isActive: 6,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部当铺', value: 0 },
        { text: '最新当铺', value: 1 },
        { text: '老字号', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
  methods: {
    switchPawnshop(num) {
      this.isActive = num
    },
    toGoodsList() {
      this.$router.push({ path: '/goodslist' })
    },
  },
}
</script>
<style lang="less">
#pawnshop {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .pawnshop-nav-wrap {
    width: 100%;
    overflow: auto;
    position: fixed;
    z-index: 10;
  }
  .pawnshop-nav {
    // display: flex;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    // flex-flow: row nowrap;
    border-bottom: 1px solid #000;
    background-color: #ffffff;
    li {
      display: inline-block;

      margin-right: 20px;
      // width: 100px;
      text-align: center;
      i {
        border-radius: 50%;
        display: block;
        font-size: 25px;
        img {
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .isActive {
        color: red;
      }
    }
  }
  .pawnshop-centent {
    padding-top: 65px;
    height: 510px;
    box-sizing: content-box;
    // background-color: #dddddd;
  }
  .pawnshopList-max {
    box-sizing: border-box;
    background-color: #dddddd;
    overflow: auto;

    .pawnshopItem {
      background-color: #ffffff;
      display: flex;
      color: black;
      font-weight: 200;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      flex-wrap: wrap;
      margin: 8px;
      .shop-food {
        position: relative;
        display: flex;
        .shop-logo {
          width: 80px;
          img {
            width: 100%;
          }
        }

        .shop-inner {
          width: 270px;

          padding: 10px 00px;
          box-sizing: border-box;
          .shop-top {
            display: flex;
            justify-content: space-between;
            p {
              padding: 0px;
              margin: 0px;
              padding: 1px;
              background-color: #ffc0cb47;
              font-size: 14px;
              color: red;
            }
          }
          .shop-centent {
            display: flex;
            justify-content: space-between;
          }
        }
      }

      .line {
        position: absolute;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        background-color: #cccccc;
        bottom: 0px;
      }
      .shop-footer {
        width: 100%;
        text-align: center;
        padding-top: 5px;
        i {
          margin-right: 5px;
        }
        span {
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
  .recommend {
    padding: 10px;
    .shop-recommend {
      border: 1px solid #cccccc;
      border-radius: 10px;
      padding: 5px;
      p {
        padding: 5px;
        font-weight: 600;

        i {
          color: red;
          font-size: 18px;
        }
      }
      .list {
        overflow: auto;
        white-space: nowrap;

        .item {
          display: inline-block;
          width: 28%;
          margin: 0px 5px;

          img {
            display: block;
            height: 92px;
          }
          span {
            white-space: pre-wrap;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;

            -webkit-line-clamp: 2;
            &:nth-last-child(1) {
              color: red;
              font-weight: 6000;
            }
          }
        }
      }
    }
  }
}
</style>