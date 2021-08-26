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
  font-size: 4.2rem;
  font-weight: 300;
  line-height: 4.2rem;
  margin: 0 0 30px -4px;

  @include breakpoint('sm') {
    font-size: 5rem;
    line-height: 5rem;
  }

  @include breakpoint('md') {
    font-size: 5.4rem;
    line-height: 5.4rem;
  }
}
</style>
