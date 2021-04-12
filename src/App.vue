<template>
  <div>
    <app-search-box
      class="min-w-screen flex items-center justify-center px-5 py-5"
      :class="{ ['min-h-screen']: !showResult, ['mt-10']: showResult }"
      @search="search"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AppSearchBox from '@/components/AppSearchBox.vue'
import { ActionTypes } from '@/enums/action-types'

export default defineComponent({
  name: 'App',
  components: {
    AppSearchBox,
  },
  setup () {
    const router = useRouter()
    const store = useStore()

    const state = reactive({
      showResult: false
    })

    function search (text: string): void {
      if (text.length) {
        state.showResult = true
        router.push({
          name: 'Results'
        })
        store.dispatch(ActionTypes.ADD_SEARCH_DATA, text)
      } else {
        state.showResult = false
        router.push({ name: 'Home' })
      }
    }

    return { ...toRefs(state), search }
  },
})
</script>

<style lang="postcss">
body {
  @apply bg-gray-800;
  @apply text-white;
}
</style>
