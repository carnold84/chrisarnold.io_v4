<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="projects === undefined"
    theme="dark"
  >
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
      return this.$store.state.projects
    },
  },
  meta: { theme: 'dark' },
  methods: {
    isSelected(id) {
      return this.selectedProject === id
    },
    onCodeClick(id) {
      this.selectedProject = id
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Experiments and projects built using HTML, CSS, Javascript, React, Vue, Angular and more.',
        },
      ],
      title: 'Code - ChrisArnold.io',
    }
  },
  transition: {
    afterEnter(el) {
      if (this.projects === undefined) {
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
