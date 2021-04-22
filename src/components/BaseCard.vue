<template>
  <div
    class="border-gray-300 border-1 bg-gray-500 hover:bg-gray-600 rounded-lg"
  >
    <span class="m-4 font-semibold justify-center flex" :title="title">{{
      cutTitle(title)
    }}</span>
    <div class="flex">
      <img :src="poster" alt="poster" class="m-3 flex-initial" />
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
