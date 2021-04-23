<template>
  <app-search-box
    class="min-w-screen flex items-center justify-center px-5 py-5 min-h-screen"
    @search="searchBooks"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSearchBox from '@/components/AppSearchBox.vue'
import { searchBooks } from '@/utils'
import { EPages } from '@/enums'

export default defineComponent({
  name: EPages.HOME,
  components: {
    AppSearchBox,
  },
  setup() {
    return { searchBooks }
  },
})
</script>
