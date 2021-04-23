<template>
  <app-search-box
    class="min-w-screen flex items-center justify-center px-5 py-5"
    @search="searchBooks"
  />
  <div class="mx-20 my-6">
    <div
      v-if="!loadingData"
      class="grid justify-items-stretch grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2"
    >
      <base-card
        v-for="book in booksResult"
        :key="book.id"
        :id="book.id"
        :title="book.volumeInfo.title"
        :poster="book.volumeInfo.imageLinks?.smallThumbnail || ''"
        :authors="book.volumeInfo.authors || []"
        :published-date="book.volumeInfo.publishedDate || ''"
        :publisher="book.volumeInfo.publisher || ''"
      />
    </div>
    <base-wait-loader v-else />
  </div>
  <app-result-pagination
    :current-start-index="currentStartIndex"
    @previous="goToPreviousPage"
    @next="goToNextPage"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch } from 'vue'
import AppResultPagination from '@/components/AppResultPagination.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseWaitLoader from '@/components/BaseWaitLoader.vue'
import AppSearchBox from '@/components/AppSearchBox.vue'
import { IBook } from '@/interfaces'
import { useStore } from 'vuex'
import { EChangePage, EModules, EPages } from '@/enums'
import { ActionTypes } from '@/enums/action-types'
import { MutationTypes } from '@/enums/mutation-types'
import { getModule, searchBooks } from '@/utils'
import { GettersTypes } from '@/enums/getter-types'

interface IResultsState {
  booksResult: IBook[]
  currentStartIndex: number
  loadingData: boolean
}

export default defineComponent({
  name: EPages.RESULTS,
  components: {
    AppResultPagination,
    BaseCard,
    BaseWaitLoader,
    AppSearchBox,
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
      ),
      loadingData: true,
    })

    watch(
      () => state.booksResult,
      booksResult => {
        if (booksResult.length) {
          state.loadingData = false
        }
      }
    )

    function goToPreviousPage(): void {
      store.commit(
        getModule(EModules.BOOKS, MutationTypes.CHANGE_PAGE),
        EChangePage.PREVIOUS
      )
      state.loadingData = true
      store
        .dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
        .then(() => {
          state.loadingData = false
        })
    }

    function goToNextPage(): void {
      store.commit(
        getModule(EModules.BOOKS, MutationTypes.CHANGE_PAGE),
        EChangePage.NEXT
      )
      state.loadingData = true
      store
        .dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
        .then(() => {
          state.loadingData = false
        })
    }

    return { ...toRefs(state), goToPreviousPage, goToNextPage, searchBooks }
  },
})
</script>
