<template>
  <div>
    <resources-page :items="resources" />
  </div>
</template>

<script>
import ResourcesPage from '~/components/ResourcesPage.vue'

export default {
  components: { ResourcesPage },
  computed: {
    resources() {
      return this.$store.state.resources
    },
  },
  meta: {
    breadcrumb: [
      {
        id: 'resources-1',
        label: 'Resources',
      },
    ],
    theme: 'light',
  },
  mounted() {
    if (this.resources === undefined) {
      this.$store.dispatch('getResources')
    }
  },
  transition: {
    mode: 'in-out',
    name: 'resources',
  },
}
</script>

<style scoped lang="scss">
.resources-enter-active,
.resources-leave-active {
  transition: opacity 0.5s;
}

.resources-enter,
.resources-leave-active {
  opacity: 0;
}
</style>
