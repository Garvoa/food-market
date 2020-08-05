<template>
  <div id="Tabbar" ref="Tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="img/market_icon.png" @click="closeRotation">新式街市</van-tabbar-item>
      <van-tabbar-item icon="img/fnb_icon.png" @click="closeRotation">美食廣場</van-tabbar-item>
      <van-tabbar-item icon="img/dry_food_icon.png" @click="closeRotation">生活品味</van-tabbar-item>
      <van-tabbar-item icon="img/shopping_icon.png" @click="closeRotation">推廣活動</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  components: {},
  props: { closeRotation: Function },
  data() {
    return {
      active: 0,
    }
  },
  mounted() {},
  methods: {},
  watch: {
    $route(val) {
      if (
        val.path === '/goodsdetails' ||
        val.path === '/shoppingcart' ||
        val.path === '/pay'
      ) {
        this.$refs.Tabbar.style.display = 'none'
      } else {
        this.$refs.Tabbar.style.display = 'block'
      }
    },
  },
}
</script>
<style lang="less">
#Tabbar {
  z-index: 500;
  position: fixed;

  width: 100%;
}
.van-tabbar {
  background-color: #eea24e !important;
  img {
    width: 80px;
    height: 25px;
  }
  .van-tabbar-item__text {
    color: white;
  }
  .van-tabbar-item--active {
    .van-tabbar-item__icon {
      i {
        color: red;
      }
    }
    .van-tabbar-item__text {
      color: red;
    }
  }

  background-color: chocolate;
}
</style>