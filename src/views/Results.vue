<template>{{ searchFor }}</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Results',

  setup () {
    const store = useStore()

    const state = reactive({
      searchFor: computed(() => store.state.searchData)
    })

    return { ...toRefs(state) }
  },
})
</script>
