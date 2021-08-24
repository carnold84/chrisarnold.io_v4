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
          <button class="close-btn" @click="onClose">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.93866 1.16685C2.54814 0.776323 1.91497 0.776324 1.52445 1.16685L1.04082 1.65048C0.650293 2.041 0.650294 2.67417 1.04082 3.06469L6.97613 9.00001L1.04083 14.9353C0.650308 15.3258 0.650308 15.959 1.04083 16.3495L1.52446 16.8331C1.91499 17.2237 2.54815 17.2237 2.93868 16.8331L8.87398 10.8978L14.8092 16.8331C15.1998 17.2236 15.8329 17.2236 16.2235 16.8331L16.7071 16.3495C17.0976 15.959 17.0976 15.3258 16.7071 14.9353L10.7718 9.00001L16.7071 3.06472C17.0976 2.67419 17.0976 2.04103 16.7071 1.6505L16.2235 1.16687C15.833 0.77635 15.1998 0.77635 14.8093 1.16687L8.87398 7.10216L2.93866 1.16685Z"
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
  display: flex;
  height: 27px;
  justify-content: flex-end;
  position: absolute;
  right: 30px;
  top: 30px;
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
