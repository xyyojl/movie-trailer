import Vue from 'vue'
import Vuex from 'vuex'
import searchCache from '@/assets/js/searchCache'

Vue.use(Vuex)

console.log('searchCache', searchCache)

export default new Vuex.Store({
  state: {
    searchHistory: searchCache.getAll()
  },
  mutations: {
    saveSearchHistory (state, query) {
      state.searchHistory = searchCache.addOne(query)
    },
    deleteSearchHistory (state, query) {
      state.searchHistory = searchCache.removeOne(query)
    },
    clearSearchHistory (state) {
      state.searchHistory = searchCache.clearAll()
    }
  },
  actions: {
  },
  modules: {
  }
})
