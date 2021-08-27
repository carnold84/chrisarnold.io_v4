<template>
  <div class="app-header">
    <div class="header">
      <div class="content-start">
        <div class="title">
          <nuxt-link aria-label="Home" class="home-link" to="/">
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
            height="16"
            viewBox="0 0 23 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.91843 0.125H22.7754V2.125H3.91843V0.125Z" />
            <rect x="8.63297" y="13.875" width="14.1428" height="2" />
            <rect x="0.775696" y="7" width="21.9999" height="2" />
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

.home-link {
  .light-theme & {
    fill: var(--light-text-color1);

    &:hover,
    &:focus {
      fill: var(--light-text-focus);
      outline: none;
    }
  }

  .dark-theme & {
    fill: var(--dark-text-color1);

    &:hover,
    &:focus {
      fill: var(--dark-text-focus);
      outline: none;
    }
  }
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
      fill: var(--light-text-focus);
    }

    &:focus {
      fill: var(--light-text-focus);
      outline: none;
    }
  }

  .dark-theme & {
    fill: var(--dark-text-color1);

    &:hover {
      fill: var(--dark-text-focus);
    }

    &:focus {
      fill: var(--dark-text-focus);
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
