<template>
  <div
    id="app-page"
    :class="{
      'light-theme': theme === 'light',
      'dark-theme': theme === 'dark',
    }"
  >
    <div class="app-page-header-container">
      <app-header :breadcrumb="breadcrumb" />
    </div>
    <div class="app-page-content">
      <div class="app-page-content-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  name: 'AppPage',
  components: {
    AppHeader,
  },
  props: {
    breadcrumb: {
      default() {
        return []
      },
      type: Array,
    },
    theme: {
      default() {
        return 'light'
      },
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_breakpoint.scss';

#app-page {
  min-height: 100%;
  position: absolute;
  width: 100%;

  &.light-theme {
    background-color: var(--light-color1);
    fill: var(--light-text-color1);
  }

  &.dark-theme {
    background-color: var(--dark-color1);
    fill: var(--dark-text-color1);
  }
}

.app-page-header-container {
  position: fixed;
  width: 100%;
  z-index: 1;

  .light-theme & {
    background-color: var(--light-color1);
  }

  .dark-theme & {
    background-color: var(--dark-color1);
  }

  .page-enter-active &,
  .page-leave-active & {
    background-color: transparent;
  }
}

.app-page-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 155px 40px 40px;
  position: relative;
  z-index: 0;

  @include breakpoint('md') {
    padding: 155px 110px 40px;
  }

  @include breakpoint('lg') {
    padding: 155px 140px 120px;
  }
}

.app-page-content-inner {
  flex-grow: 1;
  position: relative;
}
</style>
