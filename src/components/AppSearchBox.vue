<template>
  <div>
    <div
      class="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden min-w-80 max-w-3xl"
    >
      <div class="relative mt-1">
        <input
          v-model="searchModel"
          type="text"
          id="password"
          class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          :placeholder="$t('common.search')"
          @keyup.enter="searchBooks"
        />
        <button
          class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 focus:outline-none transition-colors"
          @click="searchBooks"
        >
          <svg
            class="h-5 w-5 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </div>
      <div class="absolute top-0 left-0 w-full h-2 flex">
        <div class="h-2 bg-blue-500 flex-1"></div>
        <div class="h-2 bg-red-500 flex-1"></div>
        <div class="h-2 bg-yellow-500 flex-1"></div>
        <div class="h-2 bg-blue-500 flex-1"></div>
        <div class="h-2 bg-green-500 flex-1"></div>
        <div class="h-2 bg-red-500 flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'AppSearchBox',
  emits: ['search'],
  setup(_props, { emit }) {
    const state = reactive({
      searchModel: '',
    })

    function searchBooks(): void {
      emit('search', state.searchModel)
      state.searchModel = ''
    }

    return { ...toRefs(state), searchBooks }
  },
})
</script>
