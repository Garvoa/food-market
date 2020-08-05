<template>
  <div class="pay">
    <van-nav-bar title="確認訂單" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- <van-cell title="請添加您的地址" icon="location-o">
    
        <template #right-icon>
          <van-icon name="arrow" class="arrow=icon" />
        </template>
    </van-cell>-->
    <div>
      <div class="address" @click="toSelectAddress">
        <span class="icon-location">
          <van-icon name="location-o" />
        </span>

        <span>{{$route.query.val?$route.query.val.province+$route.query.val.county+$route.query.val.city+$route.query.val.addressDetail+'aaaaaaaaaa':'請你新增地址'}}</span>
        <p v-if="$route.query.val">{{ $route.query.val.name}} {{ $route.query.val.tel}}</p>
        <p v-if="$route.query.val">郵政編碼 {{$route.query.val.postalCode}}</p>
        <span class="icon-arrow">
          <van-icon name="arrow" class="arrow=icon" />
        </span>
      </div>
      <van-cell title="請選擇日期" :value="date" @click="showDate = true" icon="star">
        <template #right-icon>
          <van-icon name="arrow" class="arrow=icon" />
        </template>
      </van-cell>

      <van-calendar v-model="showDate" @confirm="onConfirm" />
    </div>

    <div>
      <van-cell is-link title="請選擇時間" @click="showHours = true" :value="currentTime" icon="star" />

      <van-popup v-model="showHours" round position="bottom" :style="{ height: '50%' }">
        <van-datetime-picker
          v-model="currentTime"
          type="time"
          title="選擇時間"
          :min-hour="10"
          :max-hour="20"
          @confirm="hoursConfirm"
          @cancel="hoursCancel"
        />
      </van-popup>
    </div>
    <div class="payType">
      <van-cell is-link @click="showPopup" icon="star">
        支付方式
        <template #right-icon>
          {{payType}}
          <van-icon name="arrow" class="arrow=icon" />
        </template>
      </van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
        <div class="payType-inner">
          <p @click="close('貨到付款')">貨到付款</p>
          <p @click="close('銀行卡支付')">銀行卡支付</p>
        </div>
      </van-popup>
    </div>
    <div class="pay-footer">
      <van-row class="pay-footer-content">
        <van-col span="12" class="price">
          <span>合計:</span>
          <span class="food">${{getPrice}}</span>
        </van-col>
        <van-col span="6">
          <van-button round type="info" class="Settlement" @click="toPay">提交訂單</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="Orders">
      <p class="title">訂單詳情</p>
      <div v-for="(item,index) in payOrdersList" :key="index">
        <van-row>
          <van-col span="8">
            <img :src="item.img" alt />
          </van-col>
          <van-col span="12">
            <div class="Orders-inner">
              <p>{{item.name}}</p>
              <p>規格：{{item.weight}}</p>
              <p>單價：${{item.price}}</p>
              <p>數量：{{item.num}}</p>
            </div>
          </van-col>
          <van-col span="4">${{item.price*item.num}}</van-col>
        </van-row>
      </div>

      <van-cell>
        <van-field v-model="value" label="訂單備註" placeholder="選填" />
      </van-cell>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      date: '',
      showDate: false,
      currentTime: '',
      showHours: false,
      show: false,
      payType: '',
      value: '',
    }
  },
  mounted() {},
  methods: {
    close(type) {
      this.show = !this.show
      this.payType = type
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      this.showDate = false
      this.date = this.formatDate(date)
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showHours = false
      // Toast(item.name);
    },
    hoursConfirm(date) {
      this.showHours = false
      this.currentTime = date
    },
    hoursCancel() {
      this.showHours = false
      this.currentTime = ''
    },
    onClickLeft() {
      this.$router.go(-1)
      this.$store.commit('Del_payOrdersList')
    },
    toSelectAddress() {
      this.$router.push({ path: '/selectaddress' })
    },
    showPopup() {
      this.show = true
    },
    toPay() {
      this.$store.commit('Del_payOrdersList')
      this.$store.commit('Delete_shoppingCart_checked')
      this.$router.push({ path: '/payresults' })
    },
  },
  computed: {
    ...mapState({ payOrdersList: (state) => state.pay.payOrdersList }),
    ...mapGetters(['getPrice']),
  },
}
</script>
<style lang="less">
.pay {
  padding: 50px 5px;
  .van-cell {
    padding: 5px 10px;
    border-radius: 10px;
    // border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .van-cell__left-icon {
      color: red;
    }
    .van-cell__title {
      // width: 200px;
      white-space: wrap;
    }
  }
  .address {
    padding: 10px 15px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    margin-bottom: 10px;
    position: relative;
    .icon-arrow {
      // float: right;
      font-size: 16px;
      position: absolute;
      right: 10px;
      top: 0px;
      bottom: 0px;
      margin: auto;
      height: 16px;
    }
    .icon-location {
      display: inline-block;
      margin-right: 5px;
      font-size: 16px;
      color: red;
      height: 100%;
    }
  }
  .van-nav-bar {
    margin-bottom: 10px;
  }
  .payType {
    .payType-inner {
      text-align: center;
      p {
        padding: 20px;
        border-bottom: 1px solid #cccccc;
      }
    }
  }
  .Orders {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    .title {
      text-align: center;
      margin-bottom: 10px;
      border-bottom: 1px solid #cccccc;
    }
  }
  .Orders-inner {
    // padding: 10px;
    // border: 1px solid #cccccc;
    // border-radius: 10px;
    p {
      margin-top: 5px;
    }
  }
  .pay-footer {
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    bottom: 0px;
    padding: 10px 10px;
    box-sizing: border-box;
    border-top: 1px solid #cccccc;

    z-index: 100;
    .pay-footer-content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .Settlement {
        width: 100%;
        height: 35px;
      }
      .price {
        text-align: right;
        padding-right: 10px;
        .food {
          color: red;
          display: inline-block;
          padding-left: 5px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>