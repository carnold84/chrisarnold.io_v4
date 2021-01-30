<template>
  <app-page :breadcrumb="breadcrumb" theme="dark">
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
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import CodeItem from '~/components/CodeItem.vue'

export default {
  components: {
    CodeItem,
    AppPage,
  },
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
    }
  },
  computed: {
    projects() {
      console.log('projects', this.$store.state.projects)
      return this.$store.state.projects
    },
  },
  methods: {
    isSelected(id) {
      return this.selectedProject === id
    },
    onCodeClick(id) {
      this.selectedProject = id
    },
  },
  transition: {
    afterEnter(el) {
      if (this.projects === undefined) {
        console.log('afterEnter', this.projects)
        this.$store.dispatch('getProjects')
      }
    },
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  opacity: 1;
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
