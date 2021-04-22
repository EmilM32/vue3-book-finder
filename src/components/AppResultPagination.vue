<template>
  <div class="fixed bottom-0 w-full flex items-center justify-center">
    <div
      class="flex justify-center justify-self-center bg-gray-300 w-32 rounded-t-xl"
    >
      <div v-for="(action, i) in actions" :key="i">
        <button
          v-show="!action.hide"
          class="flex content-end focus:outline-none"
          @click="action.click"
        >
          <svg
            class="h-10 w-10 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="action.icon"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

interface IAction {
  icon: string
  hide: boolean
  click: () => void
}

export default defineComponent({
  name: 'AppResultPagination',
  emits: ['previous', 'next'],
  props: {
    currentStartIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { currentStartIndex } = toRefs(props)

    const state: { actions: IAction[] } = reactive({
      actions: [
        {
          icon: 'M15 19l-7-7 7-7',
          hide: computed(() => currentStartIndex.value <= 0),
          click: () => emit('previous'),
        },
        {
          icon: 'M9 5l7 7-7 7',
          hide: false,
          click: () => emit('next'),
        },
      ],
    })

    return { ...toRefs(state) }
  },
})
</script>
