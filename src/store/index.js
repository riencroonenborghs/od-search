import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'
import { BlacklistService } from '@/services/blacklist_service'
import { QueryTypeService } from '@/services/query_type_service'
import { SavedSearchesService } from '@/services/saved_searches_service'

Vue.use(VueLocalStorage)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    localStorage: Vue.localStorage,
    navBar: null,
    subTitle: null,
    blacklistService: new BlacklistService(),
    queryTypeService: new QueryTypeService(),
    savedSearchesService: new SavedSearchesService(),
    blacklist: [],
    queryTypes: []
  },
  mutations: {
    navBar: function (state, value) {
      state.navBar = value
    },
    subTitle: function (state, value) {
      state.subTitle = value
    },
    blacklist: function (state, list) {
      state.blacklist = list
    },
    queryTypes: function (state, list) {
      state.queryTypes = list
    }
  },
  actions: {
    canGoBack: function (context) {
      context.commit('navBar', { goBack: true })
    },
    navReset: function (context) {
      context.commit('navBar', null)
    },
    titleReset: function (context) {
      context.commit('subTitle', null)
    },
    loadBlacklist: function (context) {
      context.state.blacklistService.load()
    },
    loadQueryTypes: function (context) {
      context.state.queryTypeService.load()
    }
  },
  modules: {
  }
})
