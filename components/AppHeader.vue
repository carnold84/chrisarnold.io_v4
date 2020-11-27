<template>
  <div class="app-header">
    <div class="content-start">
      <nuxt-link to="/">
        <AppLogo />
      </nuxt-link>
    </div>
    <div class="content-end">
      <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
        <svg
          class="menu-icon"
          fill="none"
          height="26"
          viewBox="0 0 34 26"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
        >
          <rect x="11" width="23" height="2" />
          <rect x="11" y="24" width="23" height="2" />
          <rect y="12" width="34" height="2" />
        </svg>
      </button>
    </div>
    <app-nav :is-open="isMenuOpen" :on-close="onCloseMenu" />
  </div>
</template>

<script>
import AppNav from './AppNav.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppNav,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    onCloseMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.app-header {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  padding: 40px;
  position: fixed;
  width: 100%;
  z-index: 1;

  .light-theme & {
    fill: var(--light-text-color1);
  }

  .dark-theme & {
    fill: var(--dark-text-color1);
  }

  @include breakpoint('sm') {
    padding: 60px;
  }
}

.content-start {
  display: block;
  height: 27px;
}

.content-end {
  display: block;
  height: 27px;
}

.menu-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  .light-theme & {
    fill: var(--light-text-color2);

    &:hover {
      fill: var(--light-text-color1);
    }
  }

  .dark-theme & {
    fill: var(--dark-text-color2);

    &:hover {
      fill: var(--dark-text-color1);
    }
  }
}

.menu-icon {
  fill: inherit;
}
</style>
