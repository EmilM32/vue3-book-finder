<template>
  <div class="fixed bottom-0 w-full flex items-center justify-center">
    <div
      class="flex justify-center justify-self-center bg-gray-300 w-32 rounded-t-xl"
    >
      <button
        v-for="(action, i) in actions"
        :key="i"
        class="flex-shrink focus:outline-none"
        @click="action.click"
      >
        <svg viewBox="0 0 20 20" height="40px" width="40px">
          <path :d="action.icon.toString()" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'

interface IAction {
  icon: string
  click: () => void
}

export default defineComponent({
  name: 'AppResultPagination',
  emits: ['previous', 'next'],
  setup (_props, { emit }) {
    function clickedPrevios (): void {
      emit('previous')
    }

    function clickedNext (): void {
      emit('next')
    }

    const actions: IAction[] = [
      {
        icon: mdiChevronLeft,
        click: clickedPrevios,
      },
      {
        icon: mdiChevronRight,
        click: clickedNext,
      },
    ]

    return { actions }
  },
})
</script>
