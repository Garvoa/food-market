<template>
  <div class="login">
    <div class="login-inner">
      <h1>
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2108041548,1048092887&fm=26&gp=0.jpg"
          alt
        />
      </h1>
      <van-form>
        <van-field
          v-model="username"
          name="Email ＊"
          label="Email ＊"
          placeholder="用户名"
          :rules="[{ required: true, message: '請輸入Email' }]"
        />
        <van-field
          v-model="username"
          name="用戶名"
          label="用戶名"
          placeholder="用户名"
          :rules="[{ required: true, message: '用戶名（用在發表產品評論）' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密碼"
          label="密碼"
          placeholder="密碼"
          :rules="[{ required: true, message: '請輸入密碼' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="確認密碼"
          label="確認密碼"
          placeholder="確認密碼"
          :rules="[{ required: true, message: '請輸入確認密碼' }]"
        />
      </van-form>
      <div style="margin: 16px;" class="btn3">
        <van-button type="info">註冊</van-button>
      </div>

      <div class="btn2">
        <van-button type="primary" @click="toBack">返回上一頁</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    // onSubmit(values) {
    //   console.log('submit', values)
    // },
    toBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less">
.login {
  padding: 60px 10px 0px 10px;
  .login-inner {
    border-radius: 10px;
    border: 1px solid #cccccc;
    padding: 5px;
  }
  h1 {
    img {
      height: 200px;
    }
  }
  .btn3 {
    text-align: center;
    button {
      width: 45%;
    }
  }
  .btn2 {
    padding: 10px 30px;
    text-align: center;
    p {
      font-weight: 600;
      padding: 5px 0px;
    }
    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>