<template>
  <div id="app">
    <div v-if="isShow" class="appOuter">
      <Header />
      <router-view></router-view>
    </div>
    <div class="openingAnimation" ref="openingAnimation" :class="{close:isShow}">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
            <img :src="item" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="start" v-if="num>=arr.length">
      <van-button type="danger">立即開啟</van-button>
    </div>
    <van-popup v-model="show" class="app-img" v-if="$route.path==='/home'">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596114809104&di=60f1a255edfd8035da7e481027cfea0d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4da14489a8ff9dc36143d692016c03c4d08dd4bb15264-RM6wCq_fw658"
        alt
      />
      <van-icon name="close" @click="show=!show" />
    </van-popup>
    <div id="demo"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      arr: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596112152428&di=6d56649bbbda52773ccb6f12d13d81ba&imgtype=0&src=http%3A%2F%2Fstatic.ijtoo.com%2Fijdata%2Fimg%2F04_1%2F89018196%2F1_03.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1216130466,4123935100&fm=26&gp=0.jpg',

        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3655509066,1544135721&fm=15&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596111879354&di=0c7e767d8494602c5a2014fcde86870e&imgtype=0&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F120318%2F2_120318000645_1.jpg',
      ],
      num: 1,
      isShow: false,
      show: false,
    }
  },
  mounted() {
    let _self = this
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项

      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      on: {
        transitionEnd: function (e) {
          _self.num++

          if (_self.num >= _self.arr.length) {
            mySwiper.autoplay.stop()
            setTimeout(() => {
              _self.isShow = true
              _self.num = 0
              _self.show = true
            }, 1000)
          }
        },
      },
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
    var x = document.getElementById('demo')
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        x.innerHTML = 'Geolocation is not supported by this browser.'
      }
    }
    function showPosition(position) {
      x.innerHTML =
        'Latitude: ' +
        position.coords.latitude +
        '<br />Longitude: ' +
        position.coords.longitude
    }
    getLocation()
  },
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .appOuter {
    width: 100%;
    height: 100%;
  }
  .openingAnimation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: 9999;
    background-color: white;
    transition: 1s;
    opacity: 1;
    transform: translatey(0%);
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .start {
    position: absolute;
    z-index: 10000;
    bottom: 30px;
    left: 0px;
    right: 0px;
    margin: auto;
    text-align: center;
    button {
      // background-color: transparent;
      font-weight: 800;
    }
  }
  .close {
    transform: translateY(-100%);
  }
  .app-img {
    width: 100%;
    background-color: transparent;
    img {
      width: 100%;
    }
    i {
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 30px;
      font-size: 30px;
      color: white;
    }
  }
}
</style>
