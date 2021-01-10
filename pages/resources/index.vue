<template>
  <div>
    <resources-page
      :items="resources"
      :on-tags-change="onTagsChange"
      :tags="tags"
    />
  </div>
</template>

<script>
import ResourcesPage from '~/components/ResourcesPage.vue'

export default {
  components: { ResourcesPage },
  data() {
    return {
      selectedTags: this.tags || [],
    }
  },
  computed: {
    resources() {
      return this.$store.getters.resourcesByTags(this.selectedTags)
    },
    tags() {
      return this.$store.state.tags
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
  watch: {
    tags(newTags, oldTags) {
      this.selectedTags = [...newTags]
    },
  },
  mounted() {
    if (this.resources === undefined) {
      this.$store.dispatch('getResources')
    }
  },
  methods: {
    onTagsChange(tags) {
      this.selectedTags = [...tags]
    },
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
