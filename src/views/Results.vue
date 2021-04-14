<template>
  <div class="mx-20 mt-6">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      <div
        v-for="book in booksResult"
        :key="book.id"
        class="border-gray-300 border-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
      >{{ book.volumeInfo.title }}</div>
    </div>
  </div>
  <app-result-pagination @previous="goToPreviousPage" @next="goToNextPage" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import AppResultPagination from '@/components/AppResultPagination.vue'
import { IBook } from '@/interfaces'
import { useStore } from '@/store'

interface IResultsState {
  booksResult: IBook[]
}

export default defineComponent({
  name: 'Results',
  components: {
    AppResultPagination,
  },

  setup () {
    const store = useStore()

    const state: IResultsState = reactive({
      booksResult: computed(() => store.getters.booksResult)
    })

    function goToPreviousPage (): void {
      console.log('goToPreviousPage')
    }

    function goToNextPage (): void {
      console.log('goToNextPage')
    }

    return { ...toRefs(state), goToPreviousPage, goToNextPage }
  },
})
</script>
