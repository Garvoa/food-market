<!--  -->
<template>
  <div class="headerWrap">
    <header>
      <div class="head-left">
        <van-icon
          name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2020023918,3925028839&fm=26&gp=0.jpg"
          @click="showPopup"
        />
        <router-link to="/home">
          <van-icon
            name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1683583943,3250913306&fm=26&gp=0.jpg"
          />
          <span>菜市場中心</span>
        </router-link>
      </div>
      <div class="head-right">
        <van-icon name="location-o" />
        <van-icon name="shopping-cart" class="shopping-cart" @click="toShoppingCart">
          <i class="num">1</i>
        </van-icon>
      </div>
    </header>

    <van-popup v-model="show" position="left" :style="{height:'100%',width:'60%'}">
      <div class="login-and-register">
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

      <van-cell title="我的訂單" is-link class="shoShopping-Cartp" @click="close" />
      <van-cell title="選擇分店" is-link class="shoShopping-Cartp" @click="close" />
      <div class="Special">
        <van-cell title="特賣熱銷" is-link class="shoShopping-Cartp" />
      </div>
      <div class="join">
        <img src="../../assets/jiaru.png" alt />
        <img src="../../assets/lianshu.png" alt />
      </div>
      <div class="delivery">
        <img src="../../assets/c127e298-3a2c-418b-a4c4-4938c3742797.png" alt />
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '选择分店', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      show: false,
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
      if (this.show) {
        this.show = !this.show
      }
    },
    close() {
      this.show = !this.show
    },
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
}
</script>
<style lang="less" >
/* @import url(); 引入css类 */
#app {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
header {
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596172934659&di=b9aaccee82b43ca4a001b0a8f37a9bc1&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F46%2F48%2F29585746a25cbc7.jpg%2521%2Ffwfh%2F804x473%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue');
  padding: 10px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
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
  }
  .head-right {
    float: right;
    i {
      margin: 0px 10px;
      font-size: 24px;
      color: red;
      font-weight: 600;
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

.van-popup {
  // background-color: #dddddd !important;
  .login-and-register {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
  }
  .home {
    background-color: #ffffff;
    padding: 5px;
    border-bottom: 1px solid #dddddd;
  }
  .shoShopping-Cartp {
    background-color: #ffffff;
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
    background-color: #ffffff;
    img {
      width: 100%;
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