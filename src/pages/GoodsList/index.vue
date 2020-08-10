<template>
  <div class="goodsList">
    <van-sticky>
      <div class="goodsList-head">
        <van-icon name="arrow-left" />
        <p>
          <van-icon name="location" />香港九龍城區
          <van-icon name="arrow" />
        </p>
      </div>
    </van-sticky>

    <Rotation />

    <section>
      <div class="row rowLeft">
        <div class="col-md-3 left" id="wrapper">
          <van-sidebar v-model="active" @change="onChange">
            <van-sidebar-item
              ref="leftItem"
              :title="item.name"
              v-for="(item,index) in  menupageList || 20"
              :key="index"
              @click="isActive(index, name)"
            />
          </van-sidebar>
        </div>
        <div class="col-md-9 right">
          <p class="category1Name">{{name}}</p>

          <div id="wrapperRight" ref="wrapperRight">
            <div class="wrapperOuter">
              <ul ref="rowRight" class="rowRight">
                <li
                  :ref="`item${index}`"
                  v-for="(menupage,index) in menupageListRight"
                  :key="index"
                >
                  <div
                    class="col-md-4 rightlist"
                    v-for="(item,index) in menupage || 20"
                    :key="index"
                    @click="toAttriButeList(item)"
                  >
                    <div class="item">
                      <!-- <img
                        v-if="item.imgurl"
                        :src="item.imgurl?`${$url}/static/images/item/${item.imgurl}`:'img/no07.jpg'"
                        alt
                      />-->
                      <img src="../../assets/imgs/5ab33028db250.jpg" alt />
                      <p>
                        <span
                          style="display:block"
                          class="itemName"
                        >{{item.name===""?111:item.name}}</span>

                        <span>
                          ${{item.menuitem?item.menuitem.price1:'111'}}
                          <van-icon name="add"></van-icon>
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Rotation from '../../components/Rotation'
import { getMenupageInfo } from '../../api'
import { mapGetters, mapState } from 'vuex'
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  components: { Rotation },
  data() {
    return {
      activeKey: 0,
      active: 0,
      name: '',
    }
  },
  mounted() {
    this.$store.dispatch('reqMenupageInfo')
  },
  methods: {
    isActive(index, name) {
      if (!this.iscrollRight) return
      this.scrollFlag = true
      let offsetTop = -this.$refs[`item${index}`][0].offsetTop
      this.iscrollRight.$offsetTop = offsetTop
      this.iscrollRight.$index = index
      this.iscrollRight.scrollTo(0, offsetTop, 500)
      // this.leftScroll(index)
      this.active = index
      this.name = name
      console.log(offsetTop)
    },
    onChange(index) {
      // Notify({ type: 'primary', message: index })
    },
    toAttribute() {
      this.$router.push({ path: '/attributelist' })
    },
    leftScroll(index) {
      if (this.iscroll.y > this.iscroll.maxScrollY) {
        this.iscroll.scrollTo(
          0,
          -$('.van-sidebar-item')[0].offsetHeight * index,
          500
        )

        this.iscroll.$index = index
      }
    },
    initScorll() {
      this.iscroll = new IScroll('#wrapper', {
        mouseWheel: true,
        scrollbars: 'custom',
        scrollY: true,

        startY: 0,
      })
      this.iscroll.on('beforeScrollStart', () => {})
      this.iscroll.on('scrollEnd', () => {})
      this.name = this.menupageList.length > 0 ? this.menupageList[0].name : ''
      this.iscrollRight = new IScroll('#wrapperRight', {
        mouseWheel: true,
        scrollbars: 'custom',
        scrollY: true,
        startY: 0,
        probeType: 3,
      })
      // this.moveLeft()
      this.iscrollRight.on('scroll', () => {
        clearInterval(this.leftTime)
        var timer = null

        if (!this.$refs.item1) return

        if (!this.$refs.item1 || this.scrollFlag) return

        for (let index = 0; index < this.menupageListRight.length; index++) {
          let top = this.$refs[`item${index + 1}`]
            ? -this.$refs[`item${index + 1}`][0].offsetTop
            : this.$refs[`item${index - 1}`][0].offsetTop

          if (
            this.iscrollRight.y <= -this.$refs[`item${index}`][0].offsetTop &&
            this.iscrollRight.y >= top
          ) {
            this.name = this.menupageList[index].name
            this.active = index

            this.leftScroll(index)
            if (this.iscroll.$index > index) {
              console.log($('.van-sidebar-item')[0].offsetHeight)
              this.iscroll.scrollTo(
                0,
                -$('.van-sidebar-item')[0].offsetHeight * index,
                500
              )
            }
          }

          if (
            this.iscrollRight.y <=
            -this.$refs[`item${this.menupageListRight.length - 1}`][0].offsetTop
          ) {
            this.active = this.menupageListRight.length - 1
          }
          if (
            this.iscrollRight.maxScrollY +
              this.$refs.wrapperRight.offsetHeight / 3 >=
            parseInt(this.iscrollRight.y)
          ) {
            this.name = this.menupageListRight[
              this.menupageListRight.length - 1
            ].name
            this.active = this.menupageListRight.length - 1
            this.name = this.menupageList[
              this.menupageListRight.length - 1
            ].name
          }
        }
      })
      this.iscrollRight.on('scrollEnd', () => {
        // this.top = -this.iscroll.y

        if (!this.$refs.item1 || !this.scrollFlag) return
        let offsetTop = this.iscrollRight.$offsetTop

        this.iscrollRight.scrollTo(0, offsetTop, 500)
      })
      this.iscrollRight.on('beforeScrollStart', () => {
        this.scrollFlag = false
        clearInterval(this.leftTime)
      })
    },
  },
  computed: {
    ...mapState({
      menupageList: (state) => state.categoryList.menupageList,
    }),
    ...mapGetters(['menupageListRight', 'totalPrice']),
  },
  watch: {
    menupageListRight(val) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.initScorll()
        }, 0)
      })
    },
  },
}
</script>
<style lang="less">
.goodsList {
  // overflow: hidden;
  .goodsList-head {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    background-color: #fff;
    border-bottom: 1px #cccccc solid;
    margin-bottom: 2px;
    .van-icon-arrow-left {
      font-size: 20px;
      // float: left;
    }
    p {
      margin: 0 110px;
      display: flex;
      align-items: center;
      .van-icon-arrow {
        color: #cccccc;
      }
    }
  }
  .van-sidebar-item--select::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 0.04rem;
    height: 100% !important;
    background-color: #ee0a24;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: '';
  }
}
section {
  height: 55%;
  text-align: right;
  * {
    touch-action: none;
  }
  .rowLeft {
    height: 100%;
    margin: 10px;
    display: flex;
    .left {
      overflow: hidden;
      height: 405px;
      position: relative;
      width: 25%;
      padding: 0px;
      .list-group {
        position: relative;
        .list-group-item {
          margin: 0px 0px 20px 0px;
          width: 100%;
          img {
            width: 100%;
            height: 150px;
            padding: 10px;
            object-fit: cover;
          }
        }
      }
      .van-sidebar-item {
        padding: 10px;
      }
    }
    .right {
      padding: 0px;
      width: 75%;
      height: 100%;
      #wrapperRight {
        width: 100%;

        height: 360px;
        overflow: hidden;
        position: relative;
      }
      .rowRight {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        min-width: 100%;
        padding: 0;
        position: relative;
        li {
          width: 100%;
          min-height: 100%;
          position: relative;
          // margin-bottom: 30px;
          img {
            object-fit: cover;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            width: 90%;
            height: 1px;
            right: 0;
            left: 0;
            margin: auto;
            border-bottom: 5px dashed #000;
          }
        }
      }

      .rightlist {
        padding: 0;
        display: flex;
        justify-content: center;
      }
      .item {
        width: 90%;
        padding: 5%, 0%;
        margin-bottom: 10%;
        border-radius: 5%;
        // background-color: #ffb6c1;
        display: flex;
        text-align: center;

        img {
          border-radius: 5%;
          // width: 100%;
          width: 40%;
          height: 100%;
        }
        p {
          width: 60%;
          span {
            // display: block;
            margin: 20px 0px;
            font-size: 16px;
            i {
              float: right;
              margin-right: 10px;
            }
          }
        }
      }
    }
    text-align: center;
    .category1Name {
      width: 90%;
      background-color: rgba(255, 204, 0, 0.8);
      box-sizing: content-box;
      border-radius: 10px;
      display: inline-block;

      padding: 5px;
    }
  }
  .list-group-item {
    text-align: center;
    border-radius: 20px;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
  }
  .list {
    float: left;
    width: 20%;
    height: 100%;
    margin: 30px;
    text-align: center;
  }
  .active1 {
    background-color: rgba(255, 204, 0, 0.8) !important;
  }
}
</style>