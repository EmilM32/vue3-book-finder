import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { IBooksResult, IState } from '@/interfaces'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from 'axios'
import { getApi } from '@/api'
import { InjectionKey } from 'vue'

// define injection key
export const key: InjectionKey<Store<IState>> = Symbol('InjectionKey')

export const store = createStore<IState>({
  state: {
    booksResult: {
      items: [],
      kind: '',
      totalItems: 0,
    },
    pagination: {
      maxResults: 20,
      startIndex: 0,
    },
  },
  mutations: {
    [MutationTypes.ADD_BOOKS_RESULT] (state: IState, payload: IBooksResult): void {
      state.booksResult = payload
    }
  },
  actions: {
    async [ActionTypes.SEARCH_BOOKS] ({ commit }, query: string): Promise<void> {
      const response = await axios.get(getApi(this.state.pagination.maxResults, this.state.pagination.startIndex, query))
      if (response) {
        commit(MutationTypes.ADD_BOOKS_RESULT, response.data)
      }
    }
  },
  getters: {
    booksResult: (state) => state.booksResult.items
  }
})

export function useStore (): Store<IState> {
  return baseUseStore(key)
}
