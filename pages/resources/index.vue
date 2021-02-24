<template>
  <app-page :breadcrumb="breadcrumb" theme="light">
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
          id: 'code-1',
          label: 'Code',
        },
        {
          id: 'code-2',
          label: 'Projects & Experiments',
        },
      ],
      selectedTags: this.tags || [],
    }
  },
  computed: {
    resources() {
      console.log(this.selectedTags)
      return this.$store.getters.resourcesByTags(this.selectedTags)
    },
    tags() {
      console.log(this.$store.state.tags)
      return this.$store.state.tags
    },
  },
  meta: { theme: 'light' },
  watch: {
    tags(newTags, oldTags) {
      console.log('newTags', newTags)
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
  transition: {
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss"></style>
