<template>
  <div id="app-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['currentRoute'],
}
</script>

<style lang="scss">
@import '@/assets/scss/_breakpoint.scss';

:root {
  --font-primary: 'Inter', Helvetica, Arial, sans-serif;
  --light-color1: #ffffff;
  --light-color2: #f3f3f3;
  --light-color3: #e6e7e7;
  --light-color4: #dadadb;
  --light-color5: #cdcecf;
  --light-color6: #c1c2c4;
  --light-focus: #1c2227;
  --dark-color1: #1c2227;
  --dark-color2: #20262b;
  --dark-color3: #242a2f;
  --dark-color4: #282e34;
  --dark-color5: #2c3238;
  --dark-color6: #2f373c;
  --dark-focus: rgb(185, 78, 247);
  --light-text-color1: rgba(0, 0, 0, 0.8);
  --light-text-color2: rgba(0, 0, 0, 0.5);
  --light-text-color3: rgba(0, 0, 0, 0.3);
  --dark-text-color1: rgba(255, 255, 255, 1);
  --dark-text-color2: rgba(255, 255, 255, 0.5);
  --dark-text-color3: rgba(255, 255, 255, 0.3);

  --page-transition-duration: 500ms;
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
  margin: 0;
  overflow-y: scroll;
  padding: 0;
  transition: background-color var(--page-transition-duration) ease;
  transition-delay: var(--page-transition-duration);

  &.no-scroll {
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-left-style: solid;
    border-left-width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }

  &.light-theme {
    background-color: var(--light-color1);

    &::-webkit-scrollbar-track {
      background-color: var(--light-color1);
      border-color: var(--light-color1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  &.dark-theme {
    background-color: var(--dark-color1);

    &::-webkit-scrollbar-track {
      background-color: var(--dark-color1);
      border-color: var(--dark-color1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
}

.markdown-body {
  color: var(--dark-text-color2);

  a,
  a:link,
  a:visited {
    color: var(--dark-text-color1);
    text-decoration: none;
  }
}
</style>
