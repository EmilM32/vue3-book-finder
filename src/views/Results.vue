<template>
  <div class="mx-20 mt-6">
    <div
      class="grid justify-items-stretch grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2"
    >
      <base-card
        v-for="book in booksResult"
        :key="book.id"
        :title="book.volumeInfo.title"
        :poster="book.volumeInfo.imageLinks?.smallThumbnail || ''"
        :authors="book.volumeInfo.authors || []"
        :published-date="book.volumeInfo.publishedDate || ''"
        :publisher="book.volumeInfo.publisher || ''"
      />
    </div>
  </div>
  <app-result-pagination
    :current-start-index="currentStartIndex"
    @previous="goToPreviousPage"
    @next="goToNextPage"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import AppResultPagination from '@/components/AppResultPagination.vue'
import BaseCard from '@/components/BaseCard.vue'
import { IBook } from '@/interfaces'
import { useStore } from 'vuex'
import { EChangePage, EModules } from '@/enums'
import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { getModule } from '@/utils'
import { GettersTypes } from '@/enums/getter-types'

interface IResultsState {
  booksResult: IBook[]
  currentStartIndex: number
}

export default defineComponent({
  name: 'Results',
  components: {
    AppResultPagination,
    BaseCard
  },

  setup() {
    const store = useStore()

    const state: IResultsState = reactive({
      booksResult: computed(
        () =>
          store.getters[getModule(EModules.BOOKS, GettersTypes.BOOK_RESULTS)]
      ),
      currentStartIndex: computed(
        () =>
          store.getters[
            getModule(EModules.BOOKS, GettersTypes.CURRENT_START_INDEX)
          ]
      )
    })

    function goToPreviousPage(): void {
      store.commit(
        getModule(EModules.BOOKS, MutationTypes.CHANGE_PAGE),
        EChangePage.PREVIOUS
      )
      store.dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
    }

    function goToNextPage(): void {
      store.commit(
        getModule(EModules.BOOKS, MutationTypes.CHANGE_PAGE),
        EChangePage.NEXT
      )
      store.dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
    }

    return { ...toRefs(state), goToPreviousPage, goToNextPage }
  }
})
</script>
