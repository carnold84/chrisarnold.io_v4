<template>
  <div class="app-loading">
    <app-logo></app-logo>
    <p class="text">Loading</p>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo'

export default {
  name: 'AppLoading',
  components: { AppLogo },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.app-loading {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }

  .light-theme & {
    fill: var(--light-text-color2);
  }

  .dark-theme & {
    fill: var(--dark-text-color2);
  }
}

.text {
  font-size: 0.9rem;
  margin: 10px 0 0;

  .light-theme & {
    color: var(--light-text-color2);
  }

  .dark-theme & {
    color: var(--dark-text-color2);
  }
}
</style>
