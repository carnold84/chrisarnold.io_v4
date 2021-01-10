<template>
  <app-drawer :is-open="isOpen" :on-close="onClose">
    <div class="filter-drawer">
      <h3 class="filters-title">What topics are you interested in?</h3>
      <ul class="tag-list">
        <li
          v-for="tag of tags"
          :key="tag"
          class="tag-item"
          :class="{ 'is-active': selectedTags.includes(tag) }"
          @click="(evt) => onSelectClick(evt, tag)"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </app-drawer>
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
    tags: {
      required: true,
      type: Array,
    },
  },
  data() {
    return { selectedTags: this.tags }
  },
  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },
  },
  methods: {
    onSelectClick(evt, tag) {
      evt.preventDefault()
      this.onClose()
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((element) => {
          return element !== tag
        })
      } else {
        this.selectedTags.push(tag)
      }
      console.log(this.selectedTags)
      this.onSelect({ selectedTags: this.selectedTags })
    },
  },
}
</script>

<style scoped lang="scss">
.filter-drawer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.filters-title {
  margin: 0;
  text-align: center;
}

.tag-list {
  --gutter: 5px;

  display: flex;
  list-style: none;
  justify-content: center;
  margin: -var(--gutter);
  padding: 0;
  width: 100%;
}

.tag-item {
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--light-color2);
  border-radius: 20px;
  color: var(--light-text-color2);
  cursor: pointer;
  display: flex;
  font-family: var(--font-primary);
  font-size: 1.3rem;
  font-weight: 300;
  height: 40px;
  margin: var(--gutter);
  padding: 5px 20px;
  text-transform: uppercase;

  &.is-active {
    background-color: var(--light-focus);
    border: 1px solid var(--light-focus);
    color: #ffffff;
  }

  &:hover {
    color: var(--light-text-color1);
  }

  &:focus {
    outline: none;
  }
}
</style>
