import { EModules, EPages } from '@/enums'
import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { GettersTypes } from '@/enums/getter-types'
import router from '@/router'
import store from '@/store'

type AvailableTypes = MutationTypes | ActionTypes | GettersTypes

export const getModule = (module: EModules, type: AvailableTypes): string => {
  return `${module}/${type}`
}

export const searchBooks = (query: string): void => {
  if (query.length) {
    router.push({ name: EPages.RESULTS })
    store.commit(getModule(EModules.BOOKS, MutationTypes.SET_QUERY), query)
    store.dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
  } else {
    router.push({ name: EPages.HOME })
  }
}
