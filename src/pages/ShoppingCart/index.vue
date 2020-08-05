<template>
  <div>
    <div class="shopping-head">
      <van-nav-bar
        title="購物車"
        left-text="返回"
        right-text="刪除"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="shopping-centent">
      <ul>
        <li v-for="(item,index) in shoppingCartList" :key="index">
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="item.checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img :src="item.img" alt />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">{{item.name}}</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">${{item.price}}</span>
                  <span>/{{item.weight}}</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
            @click="delgoods(item)"
          ></van-icon>
          <div class="line"></div>
        </li>
      </ul>
      <div v-if="shoppingCartList.length===0" class="msg">
        購物車為空,快去添加商品吧！
        <img src="../../assets/1596441727(1).jpg" alt />
      </div>
    </div>
    <div class="shopping-footer">
      <van-row class="shopping-footer-content">
        <van-col span="6">
          <van-checkbox v-model="checked" @click="totalChecked">全選</van-checkbox>
        </van-col>
        <van-col span="12" class="price">
          <span>合計:</span>
          <span class="food">${{ totalPrice}}</span>
        </van-col>
        <van-col span="6">
          <van-button
            round
            type="info"
            class="Settlement"
            @click="toPay"
            :disabled="shoppingCartList.length===0?true:false"
          >結算</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { Dialog } from 'vant'
export default {
  components: {},
  data() {
    return {
      checked: true,
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Dialog.confirm({
        title: '刪除商品',
        message: `你確定刪除所有選中的商品嗎？`,
      })
        .then(() => {
          this.$store.commit('Delete_shoppingCart_checked')
        })
        .catch(() => {})
    },
    toPay() {
      if (this.isLogin) {
        this.$store.commit('Update_payOrdersList', this.shoppingCartList)
        this.$router.push({ path: '/pay' })
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
    totalChecked() {
      this.$store.commit('Update_shoppingCartList_checked', this.checked)
    },
    delgoods(item) {
      Dialog.confirm({
        title: '刪除商品',
        message: `你確定刪除${item.name}嗎？`,
      })
        .then(() => {
          this.$store.commit('Delete_shoppingCart_item', item)
        })
        .catch(() => {})
    },
  },
  computed: {
    ...mapState({
      shoppingCartList: (state) => state.ShoppingCart.shoppingCartList,
      isLogin: (state) => state.login.isLogin,
    }),
    ...mapGetters(['totalPrice']),
  },
}
</script>
<style lang="less">
.shopping-head {
  position: fixed;
  top: 50px;
  z-index: 100;
  width: 100%;
}
.shopping-centent {
  // padding: 5px 10px;
  padding: 105px 10px 0px 10px;
  // background-color: #dddddd;
  .msg {
    text-align: center;
    font-size: 20px;
  }
  ul {
    border: 1px solid #cccccc;
    border-radius: 10px;
    margin-bottom: 60px;
    overflow: auto;
    li {
      padding: 5px;
      position: relative;
      background-color: #ffffff;
      .delete {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 18px;
      }
      .line {
        position: relative;
        width: 100%;
        height: 1px;
        bottom: 0px;
        background-color: #000;
        transform: scaleY(0.3);
      }
      .van-row {
        display: flex;
        align-items: center;
      }
      .shopping-img {
        width: 100%;
        // border-radius: 50%;
        // background-color: #c0b5b5;
        img {
          width: 100%;
          display: block;
          border-radius: 50%;
        }
      }
      .name {
        padding: 10px 10px;
        font-weight: 500;
      }

      .weightAndPrice {
        padding: 0px 10px;
        span {
          color: #dddddd;
        }
        .price {
          color: red;
          font-weight: 600;
        }
      }
    }
  }
}
.shopping-footer {
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  bottom: 0px;
  padding: 10px 10px;
  box-sizing: border-box;
  border-top: 1px solid #cccccc;
  .shopping-footer-content {
    display: flex;
    align-items: center;
    .Settlement {
      width: 100%;
      height: 35px;
    }
    .price {
      text-align: right;
      padding-right: 10px;
      .food {
        color: red;
        display: inline-block;
        padding-left: 5px;
        font-weight: 700;
      }
    }
  }
}
</style>