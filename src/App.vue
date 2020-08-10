<template>
  <div>
    <div class="router">
      <router-view></router-view>
    </div>

    <Tabbar />
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
  components: { Tabbar },
  mounted() {},
  methods: {},
}
</script>
<style lang="less">
.router {
}
</style>
