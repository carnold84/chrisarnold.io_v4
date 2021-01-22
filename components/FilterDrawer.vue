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
          <span class="tag-icon">
            <svg
              class="add-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8388 6.69459L8.81799 18.7154L3.16113 13.0586L4.57113 11.6486L8.81799 15.8854L19.4288 5.28459L20.8388 6.69459Z"
                fill="#2E3A59"
              />
            </svg>
            <svg
              class="remove-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                fill="#2E3A59"
              />
            </svg>
          </span>
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
  --tag-anim-duration: 200ms;

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
  border: 2px solid var(--light-color3);
  border-radius: 20px;
  color: var(--light-text-color2);
  cursor: pointer;
  display: flex;
  font-family: var(--font-primary);
  font-size: 1.1rem;
  font-weight: 300;
  height: 40px;
  margin: var(--gutter);
  padding: 5px 20px;
  text-transform: uppercase;

  .tag-icon {
    display: flex;
    height: 24px;
    margin: 0 5px 0 0;
    transition: width var(--tag-anim-duration) ease;
    width: 0;
  }

  .add-icon,
  .remove-icon {
    opacity: 0;
    position: absolute;
    transition: opacity 300ms ease;
    transition-delay: 0ms;
  }

  &.is-active {
    border: 2px solid var(--light-focus);
    color: var(--light-text-color1);
  }

  &:hover {
    color: var(--light-text-color1);

    .tag-icon {
      width: 24px;
    }

    &.is-active {
      .remove-icon {
        opacity: 1;
        transition-delay: 100ms;
      }
    }

    &:not(.is-active) {
      .add-icon {
        opacity: 1;
        transition-delay: 100ms;
      }
    }
  }

  &:focus {
    outline: none;
  }
}
</style>
