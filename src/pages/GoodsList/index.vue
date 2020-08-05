<template>
  <div class="goodsList">
    <div class="goodsList-nav">
      <van-nav-bar :title="$route.query.pawnshop" left-text="返回" left-arrow @click-left="toRoute">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <!-- <div class="screen">
    
    </div>-->
    <div class="goodsList-centent">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item v-model="value" :options="option1" />
      </van-dropdown-menu>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="(item,index) in list" :key="index" @click="lookDetails(item)">
            <div class="goodsItem">
              <img class="goodsImg" :src="item.img" alt />
              <div class="goods">
                <p class="goodsName">{{item.name}}</p>
                <p class="goodsIntroduce">{{item.Introduce}}</p>
                <!-- <span class="goodsDiscount">{{item.diec}}</span> -->
                <p class="goodsPriceAndWeight">
                  <span>${{item.price}}</span>
                  <span>/{{item.weight}}</span>
                </p>
                <p class="goods-Add-Del" @click.stop="addGoods($event,item)">
                  <!-- <van-icon name="add" />
                  <van-icon
                    name="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3844800051,3102394607&fm=26&gp=0.jpg"
                  ></van-icon>-->
                  <van-icon
                    name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3480975263,3307347329&fm=26&gp=0.jpg"
                    @click="show=!show"
                  ></van-icon>
                </p>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
    <!-- <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />-->
    <div id="ball" ref="ball"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {},
  mounted() {
    if (this.$route.query.goodsList) {
      // this.$store.commit('Update_goodsList', this.$route.query.goodsList)
      this.list = JSON.parse(this.$route.query.goodsList)
    } else {
      // this.list = this.goodsList
    }
  },

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活動商品', value: 2 },
      ],
      option1: [
        { text: '默認價格排序', value: 0 },
        { text: '價格升序', value: 1 },
        { text: '價格降序', value: 2 },
      ],
      show: false,
    }
  },
  methods: {
    onLoad() {
      // setTimeout(() => {
      //   if (this.refreshing) {
      //     this.list = []
      //     this.refreshing = false
      //   }
      //   for (let i = 0; i < 4; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   this.loading = false
      //   if (this.list.length >= 8) {
      //     this.finished = true
      //   }
      // }, 2000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    onConfirm() {
      this.$refs.item.toggle()
    },
    onAddCartClicked() {},
    onBuyClicked() {},
    addGoods(e, item) {
      this.$refs.ball.style.top = e.pageY + 'px'
      this.$refs.ball.style.left = e.pageX + 'px'
      this.$refs.ball.style.transition = 'left 0s, top 0s'
      this.$refs.ball.style.opacity = 1

      setTimeout(() => {
        this.$refs.ball.style.top = 0.14 + 'rem'
        this.$refs.ball.style.left = 3.39 + 'rem'
        this.$refs.ball.style.transition = 'left 0.5s linear, top 0.5s ease-in'
      }, 20)
      this.$store.commit('Update_shoppingCartList', item)
    },
    lookDetails(item) {
      this.$router.push({
        path: '/goodsdetails',
        query: {
          item: JSON.stringify(item),
          pawnshop: JSON.stringify(this.$route.query.pawnshop),
        },
      })
    },
    toRoute() {
      this.$router.go(-1)
    },
  },
  computed: {
    ...mapState({ goodsList: (state) => state.goodsList.goodsList }),
  },
}
</script>
<style lang="less" >
.goodsList {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  .goodsList-nav {
    // display: flex;
    // padding: 0px 20px;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  .goodsList-centent {
    padding-top: 45px;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    .van-list {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      justify-content: space-evenly;
      margin-top: 10px;

      .van-cell {
        width: 45%;
        padding: 0px;
        border: 1px solid #dddddd;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      .van-list__loading {
        width: 100%;
      }
      .van-list__finished-text {
        width: 100%;
      }
      .goodsDiscount {
        border: 1px solid red;
        display: inline-block;
        padding: 2px;
        color: red;
        margin-bottom: 5px;
      }
    }
  }
  .goodsItem {
    width: 100%;
    .goods {
      padding: 10px;
      position: relative;
      .goodsName {
        font-weight: 600;
      }
      .goodsIntroduce {
        color: #cccccc;
        padding: 5px 0px;
        white-space: pre-wrap;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;

        -webkit-line-clamp: 2;
      }
      .goodsPriceAndWeight {
        span {
          &:nth-child(1) {
            color: red;
            font-weight: 600;
          }
        }
      }
      .goods-Add-Del {
        position: absolute;
        right: 10px;
        bottom: 20px;
        i {
          margin-left: 10px;
          font-size: 20px;
        }
      }
    }
    .goodsImg {
      width: 100%;
      height: 100px;
      object-fit: cover;
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
}
</style>