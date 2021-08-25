<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="data === undefined"
    theme="light"
  >
    <div class="notes-wrapper">
      <page-title>Notes.</page-title>
      <div class="notes-tags">
        <tag-link
          :is-active="activeTags.length === 0"
          :to="{ query: {} }"
          @click.native.prevent="onTagClick()"
        >
          #All
        </tag-link>
        <tag-link
          v-for="tag of tags"
          :key="tag"
          :is-active="activeTags.includes(tag)"
          :to="{ query: { tags: getTagsString(tag) } }"
          @click.native.prevent="onTagClick(tag)"
        >
          #{{ tag }}
        </tag-link>
      </div>
      <div class="notes-content">
        <template v-for="(note, index) in data">
          <list-item
            v-if="getIsActive(note)"
            :key="note.slug"
            :number="index + 1"
            :sub-title="formatDate(note.publishedAt)"
            :tags="getNoteTags(note)"
            :title="note.title"
          />
        </template>
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import ListItem from '~/components/ListItem.vue'
import TagLink from '~/components/TagLink.vue'

export default {
  components: {
    AppPage,
    ListItem,
    TagLink,
  },
  async asyncData({ $content }) {
    const data = await $content('notes')
      .only(['path', 'publishedAt', 'slug', 'tags', 'title'])
      .sortBy('publishedAt', 'desc')
      .fetch()

    let tags = data.reduce((prev, current) => {
      return [...prev, ...current.tags.split(', ')]
    }, [])
    // dedupe
    tags = [...new Set(tags)]

    return {
      data,
      tags,
    }
  },
  data() {
    return {
      activeTags: this.getQueryTags(),
      breadcrumb: [],
    }
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat([], {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: '2-digit',
      }).format(new Date(date))
    },
    getIsActive(note) {
      if (this.activeTags.length === 0) {
        return true
      }

      return this.activeTags.some((element) => {
        return note.tags.split(', ').includes(element)
      })
    },
    getNoteTags(note) {
      return note.tags.split(', ').map((tag) => {
        return {
          id: tag,
          label: tag,
          onClick: () => this.onTagClick(tag),
          to: { query: { tags: this.getTagsString(tag) } },
        }
      })
    },
    getQueryTags() {
      const tagsQuery = this.$route.query.tags

      if (tagsQuery) {
        return tagsQuery.split(',')
      }

      return []
    },
    getTagsString(tag) {
      const tagsQuery = this.$route.query.tags

      if (tagsQuery) {
        if (tagsQuery.includes(tag)) {
          return tagsQuery
        }
        return `${tagsQuery},${tag}`
      }

      return tag
    },
    onTagClick(tag) {
      let activeTags = this.activeTags

      if (tag) {
        if (activeTags.includes(tag)) {
          activeTags = activeTags.filter((element) => {
            return element !== tag
          })
        } else {
          activeTags.push(tag)
        }
      } else {
        activeTags = []
      }

      if (activeTags.length === 0) {
        this.$router.push({ query: {} })
      } else {
        this.$router.push({ query: { tags: activeTags.join(',') } })
      }

      this.activeTags = activeTags
    },
  },
  meta: { theme: 'light' },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Code snippets, ideas and musings about HTML, CSS, Javascript, React, Vue, Angular and more.',
        },
      ],
      title: 'Notes - ChrisArnold.io',
    }
  },
  transition: {
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.notes-wrapper {
  display: flex;
  flex-direction: column;
  opacity: 1;
  position: relative;
  width: 100%;

  @include breakpoint('sm') {
    padding: 40px 0 0;
  }
}

.notes-content {
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    margin: 0 0 10px;
  }

  @include breakpoint('sm') {
    & > * {
      margin: 0 0 20px;
    }
  }

  @include breakpoint('md') {
    & > * {
      margin: 0 0 30px;
    }
  }
}

.notes-tags {
  margin: 0 0 30px;
}

.notes-tag {
  color: var(--light-text-color2);
  font-size: 1.3rem;
  padding: 0 5px 0 0;
  text-decoration: none;

  &.is-active {
    color: var(--light-text-focus);
  }
}
</style>
