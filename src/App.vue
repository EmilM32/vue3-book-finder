<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="postcss">
body {
  @apply bg-gray-800;
  @apply text-white;
}
</style>
