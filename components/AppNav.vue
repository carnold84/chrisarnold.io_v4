<template>
  <transition name="fade">
    <div v-if="isOpen" class="app-nav">
      <header class="header">
        <button class="close-btn" @click="onClose">
          <svg
            class="close-icon"
            height="27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 27 27"
            width="27"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.41421 0L0 1.41421L12.0208 13.435L0 25.4558L1.41421 26.8701L13.435 14.8492L25.4558 26.8701L26.8701 25.4558L14.8492 13.435L26.8701 1.41421L25.4558 0L13.435 12.0208L1.41421 0Z"
            />
          </svg>
        </button>
      </header>
      <div class="content">
        <ul class="nav-list">
          <li class="nav-item">
            <button
              class="link"
              :class="{ 'is-active': currentRoute === '/' }"
              title="Home"
              @click="(evt) => onSelect(evt, '/')"
            >
              Home
            </button>
          </li>
          <li class="nav-item">
            <button
              class="link"
              :class="{ 'is-active': currentRoute === '/code' }"
              title="Code"
              @click="(evt) => onSelect(evt, 'code')"
            >
              Code
            </button>
          </li>
          <li class="nav-item">
            <button
              class="link"
              :class="{ 'is-active': currentRoute === '/resources' }"
              title="Resources"
              @click="(evt) => onSelect(evt, 'resources')"
            >
              Resources
            </button>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    isOpen: {
      default: false,
      type: Boolean,
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

.app-nav {
  --duration: 500ms;

  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  backdrop-filter: saturate(180%) blur(10px);
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 40px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @include breakpoint('lg') {
    padding: 60px 70px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: backdrop-filter var(--duration) ease, opacity var(--duration) ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: backdrop-filter var(--duration) ease, opacity var(--duration) ease;
}

.header {
  display: flex;
  height: 27px;
  justify-content: flex-end;
  width: 100%;
}

.close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  fill: var(--light-text-color2);
  padding: 0;

  &:hover {
    fill: var(--light-text-color1);
  }

  &:focus {
    fill: var(--light-focus);
    outline: none;
  }
}

.close-icon {
  fill: inherit;
  height: 26px;
  width: 26px;
}

.content {
  align-items: center;
  display: flex;
  flex-grow: 1;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0 60px 27px;
  width: 100%;
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 2.9rem;
    font-weight: 300;
    padding: 0;
    text-transform: uppercase;

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
}
</style>
