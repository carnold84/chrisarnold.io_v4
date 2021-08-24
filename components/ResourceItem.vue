<template>
  <div class="resource-item">
    <h3 class="resource-item-cell title">
      <a :href="link" rel="noopener" target="_blank">{{ name }} </a>
    </h3>
    <div class="resource-item-tags">
      <button
        v-for="tag in tags"
        :key="tag"
        class="resource-item-tag"
        @click="onSelect(tag)"
      >
        {{ formatTag(tag) }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: {
    link: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    tags: {
      default: () => {
        return []
      },
      type: Array,
    },
  },
  methods: {
    formatTag(tag) {
      return tag.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    onSelect(tag) {
      this.$emit('select', tag)
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.resource-item {
  align-self: start;
  background-color: var(--light-color1);
  border: 1px solid var(--light-color2);
  //box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.15);
  color: var(--light-text-color2);
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: var(--light-text-color1);
  }

  @include breakpoint('sm') {
    flex-direction: row;
  }
}

.resource-item-cell {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;

  a {
    color: var(--light-text-color2);
    font-size: 2.5rem;
    font-weight: 400;
    font-family: var(--title-font);
    line-height: 3.5rem;
    margin: 0;
    padding: 20px 25px 10px;
    text-decoration: none;
    width: 100%;

    @include breakpoint('xs') {
      padding: 20px 25px;
    }

    &:hover {
      color: var(--light-text-color1);
    }
  }
}

.resource-item-tags {
  padding: 0 20px 20px;
  position: relative;

  @include breakpoint('sm') {
    padding: 0 25px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}

.resource-item-tag {
  background-color: transparent;
  border: none;
  color: var(--light-text-color2);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: var(--title-font);
  line-height: 2.5rem;
  margin: 0 10px 0 0;
  text-decoration: none;

  &:last-child {
    margin: 0;
  }

  @include breakpoint('md') {
    font-size: 1.8rem;
  }

  &:hover {
    color: var(--light-text-color1);
  }
}
</style>
