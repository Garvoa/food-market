<template>
  <div class="user">
    <div class="user-head">
      <!-- <h3>我的</h3> -->
      <van-row align="center" type="flex">
        <van-col span="6">
          <img src="../../assets/imgs/e8ddcb13-53d6-429f-9528-514f82473332.png" alt />
        </van-col>
        <van-col span="10">
          <div class="user-head-center">
            <p class="name">和平用戶792564123</p>
            <p class="vip">vip用戶</p>
          </div>
        </van-col>
        <van-col span="8">
          <div class="user-head-right">
            <p>
              <van-icon name="gem" />
              <span>立即開通會員</span>
            </p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="user-content">
      <div class="user-content-head">
        <p>錢包餘額</p>
        <p>￥0.00</p>
        <div class="payment">
          <van-button round>立即充值</van-button>
          <van-button round>在餐廳付款</van-button>
        </div>
      </div>
      <div class="user-content-center">
        <van-cell title="所有訂單" is-link />
        <van-cell title="配送地址" is-link />
      </div>
      <div class="user-content-center">
        <van-cell title="優惠劵" is-link />

        <van-cell title="建議" is-link />
      </div>
      <div class="user-content-center">
        <van-cell title="條款與規則" is-link />
        <van-cell title="退出登錄" is-link />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less">
.user {
  background-color: #ccc;
  .user-head {
    h3 {
      margin: 0px;
      font-size: 20px;
      text-align: center;
      font-family: PingFangSC-Light, helvetica, 'Heiti SC';
      color: #fff;
    }
    padding: 20px 0px 20px 20px;
    background-image: url('../../assets/imgs/bc4ec373-4def-41ce-8182-0b6cfd4e0184.png');
    background-repeat: no-repeat;
    background-size: cover;
    .user-head-center {
      height: 100%;
    }
    img {
      border-radius: 50%;
    }
    .name {
      height: 100%;
      overflow: hidden;
      font-size: 18px;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 10px;
      color: #fff;
    }
    .vip {
      margin: 0px 10px 10px 10px;
      color: #fff;
      font-family: PingFangSC-Light, helvetica, 'Heiti SC';
    }
    .user-head-right {
      background-color: black;
      border-radius: 20px 0px 00px 20px;
      i {
        font-size: 25px;
        color: #f9e0c0;
        position: absolute;

        left: 5px;
      }
      span {
        color: #f9e0c0;
        text-align: center;
        display: block;
        margin: 0px 0px 0px 20px;
      }
      p {
        position: relative;
        color: #f9e0c0;
        text-align: center;
        margin: 0px;
        font-size: 12px;
        font-weight: 600;
        // padding: 2px;
        padding: 15px 0px;
      }
    }
  }
  .user-content {
    background-color: #eee;
    padding: 15px 10px 10px 10px;
    .user-content-head {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
    .payment {
      display: flex;
      justify-content: space-evenly;
      button {
        width: 40%;
      }
    }
    p {
      text-align: center;
      &:nth-child(2) {
        font-size: 20px;
        font-weight: 600;
      }
    }
    .user-content-center {
      margin: 15px 0px;
    }
  }
}
</style>