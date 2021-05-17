<template>
  <portal v-if="usePortal"><slot></slot></portal>
  <span v-else><slot></slot></span>
</template>

<script>
export default {
  name: 'WithPortal',
  props: {
    usePortal: {
      default: truw,
      type: Boolean,
    },
  },
}
</script>
