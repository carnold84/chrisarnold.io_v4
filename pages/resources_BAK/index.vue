<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="resources === undefined"
    theme="light"
  >
    <resources-page
      :items="resources"
      :on-tags-change="onTagsChange"
      :tags="tags"
    />
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import ResourcesPage from '~/components/ResourcesPage.vue'

export default {
  components: { ResourcesPage, AppPage },
  data() {
    return {
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
  meta: { theme: 'light' },
  watch: {
    tags(newTags) {
      this.selectedTags = [...newTags]
    },
  },
  mounted() {
    if (this.resources === undefined) {
      this.$store.dispatch('getResources')
    }

    if (this.tags) {
      this.selectedTags = this.tags
    }
  },
  methods: {
    onTagsChange(tags) {
      this.selectedTags = [...tags]
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Resources, useful links, libraries, frameworks and articles.',
        },
      ],
      title: 'Resources - ChrisArnold.io',
    }
  },
  transition: {
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss"></style>
