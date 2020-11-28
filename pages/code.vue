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
  display: flex;
  flex-wrap: wrap;
  margin: -20px;

  & > * {
    margin: 20px;
    width: calc(100% - 40px);
  }

  @include breakpoint('md') {
    & > * {
      width: calc(50% - 40px);
    }
  }

  @include breakpoint('xl') {
    & > * {
      width: calc(33.33% - 40px);
    }
  }
}
</style>
