import { createStore } from 'vuex'
import books from '@/store/modules/books'
import { IRootState } from '@/interfaces'

export default createStore<IRootState>({
  modules: {
    books,
  }
})
