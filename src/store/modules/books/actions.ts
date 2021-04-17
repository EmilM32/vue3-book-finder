import { getApi } from '@/api'
import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { IRootState, IBooksState } from '@/interfaces'
import axios from 'axios'
import { ActionContext } from 'vuex'

export default {
  async [ActionTypes.SEARCH_BOOKS] ({ state, commit }: ActionContext<IBooksState, IRootState>): Promise<void> {
    console.log('ActionTypes.SEARCH_BOOKS')

    const response = await axios.get(
      getApi(
        state.searchData.maxResults,
        state.searchData.startIndex,
        state.searchData.query)
    )
    if (response) {
      commit(MutationTypes.ADD_BOOKS_RESULT, response.data)
    }
  }
}
