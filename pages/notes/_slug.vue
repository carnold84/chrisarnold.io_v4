<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="data === undefined"
    theme="light"
  >
    <div class="note-wrapper">
      <router-link v-slot="{ href }" class="note-back-btn" to="/notes">
        <a :href="href" @click.prevent="onBackClick">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 8.5L2 12L5.5 15.5L6.207 14.793L3.914 12.5H22V11.5H3.914L6.207 9.207L5.5 8.5Z"
            />
          </svg>
          Notes
        </a>
      </router-link>
      <page-title style="margin: 0 0 10px">{{ data.title }}</page-title>
      <div class="note-meta">
        <p class="note-published">{{ formatDate(data.publishedAt) }}</p>
        <div class="note-tags">
          <tag-link
            v-for="tag of data.tags.split(', ')"
            :key="tag"
            :to="{ query: { tags: tag } }"
            @click.native.prevent="onTagClick(tag)"
          >
            #{{ tag }}
          </tag-link>
        </div>
      </div>
      <div class="note-content">
        <nuxt-content :document="data" />
      </div>
    </div>
  </app-page>
</template>

<script>
import { formatDate } from '~/utils/date'
import AppPage from '~/components/AppPage.vue'
import TagLink from '~/components/TagLink.vue'

export default {
  components: {
    AppPage,
    TagLink,
  },
  async asyncData({ $content, params }) {
    const data = await $content('notes')
      .only(['body', 'description', 'publishedAt', 'tags', 'title'])
      .where({ slug: params.slug })
      .fetch()

    return {
      data: data[0],
    }
  },
  data() {
    return {
      breadcrumb: [],
    }
  },
  methods: {
    formatDate(date) {
      return formatDate(date)
    },
    onBackClick() {
      this.$router.go(-1)
    },
    onTagClick(tag) {
      this.$router.push({ path: '/notes', query: { tags: tag } })
    },
  },
  meta: { theme: 'light' },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.description,
        },
      ],
      title: `${this.data.title} - ChrisArnold.io`,
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

.note-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  opacity: 1;
  position: relative;
  width: 100%;

  @include breakpoint('sm') {
    padding: 40px 0 0;
  }
}

.note-back-btn {
  align-items: center;
  color: var(--light-text-color2);
  display: inline-flex;
  fill: var(--light-text-color3);
  font-size: 1.6rem;
  font-weight: 300;
  margin: 0 0 5px;
  text-decoration: none;

  &:hover {
    color: var(--light-text-focus);
    fill: var(--light-text-focus);
  }

  svg {
    height: 26px;
    margin: 0 5px 0 0;
    width: 26px;
  }
}

.note-meta {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 10px;
}

.note-published {
  color: var(--light-text-color2);
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0 20px 0 0;
}

.note-tags {
  display: flex;
}

.note-content {
  display: flex;
  flex-direction: column;
  width: 100%;

  ::v-deep p {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
}

.notes-tags {
  margin: 0 0 30px;
}
</style>
