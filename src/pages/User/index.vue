<template>
  <div class="user-wrap">
    <van-row>
      <van-col span="24">
        <div class="user-left">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" class="userIcon" />
          <span>用戶名：小白</span>
        </div>
      </van-col>

      <van-col span="24">
        <div class="user-left">
          <span>郵箱:</span>
          <span>Ebs.terrychan@gmail.com</span>
        </div>
      </van-col>
      <van-col span="24">
        <div class="user-left">
          <span>卡號:</span>
          <span>NGO00002</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="user-bottom">
          <p>0</p>
          <p>優惠劵</p>
        </div>
      </van-col>
      <van-col span="6">
        <div class="user-bottom">
          <p>$0.00</p>
          <p>賬戶餘額</p>
        </div>
      </van-col>
      <van-col span="6">
        <div class="user-bottom">
          <p>0</p>
          <p>積分</p>
        </div>
      </van-col>
      <van-col span="6">
        <div class="user-bottom">
          <!-- -->
          <p>首衝有贈送</p>
          <p>充值</p>
        </div>
      </van-col>
      <van-col span="24">
        <div class="user-order">
          <p class="my-order">我的訂單</p>
          <van-search v-model="value" shape="round" background="#ffffff" placeholder="搜索我的訂單" />
          <van-tabs v-model="active" animated>
            <van-tab title="待付款">
              <template #title>
                <van-icon name="balance-list-o" />待付款
              </template>

              <div class="card-order">
                <van-card
                  num="2"
                  price="$22.00"
                  desc="好甜好脆好吃"
                  title="一休胡蘿蔔"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                >
                  <template #tags>
                    <!-- <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>-->
                  </template>
                  <template #footer>
                    <van-button size="mini" type="primary" plain hairline>查看明細</van-button>
                    <van-button size="mini" type="danger" plain hairline>刪除訂單</van-button>
                  </template>
                </van-card>
              </div>
            </van-tab>
            <van-tab title="待發貨">
              <template #title>
                <van-icon name="logistics" />待發貨
              </template>内容 2
            </van-tab>
            <van-tab title="待收貨">
              <template #title>
                <van-icon name="records" />待收貨
              </template>内容 3
            </van-tab>
            <van-tab title="已完成">
              <template #title>
                <van-icon name="passed" />已完成
              </template>内容 4
            </van-tab>
          </van-tabs>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      active: 2,
      value: '',
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="less">
.user-wrap {
  padding: 60px 10px;
  .van-row {
    border-top: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px #424040;
    // background-image: url('../../assets/background.jpg');
    background-color: rgb(201, 143, 101);
  }

  .user-left {
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;

    .userIcon {
      font-size: 30px;
    }
    i {
      font-weight: 600;
    }
  }
  .user-bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    p {
      &:nth-child(1) {
        color: red;
        font-weight: 600;
      }
      padding: 3px 0px;
    }
  }
  .user-order {
    margin: 5px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 10px;
    .my-order {
      font-weight: 600;
    }
    .card-order {
      // margin-top: 10px;
    }
    .van-tabs__nav {
      background-color: white;
      .van-tab__text {
        display: flex;
        flex-direction: column;
        i {
          text-align: center;
          font-size: 18px;
          color: red;
        }
      }
    }
  }
  .van-col {
    &:nth-last-child(1) {
      .user-left {
        border-radius: 10px;
      }
    }
  }
}
</style>