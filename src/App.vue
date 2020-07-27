<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
