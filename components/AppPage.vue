<template>
  <div id="page-wrapper">
    <div class="page-header-container">
      <app-header />
    </div>
    <div class="page-content">
      <div class="page-content-inner">
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
}
</script>

<style lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.page-wrapper {
  .light-theme & {
    background-color: var(--light-color1);
    fill: var(--light-text-color1);
  }

  .dark-theme & {
    background-color: var(--dark-color1);
    fill: var(--dark-text-color1);
  }
}

.page-header-container {
  background-color: transparent;
  position: fixed;
  transition: background-color 100ms ease;
  transition-delay: 200ms;
  width: 100%;
  z-index: 1;

  .light-theme & {
    .page-enter &,
    .page-leave-to & {
      background-color: var(--light-color1);
    }
  }

  .dark-theme & {
    .page-enter &,
    .page-leave-to & {
      background-color: var(--dark-color1);
    }
  }
}

.page-content {
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

.page-content-inner {
  flex-grow: 1;
  position: relative;
}

.page-enter-active,
.page-leave-active {
  transition: opacity var(--page-transition-duration) ease !important;
}

.page-enter,
.page-leave-to {
  opacity: 0 !important;
}
</style>
