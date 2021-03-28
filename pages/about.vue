<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="about === undefined"
    theme="light"
  >
    <div v-if="about !== undefined" class="wrapper">
      <h1 class="heading">{{ about.title }}</h1>
      <div class="content">
        <vue-markdown :source="about.content"></vue-markdown>
      </div>
    </div>
  </app-page>
</template>

<script>
import VueMarkdown from 'vue-markdown'

import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage,
    VueMarkdown,
  },
  data() {
    return {
      breadcrumb: [
        {
          id: 'about-1',
          label: 'About',
        },
        {
          id: 'about-2',
          label: 'History & Experience',
        },
      ],
      theme: 'light',
    }
  },
  computed: {
    about() {
      console.log(this.$store.state.about)
      return this.$store.state.about
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About me, work history and qualifications.',
        },
      ],
      title: 'About - ChrisArnold.io',
    }
  },
  meta: { theme: 'light' },
  transition: {
    afterEnter(el) {
      if (this.about === undefined) {
        this.$store.dispatch('getAbout')
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
  max-width: 960px;
  opacity: 1;
  padding: 40px 0 0;
  position: relative;
}

.heading {
  color: var(--light-text-color1);
  font-size: 6rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 25px;
}

.content {
  color: var(--light-text-color2);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
  margin: 0 0 1.7rem;
  text-align: justify;

  @include breakpoint('sm') {
    font-size: 1rem;
    line-height: 1.7rem;
  }

  @include breakpoint('md') {
    font-size: 1rem;
    line-height: 1.7rem;
  }
}
</style>
