<template>
  <div>
    <div class="shopping-head">
      <van-nav-bar
        title="購物車"
        left-text="返回"
        right-text="刪除"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="shopping-centent">
      <ul>
        <li>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3756967879,601743443&fm=26&gp=0.jpg"
                  alt
                />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休胡蘿蔔 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$9.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49447657,3270286684&fm=26&gp=0.jpg"
                  alt
                />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休菠菜 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$7.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596199041473&di=8f4b3eb6351493a70eab24d5145e7477&imgtype=0&src=http%3A%2F%2Fimg1.99114.com%2Fgroup1%2FM00%2F0E%2F0A%2FwKgGMFZfmg2Ab16yAADOQSq-ZEk640_600_600.jpg"
                  alt
                />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休上海青 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$6.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596197270716&di=2817bf68b513aa8db7dd5036f896abb6&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2017%2F998%2F879%2F4152978899_664084599.jpg"
                  alt
                />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休西藍花 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$9.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img src="../../assets/20200731115126.png" alt />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休肉 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$9.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img src="../../assets/0c2a32ea-fb02-4666-9493-5ffd36547de1.png" alt />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休胡肉 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$9.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <div class="line"></div>
        </li>
        <li>
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2641700188,3299280043&fm=26&gp=0.jpg"
            class="delete"
          ></van-icon>
          <van-row>
            <van-col span="2">
              <van-checkbox v-model="checked" />
            </van-col>
            <van-col span="8">
              <div class="shopping-img">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3756967879,601743443&fm=26&gp=0.jpg"
                  alt
                />
              </div>
            </van-col>
            <van-col span="14">
              <van-col span="24">
                <p class="name">一休胡蘿蔔 450g</p>
              </van-col>

              <van-col span="12">
                <p class="weightAndPrice">
                  <span class="price">$9.9</span>
                  <span>/份</span>
                </p>
              </van-col>
              <van-col span="12">
                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
              </van-col>
            </van-col>
          </van-row>
          <!-- <div class="line"></div> -->
        </li>
      </ul>
      <div></div>
    </div>
    <div class="shopping-footer">
      <van-row class="shopping-footer-content">
        <van-col span="6">
          <van-checkbox v-model="checked">全選</van-checkbox>
        </van-col>
        <van-col span="12" class="price">
          <span>合計:</span>
          <span class="food">$46.9</span>
        </van-col>
        <van-col span="6">
          <van-button round type="info" class="Settlement" @click="toPay">結算</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      checked: true,
      value: 0,
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('按钮')
    },
    toPay() {
      this.$router.push({ path: '/pay' })
    },
  },
}
</script>
<style lang="less">
.shopping-head {
  position: fixed;
  top: 50px;
  z-index: 100;
  width: 100%;
}
.shopping-centent {
  // padding: 5px 10px;
  padding: 105px 10px 0px 10px;
  // background-color: #dddddd;
  ul {
    border: 1px solid #cccccc;
    border-radius: 10px;
    margin-bottom: 60px;
    overflow: auto;
    li {
      padding: 5px;
      position: relative;
      background-color: #ffffff;
      .delete {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 18px;
      }
      .line {
        position: relative;
        width: 100%;
        height: 1px;
        bottom: 0px;
        background-color: #000;
        transform: scaleY(0.3);
      }
      .van-row {
        display: flex;
        align-items: center;
      }
      .shopping-img {
        width: 100%;
        // border-radius: 50%;
        // background-color: #c0b5b5;
        img {
          width: 100%;

          border-radius: 50%;
        }
      }
      .name {
        padding: 10px 10px;
        font-weight: 500;
      }

      .weightAndPrice {
        padding: 0px 10px;
        span {
          color: #dddddd;
        }
        .price {
          color: red;
          font-weight: 600;
        }
      }
    }
  }
}
.shopping-footer {
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  bottom: 0px;
  padding: 10px 10px;
  box-sizing: border-box;
  border-top: 1px solid #cccccc;
  .shopping-footer-content {
    display: flex;
    align-items: center;
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
</style>