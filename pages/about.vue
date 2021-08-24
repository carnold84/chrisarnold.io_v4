<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="data === undefined"
    theme="light"
  >
    <div v-if="data !== undefined" class="about">
      <page-title class="heading" style="margin: 0 0 25px">{{
        data.title
      }}</page-title>
      <div class="content">
        <nuxt-content :document="data" />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    AppPage,
    PageTitle,
  },
  async asyncData({ $content }) {
    const data = await $content('about').fetch()

    return {
      data,
    }
  },
  data() {
    return {
      breadcrumb: [],
      theme: 'light',
    }
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
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.about {
  display: flex;
  flex-direction: column;
  max-width: 960px;
  opacity: 1;
  padding: 0;
  position: relative;

  @include breakpoint('sm') {
    padding: 40px 0 0;
  }
}

.heading {
  color: var(--light-text-color1);
}

.content {
  color: var(--light-text-color1);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8rem;
  margin: 0 0 1.8rem;
  text-align: justify;

  &::v-deep p:first-child {
    margin: 0;
  }

  @include breakpoint('md') {
    font-size: 1.3rem;
    line-height: 2.2rem;
    margin: 0 0 2.1rem;
  }
}
</style>
