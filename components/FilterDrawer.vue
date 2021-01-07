<template>
  <app-drawer :is-open="isOpen" :on-close="onClose"> {tags} </app-drawer>
</template>

<script>
import AppDrawer from './AppDrawer.vue'

export default {
  name: 'FilterDrawer',
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
    onSelect: {
      required: true,
      type: Function,
    },
  },
  data() {
    return { selectedTags: [] }
  },
  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },
  },
  methods: {
    onSelectClick(evt, route) {
      this.onClose()
      this.onSelect({ selectedTags: this.selectedTags })
    },
  },
}
</script>

<style scoped lang="scss">
.tag-list {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0 60px 27px;
  width: 100%;
}

.tag-item {
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: var(--light-text-color2);
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 2.9rem;
  font-weight: 300;
  padding: 5px;
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
</style>
