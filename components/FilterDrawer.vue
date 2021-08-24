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
    selectedTags: {
      required: true,
      type: Array,
    },
    tags: {
      required: true,
      type: Array,
    },
  },
  computed: {
    currentRoute() {
      return this.$store.state.currentRoute
    },
  },
  methods: {
    onSelectClick(evt, tag) {
      evt.preventDefault()

      let selectedTags = []

      if (this.selectedTags.includes(tag)) {
        selectedTags = this.selectedTags.filter((element) => {
          return element !== tag
        })
      } else {
        selectedTags = [...this.selectedTags, tag]
      }

      this.onSelect({ selectedTags })
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
  flex-wrap: wrap;
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
  fill: var(--light-text-color1);
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-weight: 300;
  height: 40px;
  margin: var(--gutter);
  padding: 5px 20px;
  text-transform: uppercase;
  transition: background-color var(--tag-anim-duration) ease-out,
    border-color var(--tag-anim-duration) ease-out;

  .tag-icon {
    display: flex;
    height: 24px;
    margin: 0 5px 0 0;
    transition: width var(--tag-anim-duration) ease;
    width: 0;
  }

  .add-icon {
    fill: inherit;
    opacity: 0;
    position: absolute;
    transition: opacity 300ms ease;
    transition-delay: 0ms;
  }

  &.is-active {
    background-color: var(--light-focus);
    border: 2px solid var(--light-focus);
    color: var(--dark-text-color1);
    fill: var(--light-text-focus);

    .tag-icon {
      width: 24px;
    }

    .add-icon {
      opacity: 1;
      transition-delay: 100ms;
    }
  }

  &:hover {
    color: var(--light-text-color1);

    .tag-icon {
      width: 24px;
    }

    &.is-active {
      color: var(--dark-text-color1);
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
