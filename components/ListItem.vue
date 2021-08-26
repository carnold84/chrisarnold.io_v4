<template>
  <div class="list-item">
    <router-link v-if="to" :to="to" class="list-item-text">
      <h2 class="list-item-title">{{ title }}</h2>
      <p class="list-item-sub-title">{{ subTitle }}</p>
    </router-link>
    <div v-else class="list-item-text">
      <h2 class="list-item-title">{{ title }}</h2>
      <p class="list-item-sub-title">{{ subTitle }}</p>
    </div>
    <div class="list-item-tags">
      <tag-link
        v-for="tag of tags"
        :key="tag.id"
        :to="tag.to"
        @click.native.prevent="tag.onClick"
      >
        #{{ tag.label }}
      </tag-link>
    </div>
  </div>
</template>

<script>
import TagLink from './TagLink.vue'
export default {
  name: 'ListItem',
  components: { TagLink },
  props: {
    number: {
      required: true,
      type: Number,
    },
    subTitle: {
      default: undefined,
      type: String,
    },
    tags: {
      default: undefined,
      type: Array,
    },
    title: {
      required: true,
      type: String,
    },
    to: {
      default: undefined,
      type: [Object, String],
    },
  },
  computed: {
    paddedNumber() {
      const number = this.number
      return number < 10 ? `0${number}` : number
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.list-item {
  --duration: 500ms;

  color: var(--light-text-color2);
  display: flex;
  margin: 0 0 30px;
  transition: opacity var(--duration) ease;
  width: 100%;

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}

.list-item-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 10px 0 0;
  text-decoration: none;
}

.list-item-title {
  color: var(--light-text-color1);
  font-family: var(--title-font);
  font-size: 3.4rem;
  font-weight: 300;
  line-height: 4.4rem;
  margin: 0;
  width: 100%;
}

.list-item-sub-title {
  color: var(--light-text-color2);
  flex-grow: 1;
  flex-shrink: 0;
  font-family: var(--title-font);
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.4rem;
  margin: 0;
  width: 100%;
}

.list-item-tags {
  align-items: center;
  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0 0 10px;
  }
}
</style>
