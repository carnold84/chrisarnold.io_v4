<template>
  <ul class="nav-list">
    <li v-for="item in items" :key="item.id" class="nav-item">
      <nuxt-link
        active-class="is-active"
        class="link"
        :exact="item.path === '/'"
        :to="item.path"
      >
        {{ item.label }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0 25px 0 0;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;

    .light-theme & {
      color: var(--light-text-color2);

      &.is-active {
        color: var(--light-text-color1);
      }

      &:hover {
        color: var(--light-text-color1);
      }
    }

    .dark-theme & {
      color: var(--dark-text-color2);

      &.is-active {
        color: var(--dark-text-color1);
      }

      &:hover {
        color: var(--dark-text-color1);
      }
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
