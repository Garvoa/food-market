<template>
  <div id="Tabbar" ref="Tabbar" v-if="isTabbar">
    <van-tabbar v-model="active" active-color="#ecef3c" @change="toRoute">
      <van-tabbar-item icon="shop">簡介</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">點餐</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">預定</van-tabbar-item>
      <van-tabbar-item icon="shop">分店</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
      <!-- <van-tabbar-item icon="img/dry_food_icon.png" @click="closeRotation">生活品味</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      active: 0,
      isTabbar: true,
    }
  },
  mounted() {},
  methods: {
    toRoute(type) {
      if (type === 0) {
        this.$router.push({ path: '/' })
      }
      if (type === 2) {
        this.$router.push({ path: '/user' })
      }
      if (type === 3) {
        this.$router.push({ path: '/shoplist' })
      }
      if (type === 4) {
        this.$router.push({ path: '/user' })
      }
    },
  },
  watch: {
    $route(val) {
      if (val.path === '/goodslist') {
        this.isTabbar = false
      }
    },
  },
}
</script>
<style lang="less">
#Tabbar {
  z-index: 500;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.van-tabbar {
  background-color: #2f2d2d !important;
  height: 50px;

  .van-tabbar-item {
  }
  img {
    width: 60px;
    height: 25px;
  }
  .van-tabbar-item__text {
  }
  .van-tabbar-item--active {
    .van-tabbar-item__icon {
      i {
        // color: red;
      }
    }
    .van-tabbar-item__text {
      // color: red;
    }
  }

  // background-color: black;
}
</style>