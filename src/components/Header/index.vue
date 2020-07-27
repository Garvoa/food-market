<!--  -->
<template>
  <div>
    <header>
      <div class="head-left">
        <van-icon
          name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2020023918,3925028839&fm=26&gp=0.jpg"
          @click="showPopup"
        />

        <van-icon
          name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2299816339,1443618864&fm=26&gp=0.jpg"
        />
        <span>菜市场中心</span>
      </div>
      <div class="head-right">
        <van-icon name="search" />
        <van-icon name="shopping-cart" />
      </div>
    </header>
    <!-- <van-popup v-model="show">内容</van-popup> -->
    <van-popup v-model="show" position="left" :style="{height:'100%',width:'60%'}">
      <div class="login-and-register">
        <van-button plain type="danger" size="small">登录</van-button>
        <van-button plain type="danger" size="small">注册</van-button>
      </div>
      <div class="home active">首页</div>
      <div class="shoShopping-Cartp">购物车</div>
      <div class="nav-select-shop">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
      </div>
    </van-popup>
    <div id="select-shop" @click="showMask = !showMask ">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="选择分店" name="1" @click="showMask = !showMask">
          <ul>
            <li>1号店</li>
            <li>2号店</li>
            <li>3号店</li>
            <li>4号店</li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
    <van-overlay :show="showMask" @click="showMask = false" />
    <div class="section">
      <div class="sectioninner">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595869579639&di=885ed6159bb45593b88af20d8d9b3d92&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D115337761%2C3299719411%26fm%3D214%26gp%3D0.jpg"
          alt
        />
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3735042573,1550491561&fm=26&gp=0.jpg"
          alt
        />
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3925349447,4033995516&fm=26&gp=0.jpg"
          alt
        />
        <img src="https://t8.baidu.com/it/u=984862069,3326620234&fm=193" alt />
      </div>
    </div>
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
      activeNames: ['1'],
      showMask: false,
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
    },
    showPopup() {
      this.show = true
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
header {
  padding: 10px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  top: 0px;
  left: 0px;
  background-color: #3cb371;
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
  }
}
#select-shop {
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0px;
  margin: auto;
  z-index: 10;
  background-color: #3cb371;
  box-sizing: border-box;

  .van-cell {
    .van-cell__title {
      font-size: 16px;
      font-weight: 600;
    }
    .van-icon {
      font-weight: 700;
      font-size: 25px;
    }
    background-color: #3cb371;
    &::after {
      content: '';
      transform: scaleY(0) !important;
    }
  }
  .van-collapse-item__content {
    background-color: #90ee90;
  }

  ul {
    li {
      border: 1px solid rgba(107, 105, 105, 0.8);
      padding: 10px;
      border-radius: 10px;
      margin: 10px 0px;
      color: red;
      font-weight: 200;
    }
  }
}
.van-popup {
  background-color: #dddddd;
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
}

.section {
  height: 600px;
  overflow: auto;
  margin-top: 94px;
  .sectioninner {
    // display: flex;
    // flex-wrap: wrap;
  }

  img {
    width: 100%;
  }
}
</style>