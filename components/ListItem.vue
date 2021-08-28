<template>
  <div class="list-item">
    <nuxt-link v-if="to" :to="to" class="list-item-text">
      <h2 class="list-item-title">{{ title }}</h2>
    </nuxt-link>
    <div v-else class="list-item-text">
      <h2 class="list-item-title">{{ title }}</h2>
    </div>
    <meta-data
      v-if="meta"
      :date="meta.date"
      :tags="meta.tags"
      :tags-path="meta.tagsPath"
      @tag-clicked="(tag) => $emit('tag-clicked', tag)"
    />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    number: {
      required: true,
      type: Number,
    },
    meta: {
      default() {
        return undefined
      },
      type: Object,
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

  border-bottom: 1px solid var(--light-color3);
  display: flex;
  flex-direction: column;
  padding: 10px 0 18px;
  text-decoration: none;
  transition: opacity var(--duration) ease;
  width: 100%;

  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}

.list-item-text {
  text-decoration: none;
}

.list-item-title {
  font-family: var(--title-font);
  font-size: 3.4rem;
  font-weight: 300;
  line-height: 4.4rem;
  margin: 0 0 5px;
  width: 100%;

  .light-theme & {
    color: var(--light-text-color1);

    &:hover {
      color: var(--light-text-focus);
    }
  }

  .dark-theme & {
    color: var(--dark-text-color1);

    &:hover {
      color: var(--dark-text-focus);
    }
  }
}

.list-item-sub-title {
  font-family: var(--title-font);
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.3rem;
  margin: 0;

  .light-theme & {
    color: var(--light-text-color2);
  }

  .dark-theme & {
    color: var(--dark-text-color2);
  }
}

.list-item-meta {
  display: flex;
}

.list-item-meta-divider {
  color: var(--light-text-color3);
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.3rem;
  margin: 0 7px;
}

.list-item-tags {
  display: inline-flex;

  & > * {
    margin: 0 5px 0 0;
  }
}
</style>
