import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import { EModules, EPages } from '@/enums'
import store from '@/store'
import { GettersTypes } from '@/enums/getter-types'
import { getModule } from '@/utils'
import { IBook } from '@/interfaces'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: EPages.HOME,
    component: Home,
  },
  {
    path: '/result',
    name: EPages.RESULTS,
    component: () => import('@/views/Results.vue'),
  },
  {
    path: '/details/:id',
    name: EPages.DETAILS,
    props: true,
    component: () => import('@/views/Details.vue'),
    beforeEnter(to, _from, next) {
      // check if book exists in store
      const books: IBook[] =
        store.getters[getModule(EModules.BOOKS, GettersTypes.BOOK_RESULTS)]

      const bookExists = books.find(book => book.id === to.params.id)
      // if exists continue
      if (bookExists) {
        return next()
      } else {
        // next({ name: 'NotFound' })
        next({
          name: EPages.NOT_FOUND,
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        })
      }
      // if doesn't exist redirect to not found
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: EPages.NOT_FOUND,
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
