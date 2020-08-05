<template>
  <div class="home">
    <div id="select-shop" @click="isShowShopName(1)">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="選擇市場" name="1" @click="showMask = !showMask">
          <ul>
            <li @click="toPawnshop(0)">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span class="name">C1 Parkside 將軍澳</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
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
                <span>溫馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li @click="toPawnshop(1)">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span class="name">C2 Lake Silver 馬鞍山</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
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
                <span>溫馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
    <van-overlay :show="showMask" @click="isShowShopName(0)" />
    <div class="section">
      <div class="sectioninner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <img src="../../assets/064bcc9e-8f4e-453e-821e-fe7d488d303d.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../../assets/21bb30ac-6c8a-437d-a459-f53ed6f89879.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../../assets/665cd8b1-1a7f-427b-9f10-23387d73bd44.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../../assets/cf565473-6f42-4b83-a955-fae9ecd6dabf.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../../assets/f6ece94e-6d53-4f51-b3a5-4952ae41644c.png" alt />
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="advert">
          <p class="title">愛逛會吃</p>
          <div class="advert-img">
            <img src="../../assets/20200803100033.jpg" alt @click="toGoodslist('叻叻豬')" />
            <img src="../../assets/20200803100000.jpg" alt @click="toGoodslist('香港家豬')" />
            <img src="../../assets/d7ce3bda-1cb6-4840-a2da-f61c27cb0014.png" alt />

            <img src="../../assets/f58d52c2-9c0a-4d3e-80cd-656bfb88e3c8.png" alt />
          </div>
        </div>
        <div class="advert2">
          <p class="title">性價比TOP</p>
          <ul>
            <li v-for="(item,index) in list" :key="index" @click="toGoodsDetails(item,)">
              <img :src="item.img" alt />
              <span>{{item.name}}</span>
              <span class="price">${{item.price}}</span>
            </li>
            <!-- <li>
              <img src="../../assets/96f9bd4a-e9be-4e63-9fcf-21ff9b3ee5b3.png" alt />
              <span>【活鮮】味庫京選進口鮮活加拿大龍蝦400-550g/只*2只裝鮮活到家海鮮水產</span>
              <span class="price">$95</span>
            </li>
            <li>
              <img src="../../assets/a4733477-e4b5-4926-aec9-0d2023685712.png" alt />
              <span>參福元長島即食海參海鮮水產遼刺參高品質7年500g 7-9頭買一斤送一斤</span>
              <span class="price">$52</span>
            </li>
            <li>
              <img src="../../assets/bb75e417-bb67-4b39-985d-241ab4ef1583.png" alt />
              <span>禧美厄瓜多爾白蝦淨重1.8kg 90-108只/盒大蝦原裝進口海鮮水產</span>
              <span class="price">$90</span>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  components: {},
  data() {
    return {
      option: [
        { text: '选择分店', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活動商品', value: 2 },
      ],
      activeNames: [],
      showMask: false,
      goodsList: [
        {
          img: 'img/meihua.png',
          name: '黑豬肉梅花肉450g',
          Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
          price: 55,
          weight: '袋',
          diec: '梅菜扣肉好吃',
          list: ['img/zhurou1.png', 'img/zhurou2.png'],
        },
        {
          img: 'img/paigu.png',
          name: '黑豬肉排骨450g',
          Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
          price: 65,
          weight: '袋',
          diec: '清蒸排骨好吃',
          list: ['img/zhurou3.png', 'img/zhurou4.png'],
        },
        {
          img: 'img/rouxian.png',
          name: '黑豬肉肉餡450g',
          Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
          price: 45,
          weight: '袋',
          diec: '肉餡餃子好吃',
          list: ['img/zhurou5.png', 'img/zhurou6.png'],
        },
        {
          img: 'img/wuhua.png',
          name: '黑豬肉五花肉450g',
          Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
          price: 55,
          weight: '袋',
          diec: '燜五花肉好吃',
          list: ['img/zhurou7.png', 'img/zhurou2.png'],
        },
      ],
      list: [
        {
          img: 'img/xia.png',
          name: '大閘蟹',
          Introduce: '基圍 蝦 大蝦生鮮蝦類推薦選淨重4斤',
          price: 620,
          weight: '袋',
          diec: '買送雞蛋一個',
          list: ['img/dazhaxie1.png', 'img/dazhaxie2.png'],
        },
        {
          img: 'img/xia2.png ',
          name: '加拿大龍蝦400-550g',
          Introduce: '大龍蝦',
          price: 95,
          weight: '袋',
          diec: '買送雞蛋一個',
          list: ['img/longxia1.png'],
        },
        {
          img: 'img/shuizhi.png',
          name: '水產遼刺參高品質7年500g',
          Introduce:
            '參福元長島即食海參海鮮水產遼刺參高品質7年500g 7-9頭買一斤送一斤',
          price: 52,
          weight: '袋',
          diec: '買送雞蛋一個',
          list: ['img/haishen1.png', 'img/haishen2.png'],
        },
        {
          img: 'img/xia1.png',
          name: '禧美厄瓜多爾白蝦',
          Introduce:
            '禧美厄瓜多爾白蝦淨重1.8kg 90-108只/盒大蝦原裝進口海鮮水產',
          price: 90,
          weight: '袋',
          diec: '買送雞蛋一個',
          list: ['img/xiaoxia1.png', 'img/xiaoxia2.png'],
        },
      ],
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      // 如果需要分页器
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
    isShowShopName(type) {
      this.showMask = !this.showMask
      if (!type) {
        // console.log(1)
        this.activeNames = []
      }
    },
    toPawnshop(type) {
      this.$router.push({ path: '/pawnshop', query: { type } })
    },
    toGoodslist(pawnshop) {
      this.$router.push({
        path: '/goodslist',
        query: { goodsList: JSON.stringify(this.goodsList), pawnshop },
      })
    },
    toGoodsDetails(item) {
      this.$router.push({
        path: '/goodsdetails',
        query: { item: JSON.stringify(item) },
      })
    },
  },
}
</script>
<style lang="less">
.home {
  // height: 100%;
}
.section {
  padding-top: 104px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  padding-right: 10px;
  padding-left: 10px;
  .sectioninner {
    width: 100%;
    img {
      width: 100%;
      border-radius: 5px;
      display: block;
    }
    .advert {
      width: 100%;

      .title {
        // text-align: center;
        padding: 10px 10px 0px 10px;
        font-weight: 600;
      }
      .advert-img {
        img {
          width: 50%;
          display: inline-block;
          // margin: 10px;
          padding: 5px;
          box-sizing: border-box;
        }
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
      }

      img {
        width: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    .advert2 {
      .title {
        padding: 0px 10px 0px 10px;
        font-weight: 600;
      }
      ul {
        width: 100%;
        height: 100%;
        overflow: auto;
        white-space: nowrap;
        // margin: 5px;
        border-radius: 10px;
      }
      li {
        display: inline-block;
        width: 28%;
        padding: 5px;
        img {
        }
        span {
          white-space: pre-wrap;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;

          -webkit-line-clamp: 2;
        }
        .price {
          display: block;
          color: red;
          font-weight: 600;
        }
      }
    }
  }
}
#select-shop {
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0px;
  margin: auto;
  z-index: 10;
  // background-color: #3cb371;
  box-sizing: border-box;
  // background-image: url('../../assets/background.jpg');
  .van-cell {
    .van-cell__title {
      font-size: 16px;
      font-weight: 600;
    }
    .van-icon {
      font-weight: 700;
      font-size: 25px;
    }
    // background-color: #3cb371;
    &::after {
      content: '';
      transform: scaleY(0) !important;
    }
  }
  .van-collapse-item__content {
    background-color: #dddddd;
    padding: 10px 0px;
    max-height: 500px;
    overflow: auto;
  }

  ul {
    padding: 0px 8px;
    li {
      background-color: #ffffff;
      display: flex;
      color: black;
      font-weight: 200;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      overflow: hidden;
      flex-wrap: wrap;

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
            .name {
              font-weight: 700;
            }
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
}
</style>