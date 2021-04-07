<template>
  <h1 class="page-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'PageTitle',
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.page-title {
  color: inherit;
  font-size: 3rem;
  font-weight: 400;
  line-height: 3rem;
  margin: 0;

  @include breakpoint('sm') {
    font-size: 4rem;
    line-height: 4rem;
  }

  @include breakpoint('md') {
    font-size: 5rem;
    line-height: 5rem;
  }
}
</style>
