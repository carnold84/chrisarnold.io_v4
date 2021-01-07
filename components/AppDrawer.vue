<template>
  <portal>
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <div v-if="isOpen" class="app-drawer">
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
          <slot></slot>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  name: 'AppDrawer',
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
  methods: {
    beforeEnter() {
      document.querySelector('body').classList.add('no-scroll')
    },
    afterLeave() {
      document.querySelector('body').classList.remove('no-scroll')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.app-drawer {
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
  padding: 0 60px;
}
</style>
