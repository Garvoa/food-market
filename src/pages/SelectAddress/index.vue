<template>
  <div class="selectAddress">
    <van-nav-bar title="新增收貨地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      areaList: {
        province_list: {
          110000: '香港',
        },
        city_list: {
          110100: '中西區',
          110200: '灣仔區',
          110300: '東區',
          110400: '九龍城區',
          110500: '油尖旺區',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110202: '西城区',
          110205: '朝阳区',
          110306: '丰台区',
          120301: '和平区',
          120402: '河东区',
          120403: '河西区',
          120504: '南开区',
          120505: '河北区',
          120501: '尖沙咀',
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
}
</style>