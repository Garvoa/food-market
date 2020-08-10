<!--  -->
<template>
  <div class="headerWrap">
    <header>
      <div class="head-left">
        <img src="../../assets/20200805173048.png" alt @click="showPopup" />
        <router-link to="/home">
          <van-icon name="img/wangon_logo.png" />
          <!-- <span>日日良食</span> -->
        </router-link>
      </div>
      <div class="head-right">
        <!-- <van-icon name="location-o" /> -->
        <van-icon name="friends-o" @click="toUser">
          <!-- <span>{{isLogin&&user.username ?user.username }}</span> -->
        </van-icon>
        <van-icon name="shopping-cart" class="shopping-cart" @click="toShoppingCart ">
          <i class="num">{{shoppingCartList.length}}</i>
        </van-icon>
      </div>
    </header>

    <van-popup
      v-model="show"
      position="left"
      :style="{height:'100%',width:'60%'}"
      @click="closeRotation"
    >
      <div class="islogin" :style="{display:isLogin?'block':'none'}">
        <span>歡迎{{user.username}}用戶</span>
        <van-button @click="toOut" size="small" type="danger">退出登錄</van-button>
      </div>
      <div class="login-and-register" :style="{display:isLogin?'none':'block'}">
        <router-link to="/login">
          <van-button plain type="danger" size="small" @click="close">登錄</van-button>
        </router-link>
        <router-link to="/register">
          <van-button plain type="danger" size="small" @click="close">註冊</van-button>
        </router-link>
      </div>

      <router-link to="/home">
        <van-cell title="首頁" is-link class="home" @click="close" />
      </router-link>
      <router-link to="/shoppingcart">
        <van-cell title="購物車" is-link class="shoShopping-Cartp" @click="close" />
      </router-link>

      <!-- <van-cell title="我的訂單" is-link class="shoShopping-Cartp" @click="close" /> -->
      <van-cell title="選擇市場" is-link class="shoShopping-Cartp" @click="close" />
      <div class="Special">
        <van-cell title="特賣熱銷" is-link class="shoShopping-Cartp" />
      </div>
      <div class="join">
        <img src="../../assets/jiaru.png" alt />
        <img src="../../assets/lianshu.png" alt />
      </div>
      <div class="delivery">
        <img src="img/c127e298-3a2c-418b-a4c4-4938c3742797.png" alt />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Dialog } from 'vant'
export default {
  props: {
    closeRotation: Function,
  },
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '選擇市場', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活動商品', value: 2 },
      ],
      show: false,
      username: '',
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
    },
    showPopup() {
      this.show = true
    },
    toShoppingCart() {
      this.$router.push({ path: '/shoppingcart' })
      this.closeRotation()
      if (this.show) {
        this.show = !this.show
      }
    },
    close() {
      this.show = !this.show
    },
    toOut() {
      Dialog.confirm({
        title: '*** 溫馨提示 ***',
        message: '你確定要退出登錄嗎',
      })
        .then(() => {
          this.$store.commit('Update_isLogin', false)
        })
        .catch(() => {
          // on cancel
        })
    },
    toUser() {
      if (this.user.username && this.isLogin) {
        this.$router.push({ path: '/user' })
      } else {
        this.$router.push({ path: '/login' })
      }
    },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // let obj = JSON.parse(window.localStorage.getItem('user'))
    // if (obj) {
    //   this.username = obj.username
    // }
  },
  computed: {
    ...mapState({
      shoppingCartList: (state) => state.ShoppingCart.shoppingCartList,
      user: (state) => state.login.user,
      isLogin: (state) => state.login.isLogin,
    }),
  },
}
</script>
<style lang="less" >
/* @import url(); 引入css类 */
#app {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
.headerWrap {
  .van-popup {
    background-image: url('../../assets/background.jpg');
  }
}
header {
  background-image: url('../../assets/background.jpg');
  padding: 10px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 500;
  top: 0px;
  left: 0px;
  // background-color: #ffffff;
  // background-color: #3cb371;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    left: 0px;
    bottom: 0px;
    transform: scaleY(0.5);
  }

  .head-left {
    float: left;
    font-weight: 600;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    img {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin: 0px 5px;
    }
    span {
      display: inline-block;
      margin: 0px 5px;
    }
    i {
      &:nth-last-child(1) {
        position: absolute;
        top: 10px;
        width: 40%;
        left: 0px;
        right: 0px;
        margin: auto;
        img {
          width: 80%;
        }
      }
    }
  }
  .head-right {
    float: right;
    i {
      margin: 0px 10px;
      font-size: 24px;
      color: red;
      font-weight: 600;
      span {
        font-size: 17px;
      }
    }
    .shopping-cart {
      position: relative;
    }
    .num {
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      font-size: 13px;
      color: #ffffff;
      background-color: red;
      z-index: 2000;
      text-align: center;
      padding: 1px;
      right: -18px;
      top: -3px;
    }
  }
}
.islogin {
  padding: 20px 10px;
  text-align: center;
  button {
    display: block;
    margin: 10px auto;
  }
}
.van-popup {
  // background-color: #dddddd !important;
  .login-and-register {
    // display: flex;
    // justify-content: space-evenly;
    // align-items: center;
    button {
      margin: 0px 20px;
    }

    padding: 20px;
    background-image: url('../../assets/background.jpg');
  }
  .home {
    background-image: url('../../assets/background.jpg');
    padding: 5px;
    border-bottom: 1px solid #dddddd;
  }
  .shoShopping-Cartp {
    background-image: url('../../assets/background.jpg');
    padding: 5px;
  }
  .active {
    color: red;
    background-color: pink;
  }
  .nav-select-shop {
    margin-top: 10px;
  }
  .Special {
    margin-top: 10px;
  }
  .join {
    margin-top: 10px;
    padding: 10px 0px;
    background-image: url('../../assets/background.jpg');
    img {
      width: 100%;
      margin-top: 10px;
      display: block;
    }
  }
  .delivery {
    margin-top: 10px;
    // background-color: #ffffff;
    img {
      width: 100%;
    }
  }
}
</style>