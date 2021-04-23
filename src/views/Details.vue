<template>
  {{ id }}
</template>

<script lang="ts">
import { EPages } from '@/enums'
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: EPages.DETAILS,
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    return { ...toRefs(props) }
  },
})
</script>
