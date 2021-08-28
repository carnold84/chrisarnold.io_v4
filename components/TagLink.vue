<template>
  <nuxt-link v-slot="{ href }" custom :to="to">
    <a
      :class="[{ 'is-active': isActive }, 'tag-link']"
      :href="href"
      @click="$emit('click')"
    >
      <slot />
    </a>
  </nuxt-link>
</template>

<script>
export default {
  name: 'TagLink',
  props: {
    isActive: {
      default: false,
      type: Boolean,
    },
    to: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.tag-link {
  font-size: 1.3rem;
  line-height: 1.3rem;
  text-decoration: none;

  .light-theme & {
    color: var(--light-text-color2);

    &:hover {
      color: var(--light-text-focus);
    }

    &.is-active {
      color: var(--light-text-focus);
    }
  }

  .dark-theme & {
    color: var(--dark-text-color2);

    &:hover {
      color: var(--dark-text-focus);
    }

    &.is-active {
      color: var(--dark-text-focus);
    }
  }
}
</style>
