<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="data === undefined"
    theme="dark"
  >
    <div v-if="data !== undefined" class="home">
      <section class="section">
        <page-title class="heading">{{ data.title }}</page-title>
        <nuxt-content :document="data" />
      </section>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { AppPage, PageTitle },
  async asyncData({ $content }) {
    const data = await $content('home').fetch()

    return {
      data,
    }
  },
  data() {
    return {
      breadcrumb: [],
    }
  },
  meta: { theme: 'dark' },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Chris Arnold - Front-end developer and designer working in Javascript, HTML, CSS, React, Vue, Node and more.',
        },
      ],
      title: 'ChrisArnold.io',
    }
  },
  transition: {
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 960px;
  opacity: 1;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.heading {
  color: var(--dark-text-color1);
  font-size: 5.2rem;
  line-height: 5.2rem;
  margin: 0 0 20px;

  @include breakpoint('sm') {
    font-size: 6.2rem;
    line-height: 6.2rem;
  }

  @include breakpoint('md') {
    font-size: 7.2rem;
    line-height: 7.2rem;
  }
}

.section {
  color: var(--dark-text-color2);
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.5rem;
  margin: 0 0 80px;
  text-align: justify;

  &::v-deep p:first-child {
    margin: 0;
  }

  @include breakpoint('sm') {
    font-size: 1.7rem;
    line-height: 2.7rem;
  }

  @include breakpoint('md') {
    font-size: 2rem;
    line-height: 3rem;
  }
}
</style>
