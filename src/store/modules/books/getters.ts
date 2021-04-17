import { IBook, IBooksState } from '@/interfaces'

export default {
  booksResult (state: IBooksState): IBook[] {
    return state.booksResult.items
  },

  currentStartIndex (state: IBooksState): number {
    return state.searchData.startIndex
  }
}
