import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { createStore } from 'vuex'

interface IState {
  searchData: string
}

export default createStore<IState>({
  state: {
    searchData: ''
  },
  mutations: {
    [MutationTypes.SET_SEARCH_DATA] (state: IState, data: string): void {
      state.searchData = data
    }
  },
  actions: {
    [ActionTypes.ADD_SEARCH_DATA] ({ commit }, data: string): void {
      commit(MutationTypes.SET_SEARCH_DATA, data)
    }
  },
  getters: {
    searchData: (state) => state.searchData
  }
})
