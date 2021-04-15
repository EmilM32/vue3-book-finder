import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { IBooksResult, IState } from '@/interfaces'
import { createStore } from 'vuex'
import axios from 'axios'
import { getApi } from '@/api'
import { EChangePage } from '@/enums'

export default createStore<IState>({
  state: {
    booksResult: {
      items: [],
      kind: '',
      totalItems: 0,
    },
    searchData: {
      query: '',
      maxResults: 10,
      startIndex: 0,
    }
  },
  mutations: {
    [MutationTypes.ADD_BOOKS_RESULT] (state: IState, payload: IBooksResult): void {
      state.booksResult = payload
    },
    [MutationTypes.CHANGE_PAGE] (state: IState, payload: EChangePage): void {
      if (payload === EChangePage.NEXT) {
        state.searchData.startIndex = state.searchData.startIndex += state.searchData.maxResults
      } else if (payload === EChangePage.PREVIOUS) {
        state.searchData.startIndex = state.searchData.startIndex -= state.searchData.maxResults
      }
    },
    [MutationTypes.SET_QUERY] (state: IState, payload: string): void {
      state.searchData.query = payload
      state.searchData.startIndex = 0
    },
  },
  actions: {
    async [ActionTypes.SEARCH_BOOKS] ({ commit }): Promise<void> {
      const response = await axios.get(
        getApi(
          this.state.searchData.maxResults,
          this.state.searchData.startIndex,
          this.state.searchData.query)
      )
      if (response) {
        commit(MutationTypes.ADD_BOOKS_RESULT, response.data)
      }
    }
  },
  getters: {
    booksResult: (state) => state.booksResult.items,
    currentStartIndex: (state) => state.searchData.startIndex,
  },
})
