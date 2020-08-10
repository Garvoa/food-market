<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/imgs/banner_04.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/Banner_05.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/banner_06.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/Banner_04.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/banner_04.jpg" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  components: {},
  mounted() {
    new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    })
  },
  methods: {},
}
</script>
<style lang="less">
.swiper-wrapper {
  img {
    height: 200px;
    object-fit: cover;
    display: block;
  }
}
</style>