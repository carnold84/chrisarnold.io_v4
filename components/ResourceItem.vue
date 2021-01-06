<template>
  <a :href="item.link" class="resource-item" rel="noopener" target="_blank">
    <h3 class="resource-item-cell title">{{ item.name }}</h3>
    <div class="resource-item-cell tags">
      <nuxt-link
        v-for="tag in item.tags"
        :key="tag"
        class="resource-item-tag"
        :to="`/resources/${tag}`"
      >
        {{ formatTag(tag) }}
      </nuxt-link>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  methods: {
    formatTag(tag) {
      return tag.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.resource-item {
  align-self: start;
  background-color: var(--light-color1);
  border: 1px solid var(--light-color3);
  //box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.15);
  color: var(--light-text-color2);
  cursor: pointer;
  display: flex;
  padding: 20px 25px;
  position: relative;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: var(--light-text-color1);
  }
}

.resource-item-cell {
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  &.title {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: var(--title-font);
    line-height: 2.4rem;
    margin: 0;
  }

  &.tags {
    position: absolute;
    right: 40px;
    top: 23px;
  }
}

.resource-item-tag {
  color: var(--light-text-color2);
  font-size: 1.3rem;
  font-weight: 400;
  font-family: var(--title-font);
  line-height: 2rem;
  margin: 0 10px 0 0;
  text-decoration: none;

  &:hover {
    color: var(--light-text-color1);
  }
}
</style>
