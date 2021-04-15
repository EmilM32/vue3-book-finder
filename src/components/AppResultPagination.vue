<template>
  <div class="fixed bottom-0 w-full flex items-center justify-center">
    <div class="flex justify-center justify-self-center bg-gray-300 w-32 rounded-t-xl">
      <div v-for="(action, i) in actions" :key="i">
        <button
          v-show="!action.disabled"
          class="flex-shrink focus:outline-none"
          @click="action.click"
          :disabled="action.disabled"
        >
          <svg viewBox="0 0 20 20" height="40px" width="40px">
            <path :d="action.icon" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'

interface IAction {
  icon: string
  disabled: boolean
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
  setup (props, { emit }) {
    const { currentStartIndex } = toRefs(props)

    function clickedPrevios (): void {
      emit('previous')
    }

    function clickedNext (): void {
      emit('next')
    }

    const state: { actions: IAction[] } = reactive({
      actions: [
        {
          icon: mdiChevronLeft,
          disabled: computed(() => currentStartIndex.value <= 0),
          click: clickedPrevios,
        },
        {
          icon: mdiChevronRight,
          disabled: false,
          click: clickedNext,
        },
      ]
    })

    return { ...toRefs(state) }
  },
})
</script>
