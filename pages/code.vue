<template>
  <div class="wrapper">
    <div class="content">
      <code-item
        v-for="(project, index) in projects"
        :key="project._id"
        :item="project"
        :number="index + 1"
      />
    </div>
  </div>
</template>

<script>
import CodeItem from '~/components/CodeItem.vue'

export default {
  components: {
    CodeItem,
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
  },
  meta: {
    theme: 'dark',
  },
  mounted() {
    if (this.projects === undefined) {
      this.$store.dispatch('getProjects')
    }
  },
  methods: {
    isSelected(id) {
      return this.selectedProject === id
    },
    onCodeClick(id) {
      this.selectedProject = id
    },
  },
  /* transition: {
    mode: 'in-out',
  }, */
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.wrapper {
  background-color: var(--dark-color1);
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding: 90px 20px;

  @include breakpoint('md') {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr;
    padding: 110px 40px;
  }

  @include breakpoint('lg') {
    padding: 110px 120px;
  }

  @include breakpoint('xl') {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
