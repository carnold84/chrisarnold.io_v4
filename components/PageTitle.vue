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
  font-weight: 200;
  line-height: 3rem;
  margin: 0 0 30px;

  @include breakpoint('sm') {
    font-size: 3.8rem;
    line-height: 3.8rem;
  }

  @include breakpoint('md') {
    font-size: 3.8rem;
    line-height: 3.8rem;
  }
}
</style>
