<template>{{ searchFor }}</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Results',

  setup () {
    const route = useRoute()

    const state = reactive({
      searchFor: route.query.searchFor
    })

    return { ...toRefs(state) }
  },
})
</script>
