<template>
  <div>
    <app-search-box />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSearchBox from '@/components/AppSearchBox.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppSearchBox,
  }
})
</script>

<style lang="postcss">
body {
  @apply bg-gray-800;
}
</style>
