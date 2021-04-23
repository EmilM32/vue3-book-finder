<template>
  <div
    class="relative border-gray-300 border-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
  >
    <span class="m-4 font-semibold justify-center flex" :title="title">{{
      cutTitle(title)
    }}</span>
    <div class="flex">
      <div v-if="poster" class="m-3 flex-initial">
        <img :src="poster" alt="poster" />
      </div>
      <div v-else class="relative m-3 flex-initial w-24 h-52 px-5 bg-gray-800">
        <span class="absolute inset-0 flex items-center justify-center">
          <svg
            class="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </span>
      </div>
      <div class="flex flex-col">
        <div v-if="authors.length" class="mt-2">
          <span class="font-semibold">{{
            $tc('info.authors', authors.length === 1 ? 1 : 2)
          }}</span>
          : {{ authors.join(', ') }}
        </div>
        <div v-if="publishedDate" class="mt-2">
          <span class="font-semibold">{{ $t('info.publishedDate') }}</span>
          : {{ publishedDate }}
        </div>
        <div v-if="publisher" class="mt-2">
          <span class="font-semibold">{{ $t('info.publisher') }}</span>
          : {{ publisher }}
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'Details', params: { id: id } }">
      <button
        class="absolute bottom-2 right-2 bg-transparent hover:bg-blue-400 font-semibold py-2 px-4 border hover:border-transparent rounded"
      >
        {{ $t('info.more') }}
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
export default defineComponent({
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    authors: {
      type: Array as PropType<string[]>,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    function cutTitle(title: string): string {
      if (title.length > 30) {
        return `${title.substr(0, 30)}...`
      } else {
        return title
      }
    }

    return { ...toRefs(props), cutTitle }
  },
})
</script>
