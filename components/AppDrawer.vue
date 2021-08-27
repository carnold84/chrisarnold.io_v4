<template>
  <portal>
    <!-- <transition
      name="fade"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    > -->
    <transition
      name="slide"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <div v-if="isOpen" class="app-drawer">
        <header class="header">
          <div class="header-content">
            <slot name="header-content" />
          </div>
          <button class="close-btn" @click="onClose">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.29046 7.77264L2.21939 0.701569L0.805176 2.11578L7.87624 9.18685L1.17888 15.8842L2.59309 17.2984L9.29046 10.6011L15.9878 17.2984L17.402 15.8842L10.7047 9.18685L17.7757 2.11578L16.3615 0.701569L9.29046 7.77264Z"
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

  //background-color: rgba(255, 255, 255, 0.8);
  background-color: #ffffff;
  display: flex;
  //backdrop-filter: saturate(180%) blur(10px);
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @include breakpoint('xs') {
    padding: 40px;
  }

  @include breakpoint('lg') {
    padding: 60px 70px;
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition: backdrop-filter var(--duration) ease, opacity var(--duration) ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: backdrop-filter var(--duration) ease, opacity var(--duration) ease;
} */

.slide-enter-active,
.slide-leave-active {
  transition: transform var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(0, -100%, 0);
  transition: transform var(--duration) cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.header {
  align-items: center;
  display: flex;
  height: 27px;
  justify-content: space-between;
  width: 100%;
  z-index: 10;

  @include breakpoint('xs') {
    right: 40px;
    top: 40px;
  }

  @include breakpoint('lg') {
    right: 70px;
    top: 60px;
  }
}

.close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  fill: var(--light-text-color2);
  padding: 0;

  &:hover,
  &:focus {
    fill: var(--light-text-focus);
    outline: none;
  }
}

.close-icon {
  fill: inherit;
  height: 22px;
  width: 22px;
}

.content {
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding: 0;
}
</style>
