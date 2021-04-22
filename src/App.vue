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
import { MutationTypes } from '@/enums/mutation-types'
import { EModules } from '@/enums'
import { getModule } from '@/utils'

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

    function search (query: string): void {
      if (query.length) {
        state.showResult = true
        router.push({
          name: 'Results'
        })
        store.commit(getModule(EModules.BOOKS, MutationTypes.SET_QUERY), query)
        store.dispatch(getModule(EModules.BOOKS, ActionTypes.SEARCH_BOOKS))
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
