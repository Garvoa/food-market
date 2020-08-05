const state = {

  payOrdersList: [],

}
const mutations = {
  Update_payOrdersList(state, list) {
    if (list.length) {
      state.payOrdersList = list
    } else {
      state.payOrdersList.push(list)
    }

  },
  Del_payOrdersList(state) {
    state.payOrdersList = []
  }

}
const actions = {

}
const getters = {
  getPrice(state) {
    return state.payOrdersList ? state.payOrdersList.reduce((p, c) => {
      p += c.num * c.price
      return p
    }, 0) : 0
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}