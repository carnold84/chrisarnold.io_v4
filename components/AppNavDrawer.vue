<template>
  <app-drawer :is-open="isOpen" :on-close="onClose">
    <ul class="nav-list">
      <li v-for="item in items" :key="item.id" class="nav-item">
        <button
          class="link"
          :class="{ 'is-active': currentRoute === item.path }"
          :title="item.label"
          @click="(evt) => onSelect(evt, item.path)"
        >
          {{ item.label }}
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
    items: {
      required: true,
      type: Array,
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
@import '@/assets/scss/_breakpoint.scss';

.nav-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0 27px;
  width: 100%;

  @include breakpoint('md') {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 3rem;
    font-weight: 300;
    margin: 0 0 40px;
    padding: 0;
    text-transform: uppercase;

    @include breakpoint('md') {
      margin: 0;
    }

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

  .slide-enter-active &,
  .slide-leave-active & {
    transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .slide-enter &,
  .slide-leave-to & {
    transform: translate3d(0, -40%, 0);
    transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
</style>
