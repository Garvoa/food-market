<template>
  <div class="selectAddress">
    <van-nav-bar title="新增收貨地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择','请选择']"
      @save="onSave"
      @delete="onDelete"
      area-placeholder="請選擇區域"
      @change-detail="onChangeDetail"
      :columns-num="2"
    ></van-address-edit>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      areaList: {
        province_list: {
          110000: '香港島',
          120000: '九龍半島',
          130000: '新界',
        },
        // 香bai港岛du、九龙半岛、新界
        // 香港島
        city_list: {
          110100: '中西區',
          110200: '灣仔區',
          110300: '東區',
          110400: '南區',
          120100: '油尖旺區',
          120200: '深水埗區',
          120300: '九龍城區',
          130100: '北區',
          130200: '大埔區',
          130300: '西貢區',
          130400: '北區',
          // ....
        },
      },
      searchResult: [],
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSave(val) {
      console.log(val)
      this.$router.push({ path: '/pay', query: { val } })
    },
    onDelete() {
      Toast('delete')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ]
      } else {
        this.searchResult = []
      }
    },
  },
}
</script>
<style lang="less">
.selectAddress {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  .van-switch {
    font: 16px Helvetica, Arial, '宋体', sans-serif;
  }
  .van-picker {
    .van-picker__columns {
      display: block;
    }
  }
}
</style>