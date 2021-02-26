<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="about === undefined"
    theme="light"
  >
    <div v-if="about !== undefined" class="wrapper">
      <h1 class="heading">{{ about.title }}</h1>
      <span class="about-content" v-html="about.content"></span>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage,
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
      return this.$store.state.about
    },
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
</style>

<style lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.about-content p {
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
