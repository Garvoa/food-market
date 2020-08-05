<template>
  <div id="pawnshop">
    <div class="pawnshop-nav-wrap">
      <ul class="pawnshop-nav">
        <li>
          <router-link to="/home">
            <van-icon
              name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596016875361&di=5dd8def52795f095983d5c9dae944bea&imgtype=0&src=http%3A%2F%2Fimg1.yiwugou.com%2Fi004%2F2015%2F05%2F25%2F19%2Ffd832a5855638c8ec536b9777d62681d.png"
            ></van-icon>
            <span>首頁</span>
          </router-link>
        </li>
        <li @click="switchPawnshop(6)">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=633842909,565973887&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===6}">推薦</span>
        </li>
        <li @click="switchPawnshop(0)">
          <van-icon
            name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3169021353,2597420932&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===0}">蔬菜</span>
        </li>
        <li @click="switchPawnshop(1)">
          <van-icon
            name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596018062517&di=198f6d7f38e3775fb5532cab0840739b&imgtype=0&src=http%3A%2F%2Fnews.youth.cn%2Fgj%2F201504%2FW020150421530617370093.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===1}">肉類</span>
        </li>
        <li @click="switchPawnshop(2)">
          <van-icon
            name="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2895540521,2528989340&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===2}">冰鮮肉</span>
        </li>
        <li @click="switchPawnshop(3)">
          <van-icon
            name="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1902580175,836200988&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===3}">魚類</span>
        </li>
        <li @click="switchPawnshop(4)">
          <van-icon
            name="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3135547534,2907623747&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===4}">生果</span>
        </li>
        <li @click="switchPawnshop(5)">
          <van-icon
            name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2635714501,2084174949&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===5}">海鮮</span>
        </li>

        <li>
          <van-icon
            name="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3486720123,2739477743&fm=26&gp=0.jpg"
          ></van-icon>
          <span :class="{isActive:isActive===7}">其他</span>
        </li>
      </ul>
    </div>
    <div class="pawnshop-centent">
      <ul class="pawnshopList-max">
        <li class="pawnshopItem-max" v-if="isActive===0">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item0','養生草堂')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>養生草堂</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>

            <li class="pawnshopItem" @click="toGoodsList('item0','野菜先生')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>野菜先生</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===1">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item1','香港家豬肉類店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/448151630253593388.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港家豬肉類店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li class="pawnshopItem" @click="toGoodsList('item1','叻叻豬肉類店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/213545432795218236.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>叻叻豬肉類店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>

            <li class="pawnshopItem" @click="toGoodsList('item1','啟發牛肉')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>啟發牛肉</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===2">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item2','香港家豬冰鲜肉店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/448151630253593388.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港家豬冰鲜肉店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li class="pawnshopItem" @click="toGoodsList('item2','叻叻豬冰鲜肉店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/213545432795218236.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>叻叻豬冰鲜肉店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===3">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item3','香港家豬魚類店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/448151630253593388.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>香港家豬魚類店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li class="pawnshopItem" @click="toGoodsList('item3','叻叻豬魚類店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/213545432795218236.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>叻叻豬魚類店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===4">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item4','十分淡水新鮮水果')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>十分淡水新鮮水果</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="pawnshopItem-max" v-if="isActive===5">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <ul class="pawnshopList">
            <li class="pawnshopItem" @click="toGoodsList('item5','叻叻豬海鮮店鋪')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src="../../assets/213545432795218236.jpg" alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>叻叻豬海鮮店鋪</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li class="pawnshopItem" @click="toGoodsList('item5','養生草堂')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>養生草堂</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
            <li class="pawnshopItem" @click="toGoodsList('item5','啟發牛肉')">
              <div class="shop-food">
                <div class="shop-logo">
                  <img src alt />
                </div>
                <div class="shop-inner">
                  <div class="shop-top">
                    <span>啟發牛肉</span>
                    <p>正在營業</p>
                  </div>
                  <div class="shop-centent">
                    <span>早9:00晚9:00</span>
                    <p>1.71km</p>
                  </div>
                  <div class="shop-bottom">
                    <van-icon
                      name="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596014503371&di=68948af4ed70aaa0863b9df8fd3b66d1&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F57%2F08573c5452610ec.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
                    ></van-icon>香港中环遮打道18号
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="shop-footer">
                <van-icon
                  name="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006616099,3005619785&fm=26&gp=0.jpg"
                ></van-icon>
                <span>温馨提示:</span>
                <span>本店已全面消毒、衛生乾淨、放心食用</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="recommend" v-show="isActive===6">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/127ea298-4cec-40ef-a6f3-90d7ead7b1b2.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/364da3c2-4030-40f6-bb61-1e121c898252.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/665cd8b1-1a7f-427b-9f10-23387d73bd44.png" alt />
            </div>
            <div class="swiper-slide">
              <img src="../../assets/87e8859d-901a-44e0-842e-42c88b3c3bbd.png" alt />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="shop-recommend">
          <p>
            <van-icon name="fire" />本店推薦
          </p>
          <img src="../../assets/8fd196fd-f8d8-4967-834e-73dedc97d5d6.png" alt />
          <ul class="list">
            <li class="item" v-for="(i,index) in item" :key="index" @click="toGoods(index)">
              <img :src="i.img" alt />
              <span>{{i.name}}</span>
              <span>${{i.price}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'

export default {
  components: {},
  data() {
    return {
      iscroll: null,
      isActive: 6,
      value1: 0,
      value2: 'a',
      item: [
        {
          name: '永佑加拿大豬肋排',
          Introduce: '永佑加拿大豬肋排800g排骨豬肉冷鏈生鮮燉湯',
          diec: '滿一件換購肉蛋',
          price: 63,
          weight: '袋',
          img: 'img/5ba54486-c8c7-408c-8cd2-e17a650053ae.png',
          list: ['img/zhurou1.png', 'img/zhurou2.png'],
        },
        {
          name: '穀飼牛肉片',
          Introduce:
            '天譜樂食澳大利亞原切M3雪花烤肉片進口穀飼牛肉片安格斯烤肉食材生鮮',
          diec: '滿一件換購蛋',
          price: 87,
          weight: '袋',
          img: 'img/20200731115130.png',
          list: ['img/zhurou1.png', 'img/zhurou2.png'],
        },
        {
          name: '惠紐西蘭羔羊肉片',
          Introduce: '首食惠紐西蘭羔羊肉片/袋首農出品羊排肉卷火鍋食材',
          diec: '滿一件換購肉蛋',
          price: 358,
          weight: '袋',
          img: 'img/3efaebca-6bde-4e70-8344-c0bfa279740a.png',
          list: ['img/zhurou1.png', 'img/zhurou2.png'],
        },
        {
          name: '華英贛南散養生態麻鴨',
          Introduce: '華英贛南散養生態麻鴨',
          diec: '無',
          price: 93,
          weight: '袋',
          img: 'img/16a57ee6-d2c9-4c9c-a985-c2dfa48180a6.png',
          list: ['img/zhurou1.png', 'img/zhurou2.png'],
        },
      ],
      option1: [
        { text: '全部店鋪', value: 0 },
        { text: '最新店鋪', value: 1 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      goodsList: {
        item0: [
          {
            name: '一休胡蘿蔔',
            Introduce: '生吃口感更佳|清香脆甜',
            diec: '滿一件換購肉蛋',
            price: 9,
            weight: '袋',
            img:
              'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3315062764,550271931&fm=26&gp=0.jpg',
            list: ['img/huoluobo1.png', 'img/huoluobo2.png'],
          },
          {
            name: '一休西蘭花',
            Introduce: '產地直供 新鮮蔬菜',
            diec: '滿一件換購蛋',
            price: 9,
            weight: '袋',
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1339765567,2883536074&fm=26&gp=0.jpg',
            list: ['img/xilanhua1.png', 'img/xilanhua2.png'],
          },
          {
            name: '白菜',
            Introduce: '生吃口感更佳|清香脆甜',
            diec: '滿一件換購肉蛋',
            price: 7,
            weight: '袋',
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3265074805,3552067904&fm=26&gp=0.jpg',
            list: ['img/baicai1.png', 'img/baicai2.png'],
          },
          {
            name: '菠菜',
            Introduce: '菠菜紅根菠菜赤根菜',
            diec: '無',
            price: 8,
            weight: '袋',
            img:
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2341535068,152511721&fm=26&gp=0.jpg',
            list: ['img/bocai1.png', 'img/bocai2.png'],
          },
        ],
        item2: [
          {
            img: 'img/jinkou.png',
            name: '澳洲進口冰鮮肉',
            Introduce:
              '澳大利亞進口冰鮮肉牛腩禮盒和牛M8-9級牛腩穀飼原切牛肉1200g',
            price: 580,
            weight: '袋',
            diec: '贈送雞蛋一個',
            list: ['img/jinkourou1.png', 'img/jinkourou2.png'],
          },
          {
            img: 'img/niunan.png',
            name: '冷鮮和牛牛腩700g盒',
            Introduce: '【冰鮮肉】冷鮮和牛牛腩700g盒原切牛肉穀飼600+天元盛生鮮',
            price: 65,
            weight: '袋',
            diec: '贈送雞蛋一個',
            list: ['img/heniu1.png', 'img/heniu2.png'],
          },
          {
            img: 'img/niujian.png',
            name: ' 冷鮮和牛腱子1kg盒',
            Introduce:
              '【冰鮮肉】龍江和牛冷鮮和牛腱子1kg盒原切牛肉穀飼600+天元盛生鮮',
            price: 45,
            weight: '袋',
            diec: '贈送雞蛋一個',
            list: ['img/niujianzi1.png', 'img/niujianzi2.png'],
          },
          {
            img: 'img/heimao.png',
            name: 'A3眼肉牛排250g盒',
            Introduce:
              '【冰鮮肉】龍江和牛國產A3眼肉牛排250g盒原切牛肉生鮮穀飼600+天',
            price: 55,
            weight: '袋',
            diec: '贈送雞蛋一個',
            list: ['img/niupai1.png', 'img/niupai2.png'],
          },
        ],
        item3: [
          {
            img: 'img/haiyang.png',
            name: '黃花魚700g',
            Introduce: '深海速凍寧德大黃花魚700g 2條生鮮海鮮水產',
            price: 620,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/huanghuayu1.png', 'img/huanghuayu2.png'],
          },
          {
            img: 'img/haishang.png',
            name: '白蕉海鱸魚',
            Introduce:
              '白蕉海鱸魚三去淨膛500~600g(珠海地標特產CNAS認證)燒烤食材海鮮',
            price: 95,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/baijiaoyu1.png'],
          },
          {
            img: 'img/sandu.png',
            name: '活凍三去海鱸魚',
            Introduce: '活凍三去海鱸魚500g/條內附料包自營海產',
            price: 52,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/baijiaoyu2.png'],
          },
          {
            img: 'img/xiangtai.png',
            name: '金鯧魚900g',
            Introduce: '金鯧魚900g（2條）深海養殖捕撈 無公害認證 全程可追溯',
            price: 90,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/jinqiangyu1.png', 'img/jinqiangyu2.png'],
          },
        ],
        item4: [
          {
            img: 'img/mihoutao.png',
            name: '奇異果',
            Introduce: '奇異果生鮮水果紅心奇異果15粒裝70-90g鮮果',
            price: 620,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/qiyiguo1.png'],
          },
          {
            img: 'img/liulian.png',
            name: '榴槤2-2.5kg',
            Introduce: '泰國進口金枕頭榴槤2-2.5kg 1個裝新鮮水果',
            price: 95,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/liulian1.png', 'img/liulian2.png'],
          },
          {
            img: 'img/xigua.png',
            name: '麒麟西瓜',
            Introduce: '麒麟西瓜1粒裝單果2.5kg以上新鮮水果',
            price: 52,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/xigua1.png', 'img/xigua2.png'],
          },
          {
            img: 'img/huolongguo.png',
            name: '紅心火龍果',
            Introduce:
              '紅心火龍果新鮮水果5斤裝天生外表幹鄒個頭小帶箱5斤中小果（8-11個）',
            price: 90,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: [
              'img/huolongguo1.png',
              'img/huolongguo2.png',
              'img/huolongguo3.png',
            ],
          },
        ],
        item5: [
          {
            img: 'img/xia.png',
            name: '大閘蟹',
            Introduce: '蟹大黃多  死蟹無黃包賠 18只2.2-1.6兩大閘蟹',
            price: 620,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/dazhaxie1.png', 'img/dazhaxie2.png'],
          },
          {
            img: 'img/xia2.png ',
            name: '加拿大龍蝦400-550g',
            Introduce: '加拿大龍蝦400-550g',
            price: 95,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/longxia1.png'],
          },
          {
            img: 'img/shuizhi.png',
            name: '水產遼刺參高品質7年500g',
            Introduce:
              '參福元長島即食海參海鮮水產遼刺參高品質7年500g 7-9頭買一斤送一斤',
            price: 52,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/haishen1.png', 'img/haishen2.png'],
          },
          {
            img: 'img/xia1.png',
            name: '禧美厄瓜多爾白蝦',
            Introduce:
              '禧美厄瓜多爾白蝦淨重1.8kg 90-108只/盒大蝦原裝進口海鮮水產',
            price: 90,
            weight: '袋',
            diec: '買送雞蛋一個',
            list: ['img/xiaoxia1.png', 'img/xiaoxia2.png'],
          },
        ],
        item1: [
          {
            img: 'img/meihua.png',
            name: '黑豬肉梅花肉450g',
            Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
            price: 55,
            weight: '袋',
            diec: '梅菜扣肉好吃',
            list: ['img/zhurou1.png', 'img/zhurou2.png'],
          },
          {
            img: 'img/paigu.png',
            name: '黑豬肉排骨450g',
            Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
            price: 65,
            weight: '袋',
            diec: '清蒸排骨好吃',
            list: ['img/zhurou3.png', 'img/zhurou4.png'],
          },
          {
            img: 'img/rouxian.png',
            name: '黑豬肉肉餡450g',
            Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
            price: 45,
            weight: '袋',
            diec: '肉餡餃子好吃',
            list: ['img/zhurou5.png', 'img/zhurou6.png'],
          },
          {
            img: 'img/wuhua.png',
            name: '黑豬肉五花肉450g',
            Introduce: '豬頸肉雪花豬肉林間生長360天烤肉燒烤食材',
            price: 55,
            weight: '袋',
            diec: '燜五花肉好吃',
            list: ['img/zhurou7.png', 'img/zhurou2.png'],
          },
        ],
      },
    }
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      autoplay: {
        delay: 3000,
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
  },
  methods: {
    switchPawnshop(num) {
      this.isActive = num
    },
    toGoodsList(item, pawnshop) {
      this.$router.push({
        path: '/goodslist',
        query: { goodsList: JSON.stringify(this.goodsList[item]), pawnshop },
      })
    },
    toGoods(index) {
      this.$router.push({
        path: '/goodsdetails',
        query: { item: JSON.stringify(this.item[index]) },
      })
    },
  },
}
</script>
<style lang="less">
#pawnshop {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;

  .pawnshop-nav-wrap {
    width: 100%;
    overflow: auto;
    position: fixed;
    z-index: 10;
  }
  .pawnshop-nav {
    // display: flex;
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    // flex-flow: row nowrap;
    border-bottom: 1px solid #000;
    background-color: #ffffff;
    li {
      display: inline-block;

      margin-right: 20px;
      // width: 100px;
      text-align: center;
      i {
        border-radius: 50%;
        display: block;
        font-size: 25px;
        img {
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .isActive {
        color: red;
      }
    }
  }
  .pawnshop-centent {
    padding-top: 65px;
    height: 510px;
    box-sizing: content-box;
    // background-color: #dddddd;
    overflow: auto;
  }
  .pawnshopList-max {
    box-sizing: border-box;
    background-color: #dddddd;
    overflow: auto;

    .pawnshopItem {
      background-color: #ffffff;
      display: flex;
      color: black;
      font-weight: 200;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      flex-wrap: wrap;
      margin: 8px;
      .shop-food {
        position: relative;
        display: flex;
        .shop-logo {
          width: 80px;
          img {
            width: 100%;
          }
        }

        .shop-inner {
          width: 270px;

          padding: 10px 00px;
          box-sizing: border-box;
          .shop-top {
            display: flex;
            justify-content: space-between;
            span {
              &:nth-child(1) {
                font-weight: 600;
              }
            }
            p {
              padding: 0px;
              margin: 0px;
              padding: 1px;
              background-color: #ffc0cb47;
              font-size: 14px;
              color: red;
            }
          }
          .shop-centent {
            display: flex;
            justify-content: space-between;
          }
        }
      }

      .line {
        position: absolute;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        background-color: #cccccc;
        bottom: 0px;
      }
      .shop-footer {
        width: 100%;
        text-align: center;
        padding-top: 5px;
        i {
          margin-right: 5px;
        }
        span {
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
  .recommend {
    padding: 10px;
    .shop-recommend {
      border: 1px solid #cccccc;
      border-radius: 10px;
      padding: 5px;
      p {
        padding: 5px;
        font-weight: 600;

        i {
          color: red;
          font-size: 18px;
        }
      }
      .list {
        overflow: auto;
        white-space: nowrap;

        .item {
          display: inline-block;
          width: 28%;
          margin: 0px 5px;

          img {
            display: block;
            height: 92px;
          }
          span {
            white-space: pre-wrap;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;

            -webkit-line-clamp: 2;
            &:nth-last-child(1) {
              color: red;
              font-weight: 6000;
            }
          }
        }
      }
    }
  }
}
</style>