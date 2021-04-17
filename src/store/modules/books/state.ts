import { IBooksState } from '@/interfaces'

const state: IBooksState = {
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
}

export default state
