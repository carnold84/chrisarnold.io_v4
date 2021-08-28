<template>
  <div class="meta-data">
    <p v-if="date" class="meta-data-date">{{ formattedDate }}</p>
    <span v-if="tags.length > 0" class="meta-data-divider">•</span>
    <div v-if="tags.length > 0" class="meta-data-tags">
      <tag-link
        v-for="tag of formattedTags"
        :key="tag.id"
        :to="tag.to"
        @click.native.prevent="$emit('tag-clicked', tag)"
      >
        #{{ tag.label }}
      </tag-link>
    </div>
  </div>
</template>

<script>
import TagLink from './TagLink.vue'
import { formatDate } from '~/utils/date'

export default {
  name: 'MetaData',
  components: { TagLink },
  props: {
    date: {
      default: undefined,
      type: String,
    },
    tagsPath: {
      default: undefined,
      type: String,
    },
    tags: {
      default() {
        return []
      },
      type: String,
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.date)
    },
    formattedTags() {
      return this.tags.split(', ').map((tag) => {
        return {
          id: tag,
          label: tag,
          to: { path: this.tagsPath, query: { tags: tag } },
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.meta-data {
  display: flex;
}

.meta-data-date {
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

.meta-data-divider {
  color: var(--light-text-color3);
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.3rem;
  margin: 0 7px;
}

.meta-data-tags {
  display: inline-flex;

  & > * {
    margin: 0 5px 0 0;
  }
}
</style>
