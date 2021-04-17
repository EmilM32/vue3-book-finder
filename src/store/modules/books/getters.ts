import { IBook, IBooksState } from '@/interfaces'

export default {
  bookResult (state: IBooksState): IBook[] {
    console.log('getter bookResult')
    return state.booksResult.items
  },

  currentStartIndex (state: IBooksState): number {
    console.log('getter currentStartIndex')
    return state.searchData.startIndex
  }
}
