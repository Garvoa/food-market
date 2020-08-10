<template>
  <div id="home">
    <div class="head">
      <van-sticky>
        <header>
          <div class="home-head-left">
            <div>
              <van-icon name="location">香港</van-icon>
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="home-head-right">
            <van-icon name="point-gift-o" />
            <van-icon name="service-o" />
            <van-icon name="more-o" />
          </div>
        </header>
      </van-sticky>

      <div class="my-inner">
        <div class="user">
          <van-icon name="user-circle-o" />
          <span>王先生</span>
        </div>
        <div class="right">
          <div class="inner">
            <div class="icon-bg">
              <van-icon name="qr-invalid"></van-icon>
            </div>
            <p>會員碼</p>
          </div>

          <div class="inner">
            <div class="icon-bg">
              <van-icon name="send-gift-o" />
            </div>
            <p>優惠劵</p>
          </div>
          <div class="inner">
            <p class="label">充值500送100</p>
            <div class="icon-bg">
              <van-icon name="idcard"></van-icon>
            </div>
            <p>钱包</p>
          </div>
        </div>
      </div>
    </div>
    <div class="type">
      <div class="type1" @click="toGoodsList">
        <span>外賣</span>
        <img src="../../assets/imgs/937b3a486d0c8270af493af51108ec5.png" alt />
      </div>
      <div class="type2" @click="toGoodsList">
        <span>到店取餐</span>
        <img src="../../assets/imgs/e409c90562cc2437268365b9290e04e.png" alt />
      </div>
    </div>

    <div class="rotation">
      <Rotation />
    </div>
    <div class="recommend">
      <p class="name">
        <i></i> 美味推薦
        <i></i>
      </p>
      <img src="../../assets/imgs/banner_03.jpg" alt />
      <div class="list">
        <p>
          <span>
            牛肉小窩
            <i>$28</i>
          </span>

          <img src="../../assets/imgs/5ab326172b803.jpg" alt />
        </p>
        <p>
          <span>
            羊肉小窩
            <i>$28</i>
          </span>
          <img src="../../assets/imgs/5ab33028db250.jpg" alt />
        </p>
        <p>
          <span>
            豬肉小窩
            <i>$28</i>
          </span>
          <img src="../../assets/imgs/5ab33071ded98.jpg" alt />
        </p>
        <p>
          <span>
            雞肉小窩
            <i>$28</i>
          </span>
          <img src="../../assets/imgs/5ab33179c57b6.jpg" alt />
        </p>
        <p>
          <span>
            牛肉小窩
            <i>$28</i>
          </span>
          <img src="../../assets/imgs/5ab46758aec8f.jpg" alt />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Rotation from '../../components/Rotation'
export default {
  components: { Rotation },
  mounted() {},
  methods: {
    toGoodsList() {
      this.$router.push({ path: '/goodslist' })
    },
  },
}
</script>
<style lang="less">
#home {
  padding-bottom: 20px;
  .head {
    background-color: #ecef3c;
  }

  header {
    margin-bottom: 20px;
    // background-color: #ecef3c;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    .home-head-left {
      display: flex;
      align-items: flex-start;

      .van-icon-user-circle-o {
        font-size: 25px;
        margin-right: 10px;
      }
      .van-icon-location {
        font-size: 16px;
      }
    }
    .home-head-right {
      display: flex;
      i {
        font-size: 20px;
        margin: 0px 5px;
        font-weight: 600;
        color: rgb(233, 35, 134);
      }
    }
  }
  .my-inner {
    // padding: 0px 10px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    .right {
      display: flex;
      .inner {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px 5px;
      }
      .icon-bg {
        // padding: 5px;
        width: 30px;
        height: 30px;
        text-align: center;
        background-color: pink;
        border-radius: 50%;
        i {
          font-size: 22px;
          line-height: 30px;
          color: red;
        }
      }
      .label {
        position: absolute;
        font-size: 12px;
        white-space: nowrap;
        top: -13px;
        transform: scale(0.8);
        border-radius: 10px;
        background-color: red;
        color: #fff;
        padding: 0px 3px;
      }
    }
    .van-icon-user-circle-o {
      font-size: 40px;
    }
    .user {
      display: flex;
      align-items: center;
    }
  }
  .type {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    position: relative;
    padding-bottom: 20px;
    background-color: #cfcaca;
    &::after {
      content: '';
      width: 100%;
      height: 40%;
      background-color: #ecef3c;
      position: absolute;
      top: 0px;
      z-index: 0;
    }
    div {
      position: relative;
      z-index: 2;
      width: 40%;
      background-color: #fff;
      box-shadow: 5px 5px 5px #888888;
      border-radius: 10px;
      padding: 5px;
      img {
        height: 130px;
      }
      span {
        font-size: 18px;
        display: block;
        padding: 10px;
      }
    }
  }
  .rotation {
    width: 100%;
    img {
      height: 200px;
      object-fit: cover;
      display: block;
    }
  }
  .recommend {
    padding: 20px 10px;
    background-color: white;

    .name {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        width: 20px;
        height: 4px;
        background-color: red;
        display: inline-block;
        margin: 10px;
        border-radius: 10px;
      }
    }
    .list {
      white-space: nowrap;
      overflow: auto;
      p {
        display: inline-block;
        margin: 10px;
        width: 30%;
        span {
          display: block;
          text-align: center;
          font-weight: 600;
        }
      }
    }
  }
}
</style>