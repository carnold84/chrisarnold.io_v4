<template>
  <app-page
    :breadcrumb="breadcrumb"
    :is-loading="data === undefined"
    theme="light"
  >
    <div class="note-wrapper">
      <nuxt-link v-slot="{ href }" class="note-back-btn" to="/notes">
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
      </nuxt-link>
      <page-title style="margin-bottom: 15px">{{ data.title }}</page-title>
      <meta-data
        :date="data.publishedAt"
        :tags="data.tags"
        style="margin: 0 0 30px"
        tags-path="/notes"
        @tag-clicked="onTagClick"
      />
      <div class="note-content">
        <nuxt-content :document="data" />
      </div>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'
import MetaData from '~/components/MetaData.vue'

export default {
  components: {
    AppPage,
    MetaData,
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
    onBackClick() {
      this.$router.go(-1)
    },
    onTagClick(tag) {
      console.log(tag)
      this.$router.push(tag.to)
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
  margin: 0 0 10px;
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

.note-content {
  display: flex;
  flex-direction: column;
  width: 100%;

  ::v-deep p {
    font-size: 1.4rem;
    line-height: 2.4rem;

    &:first-child {
      margin-top: 0;
    }
  }

  ::v-deep .nuxt-content-highlight {
    border: 1px solid var(--light-color3);
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 0 5px;
  }
}

.notes-tags {
  margin: 0 0 30px;
}
</style>
