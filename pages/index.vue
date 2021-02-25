<template>
  <app-page :breadcrumb="breadcrumb" theme="dark">
    <div v-if="home === undefined">Loading...</div>
    <div v-else class="wrapper">
      <div class="content">
        <section class="section">
          <h1 class="heading">{{ home.title }}</h1>
          <span class="home-content" v-html="home.content"></span>
        </section>
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
export default {
  components: { AppPage },
  data() {
    return {
      breadcrumb: [],
    }
  },
  computed: {
    home() {
      return this.$store.state.home
    },
  },
  meta: { theme: 'dark' },
  transition: {
    afterEnter() {
      if (this.home === undefined) {
        this.$store.dispatch('getHome')
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
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 960px;
}

.heading {
  color: var(--dark-text-color1);
  font-size: 6rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 25px;
}

.paragraph {
  color: var(--dark-text-color2);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 0 0 10px;
  text-align: justify;

  @include breakpoint('sm') {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @include breakpoint('md') {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
}

.section {
  margin: 0 0 40px;
}
</style>

<style lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.home-content p {
  color: var(--dark-text-color2);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 0 0 10px;
  text-align: justify;

  @include breakpoint('sm') {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @include breakpoint('md') {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
}
</style>
