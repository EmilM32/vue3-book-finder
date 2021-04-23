<template>
  <div class="col-full text-center">
    <h1>Not found</h1>
    <router-link :to="{ name: homePage }">Home Page</router-link>
  </div>
</template>
<script lang="ts">
import { EPages } from '@/enums'
import { defineComponent } from 'vue'

export default defineComponent({
  name: EPages.NOT_FOUND,
  setup() {
    const homePage = EPages.HOME
    return { homePage }
  },
})
</script>
