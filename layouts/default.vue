<template>
  <div :class="themeClass" id="app-wrapper">
    <app-header />
    <div class="app-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },
  computed: {
    themeClass() {
      return `${this.$store.state.currentTheme}-theme`
    },
  },
  middleware: ['currentRoute'],
}
</script>

<style lang="scss">
:root {
  --font-primary: 'Inter', Helvetica, Arial, sans-serif;
  --light-color1: #ffffff;
  --dark-color1: #1c2227;
  --dark-color2: #20262b;
  --dark-color3: #232b2f;
  --light-text-color1: rgba(0, 0, 0, 0.8);
  --light-text-color2: rgba(0, 0, 0, 0.5);
  --light-text-color3: rgba(0, 0, 0, 0.3);
  --dark-text-color1: rgba(255, 255, 255, 1);
  --dark-text-color2: rgba(255, 255, 255, 0.5);
  --dark-text-color3: rgba(255, 255, 255, 0.3);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color: var(--light-text-color1);
  font-family: var(--font-primary);
  font-size: 14px;
  line-break: 22px;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--theme-color1);
  margin: 0;
  overflow-y: scroll;
  padding: 0;
  /* &::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-track {
      border-left-style: solid;
      border-left-width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
    }
    &.theme-1, &.theme-3 {
      &::-webkit-scrollbar-track {
        background-color: var(--theme-color2);
        border-color: var(--theme-color3);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--theme-color3);
      }
    }
    &.theme-2 {
      &::-webkit-scrollbar-track {
        background-color: var(--theme-color-alt2);
        border-color: var(--theme-color-alt3);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--theme-color-alt3);
      }
    } */
}
</style>
