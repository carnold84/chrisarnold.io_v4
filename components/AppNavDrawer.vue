<template>
  <app-drawer :is-open="isOpen" :on-close="onClose">
    <ul class="nav-list">
      <li class="nav-item">
        <button
          class="link"
          :class="{ 'is-active': currentRoute === '/' }"
          title="Home"
          @click="(evt) => onSelect(evt, '/')"
        >
          Home
        </button>
      </li>
      <li class="nav-item">
        <button
          class="link"
          :class="{ 'is-active': currentRoute === '/code' }"
          title="Code"
          @click="(evt) => onSelect(evt, 'code')"
        >
          Code
        </button>
      </li>
      <li class="nav-item">
        <button
          class="link"
          :class="{ 'is-active': currentRoute === '/resources' }"
          title="Resources"
          @click="(evt) => onSelect(evt, 'resources')"
        >
          Resources
        </button>
      </li>
    </ul>
  </app-drawer>
</template>

<script>
import AppDrawer from './AppDrawer.vue'

export default {
  name: 'AppNavDrawer',
  components: { AppDrawer },
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
  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },
  },
  methods: {
    onSelect(evt, route) {
      this.onClose()
      this.$router.push(route)
    },
  },
}
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0 0 27px;
  width: 100%;
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 2.9rem;
    font-weight: 300;
    padding: 0;
    text-transform: uppercase;

    &.is-active {
      color: var(--light-text-color1);
    }

    &:hover {
      color: var(--light-text-color1);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
