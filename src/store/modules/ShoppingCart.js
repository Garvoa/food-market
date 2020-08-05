const state = {
  shoppingCartList: []
}
const mutations = {
  Update_shoppingCartList(state, item) {
    // let flag = false
    // if (state.shoppingCartList.length === 0) {
    //   let obj = {
    //     ...item,
    //     checked: true,
    //     num: 1
    //   }
    //   state.shoppingCartList.push(obj)
    // } else {
    //   state.shoppingCartList.forEach((element) => {
    //     if (element.name === item.name) {
    //       element.num++
    //       return
    //     } else {
    //       flag = true
    //     }
    //   })
    // }


    let obj = {
      ...item,
      checked: true,
      num: item.num || 1
    }
    state.shoppingCartList.push(obj)



  },
  Update_shoppingCartList_checked(state, boolean) {
    state.shoppingCartList.forEach((item) => {
      item.checked = boolean
    })
  },
  Delete_shoppingCart_item(state, item) {
    state.shoppingCartList = state.shoppingCartList.filter((element) => {
      return element.name !== item.name
    })


  },
  Delete_shoppingCart_checked(state,) {
    state.shoppingCartList = state.shoppingCartList.filter((element, index) => {
      return element.checked !== true
    })
  }

}
const actions = {

}
const getters = {
  totalPrice(state) {
    if (state.shoppingCartList.length > 0) {
      return state.shoppingCartList.reduce((p, c) => {
        if (c.checked === true) {
          p += c.price * c.num
        }
        return parseInt(p)
      }, 0)

    } else {
      return 0
    }

  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}