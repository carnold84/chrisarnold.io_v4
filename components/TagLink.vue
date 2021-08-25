<template>
  <router-link v-slot="{ href }" :to="to">
    <a
      :class="[{ 'is-active': isActive }, 'tag-link']"
      :href="href"
      @click="$emit('click')"
    >
      <slot />
    </a>
  </router-link>
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
  padding: 0 5px 0 0;
  text-decoration: none;

  .light-theme & {
    color: var(--light-text-color2);

    &.is-active {
      color: var(--light-text-focus);
    }

    &:hover {
      color: var(--light-text-color1);
    }
  }

  .dark-theme & {
    color: var(--dark-text-color2);

    &.is-active {
      color: var(--dark-text-focus);
    }

    &:hover {
      color: var(--dark-text-color1);
    }
  }
}
</style>
