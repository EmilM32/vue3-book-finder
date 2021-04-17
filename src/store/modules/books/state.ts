import { IBooksState } from '@/interfaces'

export default {
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
} as IBooksState
