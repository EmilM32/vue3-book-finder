import { EChangePage } from '@/enums'
import { MutationTypes } from '@/enums/mutation-types'
import { IBooksState, IBooksResult } from '@/interfaces'

export default {
  [MutationTypes.ADD_BOOKS_RESULT] (state: IBooksState, payload: IBooksResult): void {
    state.booksResult = payload
  },
  [MutationTypes.CHANGE_PAGE] (state: IBooksState, payload: EChangePage): void {
    if (payload === EChangePage.NEXT) {
      state.searchData.startIndex = state.searchData.startIndex += state.searchData.maxResults
    } else if (payload === EChangePage.PREVIOUS) {
      state.searchData.startIndex = state.searchData.startIndex -= state.searchData.maxResults
    }
  },
  [MutationTypes.SET_QUERY] (state: IBooksState, payload: string): void {
    state.searchData.query = payload
    state.searchData.startIndex = 0
  },
}
