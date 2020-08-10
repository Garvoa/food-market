import { getMenumodInfo } from "../../api"

const state = {
  attrButeList: [],
  ordermodhisList: [],
  isAdd: true
}
const mutations = {

  UPDATE_MENUMOND_ONFO(state, data) {
    state.attrButeList = data
  },
  UPDATE_MENUMOND_ordermodhisList(state, data) {
    state.ordermodhisList = data
  }
}
const actions = {
  reqMenumodInfo({ commit }, data) {
    return getMenumodInfo(data)

  }
}
const getters = {
  getModifiersList(state) {
    return state.attrButeList ? state.attrButeList.modifiers : []
  },
  getOrdermodhisList(state) {
    return state.ordermodhisList.modifiers ? state.ordermodhisList.modifiers : []
  }
}


export default {
  state,
  mutations,
  actions,
  getters,
}