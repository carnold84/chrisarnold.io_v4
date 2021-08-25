<template>
  <div class="app-header">
    <div class="header">
      <div class="content-start">
        <div class="title">
          <nuxt-link aria-label="Home" to="/">
            <app-logo />
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
        <!-- <app-nav :items="menuItems" class="main-nav" /> -->
        <button
          aria-label="Open Menu"
          class="menu-btn"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.91843 1.875C3.91843 1.32272 4.36614 0.875 4.91843 0.875H21.7754C22.3277 0.875 22.7754 1.32272 22.7754 1.875V2.375C22.7754 2.92728 22.3277 3.375 21.7754 3.375H4.91843C4.36614 3.375 3.91843 2.92728 3.91843 2.375V1.875Z"
            />
            <rect x="8.63297" y="14.625" width="14.1428" height="2.5" rx="1" />
            <rect x="0.775696" y="7.75" width="21.9999" height="2.5" rx="1" />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg"></div>
    <app-nav-drawer
      :is-open="isMenuOpen"
      :items="menuItems"
      :on-close="onCloseMenu"
    />
  </div>
</template>

<script>
// import AppNav from './AppNav.vue'
import AppNavDrawer from './AppNavDrawer.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    // AppNav,
    AppNavDrawer,
  },
  props: {
    breadcrumb: {
      default() {
        return []
      },
      type: Array,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        {
          id: 'home',
          label: 'Home',
          path: '/',
        },
        {
          id: 'about',
          label: 'About',
          path: '/about',
        },
        {
          id: 'code',
          label: 'Code',
          path: '/code',
        },
        {
          id: 'notes',
          label: 'Notes',
          path: '/notes',
        },
        /* {
          id: 'resources',
          label: 'Resources',
          path: '/resources',
        }, */
      ],
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
  position: relative;
}

.header {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  padding: 30px;
  width: 100%;
  z-index: 2;

  @include breakpoint('xs') {
    padding: 40px;
  }

  @include breakpoint('lg') {
    padding: 60px 70px;
  }

  .light-theme & {
    fill: var(--light-text-color1);
  }

  .dark-theme & {
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
  font-size: 1.4rem;
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
}

.main-nav {
  display: none;

  @include breakpoint('md') {
    display: flex;
  }
}

.menu-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  .light-theme & {
    fill: var(--light-text-color1);

    &:hover {
      fill: var(--light-text-color2);
    }

    &:focus {
      fill: var(--light-focus);
      outline: none;
    }
  }

  .dark-theme & {
    fill: var(--dark-text-color1);

    &:hover {
      fill: var(--dark-text-color2);
    }

    &:focus {
      fill: var(--dark-focus);
      outline: none;
    }
  }

  /* @include breakpoint('md') {
    display: none;
  } */
}

.menu-icon {
  fill: inherit;
  height: 22px;
  width: 22px;
}

.bg {
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 0;

  .light-theme & {
    fill: var(--light-text-color1);
  }

  .dark-theme & {
    fill: var(--dark-text-color1);
  }
}
</style>
