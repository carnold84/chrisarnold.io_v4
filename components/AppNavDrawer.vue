<template>
  <app-drawer :is-open="isOpen" :on-close="onClose">
    <div class="wrapper">
      <div class="header">
        <button
          class="link"
          :title="items[0].label"
          @click="(evt) => onSelect(evt, items[0].path)"
        >
          <app-logo />
        </button>
      </div>
      <div class="content">
        <ul class="nav-list">
          <li v-for="item in items" :key="item.id" class="nav-item">
            <button
              class="link"
              :class="{ 'is-active': currentRoute === item.path }"
              :title="item.label"
              @click="(evt) => onSelect(evt, item.path)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="contact">
          <h3 class="label">Contact me.</h3>
          <a class="link email" :href="mailTo">{{ email }} </a>
        </div>
        <a
          class="link"
          href="https://github.com/carnold84"
          rel="noopener"
          target="blank"
        >
          <github-logo />
        </a>
      </div>
    </div>
  </app-drawer>
</template>

<script>
import AppDrawer from './AppDrawer.vue'
import AppLogo from './AppLogo.vue'
import GithubLogo from './GithubLogo.vue'

export default {
  name: 'AppNavDrawer',
  components: { AppDrawer, AppLogo, GithubLogo },
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    items: {
      required: true,
      type: Array,
    },
    onClose: {
      required: true,
      type: Function,
    },
  },
  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },
    email() {
      return process.env.NUXT_ENV_EMAIL
    },
    mailTo() {
      return `mailto: ${process.env.NUXT_ENV_EMAIL}`
    },
  },
  methods: {
    onSelect(evt, route) {
      this.onClose()
      this.$router.push(route)
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.wrapper {
  align-items: center;
  display: flex;
  fill: var(--light-text-color1);
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  width: 100%;
}

.content {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
}

.footer {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0;
  width: 100%;
}

.contact {
  display: flex;
  flex-direction: column;

  .label {
    font-weight: 300;
    font-size: 1.8rem;
    margin: 0 0 5px;
  }
}

.link {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--light-text-color1);
  cursor: pointer;
  display: flex;
  fill: var(--light-text-color1);
  text-decoration: none;

  span {
    margin: 0 0 1px 8px;
  }

  &:hover {
    color: var(--light-text-color2);
    fill: var(--light-text-color2);
  }
}

.nav-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0 27px;
  width: 100%;

  @include breakpoint('md') {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 60px 27px;
  }
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 40px;
    padding: 0;
    text-transform: uppercase;

    svg {
      fill: inherit;
      height: 28px;
      width: 28px;
    }

    @include breakpoint('md') {
      margin: 0;
    }

    &.is-active {
      color: var(--light-text-color1);
    }

    &:hover {
      color: var(--light-text-color1);
    }

    &:focus {
      outline: none;
    }
  }

  .slide-enter-active &,
  .slide-leave-active & {
    transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .slide-enter &,
  .slide-leave-to & {
    transform: translate3d(0, -40%, 0);
    transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
</style>
