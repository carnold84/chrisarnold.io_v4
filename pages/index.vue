<template>
  <app-page :breadcrumb="breadcrumb" theme="dark">
    <div class="wrapper">
      <div class="content">
        <section class="section">
          <h1 class="heading">{{ content.title }}</h1>
          <p class="paragraph">{{ content.body }}</p>
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
    content() {
      return this.$store.state.home
    },
  },
  meta: { theme: 'dark' },
  transition: {
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

.sub-heading {
  color: var(--dark-text-color1);
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin: 0 0 25px;

  @include breakpoint('sm') {
    font-size: 5.2vw;
    line-height: 5.2vw;
  }
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
