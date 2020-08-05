<template>
  <div id="app">
    <Header :closeRotation="closeRotation" />
    <div v-if="isShow" class="appOuter">
      <router-view></router-view>
    </div>
    <div
      class="openingAnimation"
      ref="openingAnimation"
      :class="{close:isShow}"
      v-if="$route.path==='/home'"
    >
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
            <img :src="item" alt />
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>

    <van-popup v-model="show" class="app-img" v-if="$route.path==='/home'">
      <img src="img/112546300425865384.jpg" alt />
      <van-icon name="close" @click="show=!show" />
    </van-popup>
    <div id="demo"></div>
    <Tabbar id="Tabbar" :closeRotation="closeRotation" />
  </div>
</template>

<script>
import Swiper from 'swiper'
import Header from './components/Header'
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    Header,
    Tabbar,
  },
  data() {
    return {
      arr: [
        'img/banner1.jpg',
        'img/banner2.jpg',

        'img/banner3.jpg',
        'img/banner4.jpg',
        'img/banner5.jpg',
      ],
      num: 1,
      isShow: false,
      show: false,
    }
  },
  mounted() {
    let _self = this

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
  methods: {
    closeRotation() {
      this.isShow = true
      setTimeout(() => {
        this.$refs.openingAnimation.style.display = 'none'
      }, 1000)
    },
  },
  watch: {
    isShow() {
      setTimeout(() => {
        this.show = true
      }, 500)
    },
    $route(val) {
      if (val.path !== '/home') {
        this.isShow = true
        if (this.$refs.openingAnimation) {
          this.$refs.openingAnimation.style.display = 'none'
        }
      } else {
        this.$nextTick(() => {
          var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
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
        })
      }
    },
  },
}
</script>

<style lang="less">
#app {
  width: 100%;

  // overflow: hidden;

  .appOuter {
    width: 100%;
    margin-bottom: 50px;
  }
  .openingAnimation {
    position: absolute;
    width: 100%;
    height: 85%;
    top: 50px;
    z-index: 499;
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
    text-align: center;
    img {
      width: 90%;
    }
    i {
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 25px;
      font-size: 30px;
      // color: white;
      font-weight: 600;
    }
  }
}
</style>
