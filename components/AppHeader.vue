<template>
  <div class="app-header">
    <div class="content-start">
      <div class="title">
        <nuxt-link to="/">
          <AppLogo />
        </nuxt-link>
        <div v-if="breadcrumb.length > 0" class="breadcrumbs">
          <div
            v-for="item in breadcrumb"
            :key="item.id"
            class="breadcrumb-text"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
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
  computed: {
    breadcrumb() {
      return this.$store.state.breadcrumb
    },
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
  padding: 40px 50px;
  transition: fill 500ms;
  width: 100%;

  @include breakpoint('lg') {
    padding: 60px 70px;
  }

  .light-theme & {
    background-color: var(--light-color1);
    fill: var(--light-text-color1);
  }

  .dark-theme & {
    background-color: var(--dark-color1);
    fill: var(--dark-text-color1);
  }
}

.content-start {
  display: block;
  height: 27px;
  margin: 0 30px 0 0;
  overflow: hidden;
}

.title {
  display: flex;
}

.breadcrumbs {
  align-items: center;
  display: flex;
  margin: 0 0 0 20px;
  overflow: hidden;
}

.breadcrumb-text {
  font-family: var(--title-font), Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  margin: 0 10px 0 0;
  text-transform: uppercase;
  white-space: nowrap;

  &:after {
    content: '/';
    margin: 0 0 0 5px;
  }

  &:last-child {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:after {
      content: '';
      margin: 0;
    }
  }

  .light-theme & {
    color: var(--light-text-color2);

    &:last-child {
      color: var(--light-text-color1);
    }
  }

  .dark-theme & {
    color: var(--dark-text-color2);

    &:last-child {
      color: var(--dark-text-color1);
    }
  }
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

    &:focus {
      fill: var(--light-focus);
      outline: none;
    }
  }

  .dark-theme & {
    fill: var(--dark-text-color2);

    &:hover {
      fill: var(--dark-text-color1);
    }

    &:focus {
      fill: var(--dark-focus);
      outline: none;
    }
  }
}

.menu-icon {
  fill: inherit;
  height: 26px;
  width: 26px;
}
</style>
