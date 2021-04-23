<template>
  <div
    class="min-w-screen flex items-center justify-center px-5 py-5 min-h-screen flex-col"
  >
    <svg
      class="h-64 w-64 text-white"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="10" x2="9.01" y2="10" />
      <line x1="15" y1="10" x2="15.01" y2="10" />
      <path d="M9.5 16a10 10 0 0 1 6 -1.5" />
    </svg>
    <span class="font-bold text-4xl">{{ $t('common.notFound') }}</span>
    <router-link :to="{ name: homePage }">
      <span class="tracking-wider uppercase hover:underline">
        {{ $t('common.homePage') }}
      </span>
    </router-link>
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
