<template>
  <div class="login">
    <div class="login-inner">
      <h1>
        <img src="img/e3bef1d8-fe85-4823-a525-b2afc5855103.png" alt />
      </h1>
      <div class="login-center">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用戶名"
            label="用戶名"
            placeholder="用户名"
            :rules="[{ required: true, message: '請輸入用戶名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密碼"
            label="密碼"
            placeholder="密碼"
            :rules="[{ required: true, message: '請輸入密碼' }]"
          />
          <div style="margin: 16px;" class="btn">
            <van-button type="warning" @click="login">登錄</van-button>
            <van-button type="info" @click="toRegister">註冊</van-button>
          </div>
        </van-form>

        <div class="btn2">
          <p>------------------或是使用社群帳號------------------</p>
          <img src="img//lianshu.png" alt />
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
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    toBack() {
      this.$router.go(-1)
    },
    toRegister() {
      this.$router.push({ path: '/register' })
    },
    login() {
      let userObj = JSON.parse(window.localStorage.getItem('user'))
      if (userObj) {
        console.log(
          userObj.username === this.username,
          userObj.password === this.password
        )
        if (
          userObj.username === this.username &&
          userObj.password === this.password
        ) {
          Notify('登錄成功')
          this.$store.commit('Update_isLogin', true)
          this.$router.push({ path: '/' })
        } else {
          Notify('登錄失敗，用戶名或者密碼不正確')
        }
      } else {
        Notify('你的賬號不存在，請註冊')
      }
    },
  },
}
</script>
<style lang="less">
.login {
  padding: 60px 10px;
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
      height: 150px;
    }
    margin-bottom: 10px;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    button {
      width: 45%;
      &:nth-child(1) {
        background-color: red;
      }
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