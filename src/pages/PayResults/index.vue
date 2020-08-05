<template>
  <div class="payResults">
    <van-nav-bar
      title="支付結果"
      left-text="返回首頁"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="payResults-content">
      <img
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3869130175,3367458166&fm=26&gp=0.jpg"
        alt
      />
      <p>支付成功</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.push({ path: '/' })
    },
    onClickRight() {},
  },
}
</script>
<style lang="less">
.payResults {
  margin-top: 55px;

  .payResults-content {
    padding: 50px 0px;
    text-align: center;
    // width: 20%;
    img {
      width: 10%;
    }
    p {
      font-size: 30px;
    }
  }
}
</style>