<template>
  <div class="login">
    <div class="login-inner">
      <h1>
        <img src="img/e3bef1d8-fe85-4823-a525-b2afc5855103.png" alt />
      </h1>
      <div class="login-center">
        <van-form @submit="onSubmit">
          <!-- <van-field
          v-model="username"
          name="Email ＊"
          label="Email ＊"
          placeholder="用户名"
          :rules="[{ required: true, message: '請輸入Email' }]"
          />-->
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
            v-model="password2"
            type="password"
            name="確認密碼"
            label="確認密碼"
            placeholder="確認密碼"
            :rules="[{ required: true, message: '請輸入確認密碼' }]"
          />

          <div style="margin: 16px;" class="btn3">
            <van-button type="warning">註冊</van-button>
          </div>
        </van-form>

        <div class="btn2">
          <van-button type="primary" @click="toBack">返回上一頁</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Notify } from 'vant'
export default {
  components: {},
  mounted() {},
  data() {
    return {
      username: '',
      password: '',
      password2: '',
    }
  },
  methods: {
    onSubmit(values) {
      if (this.username.length < 4 && this.password < 4) {
        Notify('用戶名和密碼不能小於4位')
        return
      }
      if (this.password === this.password2) {
        let obj = {
          username: this.username,
          password: this.password,
        }
        window.localStorage.setItem('user', JSON.stringify(obj))
        Notify('註冊成功')
        this.$router.push({ path: '/login' })
      } else {
        Notify('兩次密碼輸入不同')
      }
    },
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
    padding: 5px;
  }
  .login-center {
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