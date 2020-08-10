<template>
  <div class="shoplist">
    <van-sticky>
      <van-search
        v-model="addressValvue"
        show-action
        label="地址"
        placeholder="查找門店"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </van-sticky>

    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <div class="shop-type">
          <span>智慧餐廳</span>
          <span>有包間</span>
          <span>街邊吃</span>
          <span>有會議室</span>
          <span>商場店</span>
        </div>
        <div style="padding: 5px 16px;">
          <van-button type="danger" block round @click="onConfirm">确认</van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <ul>
      <li @click="toPawnshop(0)">
        <div class="shop-food">
          <div class="shop-logo">
            <img src alt />
          </div>
          <div class="shop-inner">
            <div class="shop-top">
              <span class="name">Parkside 將軍澳</span>
              <p>正在營業</p>
            </div>
            <div class="shop-centent">
              <span>早8:00 晚8:00</span>
              <p>1.71km</p>
            </div>
            <div class="shop-bottom">
              <van-icon
                name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
              ></van-icon>將軍澳唐俊街18號
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="shop-footer">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
          ></van-icon>

          <span>本市場已全面消毒、衛生乾淨、放心食用</span>
        </div>
      </li>
      <li @click="toPawnshop(1)">
        <div class="shop-food">
          <div class="shop-logo">
            <img src alt />
          </div>
          <div class="shop-inner">
            <div class="shop-top">
              <span class="name">Lake Silver 馬鞍山</span>
              <p>正在營業</p>
            </div>
            <div class="shop-centent">
              <span>早8:00 晚8:00</span>
              <p>1.71km</p>
            </div>
            <div class="shop-bottom">
              <van-icon
                name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
              ></van-icon>馬鞍山 銀湖天峰 商場
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="shop-footer">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
          ></van-icon>
          <span>本市場已全面消毒、衛生乾淨、放心食用</span>
        </div>
      </li>
      <li @click="toPawnshop(0)">
        <div class="shop-food">
          <div class="shop-logo">
            <img src alt />
          </div>
          <div class="shop-inner">
            <div class="shop-top">
              <span class="name">Parkside 將軍澳</span>
              <p>正在營業</p>
            </div>
            <div class="shop-centent">
              <span>早8:00 晚8:00</span>
              <p>1.71km</p>
            </div>
            <div class="shop-bottom">
              <van-icon
                name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
              ></van-icon>將軍澳唐俊街18號
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="shop-footer">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
          ></van-icon>

          <span>本市場已全面消毒、衛生乾淨、放心食用</span>
        </div>
      </li>
      <li @click="toPawnshop(1)">
        <div class="shop-food">
          <div class="shop-logo">
            <img src alt />
          </div>
          <div class="shop-inner">
            <div class="shop-top">
              <span class="name">Lake Silver 馬鞍山</span>
              <p>正在營業</p>
            </div>
            <div class="shop-centent">
              <span>早8:00 晚8:00</span>
              <p>1.71km</p>
            </div>
            <div class="shop-bottom">
              <van-icon
                name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
              ></van-icon>馬鞍山 銀湖天峰 商場
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="shop-footer">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
          ></van-icon>
          <span>本市場已全面消毒、衛生乾淨、放心食用</span>
        </div>
      </li>
      <li @click="toPawnshop(1)">
        <div class="shop-food">
          <div class="shop-logo">
            <img src alt />
          </div>
          <div class="shop-inner">
            <div class="shop-top">
              <span class="name">Lake Silver 馬鞍山</span>
              <p>正在營業</p>
            </div>
            <div class="shop-centent">
              <span>早8:00 晚8:00</span>
              <p>1.71km</p>
            </div>
            <div class="shop-bottom">
              <van-icon
                name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
              ></van-icon>馬鞍山 銀湖天峰 商場
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="shop-footer">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
          ></van-icon>
          <span>本市場已全面消毒、衛生乾淨、放心食用</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      addressValvue: '',
      switch1: false,
      switch2: false,
      option: [
        { text: '智能排序', value: 0 },
        { text: '綜合優先', value: 1 },
        { text: '服務優先', value: 2 },
        { text: '環境優先', value: 2 },
        { text: '口味優先', value: 2 },
      ],
    }
  },
  components: {},
  mounted() {},
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
    },
  },
}
</script>
<style lang="less">
.shoplist {
  .shop-type {
    span {
      display: inline-block;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ccc;
      margin: 10px;
    }
  }
  ul {
    padding: 0px 8px;
    padding-bottom: 50px;
    margin-top: 10px;
    li {
      background-color: #ffffff;
      display: flex;
      color: black;
      font-weight: 200;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      border-radius: 8px;
      overflow: hidden;
      flex-wrap: wrap;
      padding: 10px;
      .shop-food {
        position: relative;
        display: flex;
        width: 100%;
        .shop-logo {
          width: 30%;
          img {
            width: 100%;
          }
        }

        .shop-inner {
          width: 70%;

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