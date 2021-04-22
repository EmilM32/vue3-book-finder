import { GettersTypes } from '@/enums/getter-types'
import { IBook, IBooksState } from '@/interfaces'

export default {
  [GettersTypes.BOOK_RESULTS] (state: IBooksState): IBook[] {
    return state.booksResult.items
  },

  [GettersTypes.CURRENT_START_INDEX] (state: IBooksState): number {
    return state.searchData.startIndex
  }
}
