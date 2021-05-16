<template>
  <resources-page :items="resources" />
</template>

<script>
import ResourcesPage from '~/components/ResourcesPage.vue'

export default {
  components: { ResourcesPage },
  computed: {
    resources() {
      const tag = this.$route.params.tag
      return this.$store.getters.resourcesByTag(tag)
    },
  },
  meta: {
    breadcrumb: [
      {
        id: 'resources-1',
        label: 'Resources',
      },
      {
        id: 'resources-2',
        label: 'Useful Links',
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
    name: 'page',
  },
}
</script>

<style scoped lang="scss"></style>
