<template>
  <div class="code-item">
    <p class="code-item-number">{{ paddedNumber }}.</p>
    <h2 class="code-item-header">{{ title }}</h2>
    <div class="code-item-content">
      <nuxt-content class="content" :document="description" />
    </div>
    <p class="code-item-meta"><span>Tags:</span> {{ tags }}</p>
    <div class="code-item-links">
      <a
        v-if="repoUrl && repoUrl !== ''"
        class="code-item-link"
        :href="repoUrl"
        rel="noopener"
        target="_blank"
      >
        <github-logo />
        <span>Code</span>
      </a>
      <a
        v-if="demoUrl && demoUrl !== ''"
        class="code-item-link"
        :href="demoUrl"
        rel="noopener"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
          />
        </svg>
        <span>View</span>
      </a>
    </div>
  </div>
</template>

<script>
import GithubLogo from './GithubLogo.vue'

export default {
  name: 'CodeItem',
  components: { GithubLogo },
  props: {
    demoUrl: {
      default: undefined,
      type: String,
    },
    description: {
      required: true,
      type: Object,
    },
    number: {
      required: true,
      type: Number,
    },
    repoUrl: {
      default: undefined,
      type: String,
    },
    tags: {
      default: undefined,
      type: String,
    },
    title: {
      required: true,
      type: String,
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

.code-item {
  background-color: var(--dark-color2);
  border: var(--dark-color3) solid 1px;
  color: var(--dark-text-color2);
  display: grid;
  grid-template-areas:
    'header header header'
    'content content content'
    'meta meta meta'
    'links links links';
  grid-template-columns: 50px auto;
  grid-template-rows: auto 1fr auto 40px;
  margin: 0 0 40px;
  padding: 40px;
  width: 100%;

  @include breakpoint('md') {
    grid-template-areas:
      'number header header header'
      'number content content content'
      'number meta meta meta'
      'number links links links';
  }
}

.code-item-number {
  color: var(--dark-text-color3);
  display: none;
  flex-shrink: 0;
  font-family: var(--title-font);
  font-size: 2rem;
  font-weight: 300;
  grid-area: number;
  line-height: 2.6rem;
  margin: 0 0 10px;
  width: 100%;

  @include breakpoint('md') {
    display: flex;
  }
}

.code-item-header {
  color: var(--dark-text-color1);
  flex-shrink: 0;
  font-family: var(--title-font);
  font-size: 2rem;
  font-weight: 300;
  grid-area: header;
  line-height: 2.6rem;
  margin: 0 0 10px;
  width: 100%;
}

.code-item-content {
  color: var(--dark-text-color2);
  font-size: 1rem;
  font-weight: 400;
  grid-area: content;
  line-height: 1.8rem;
  margin: 0 0 20px;

  ::v-deep a,
  ::v-deep a:link,
  ::v-deep a:visited {
    color: var(--dark-text-color1);
  }
}

.code-item-meta {
  color: var(--dark-text-color2);
  font-size: 1.1rem;
  font-weight: 400;
  grid-area: meta;
  line-height: 1.5rem;

  span {
    color: var(--dark-text-color3);
  }

  @include breakpoint('sm') {
    margin: 0 0 20px;
  }
}

.code-item-links {
  grid-area: links;

  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0 0 20px;
  }
}

.code-item-link {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--dark-text-color2);
  display: flex;
  fill: var(--dark-text-color2);
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;
  line-height: 1.4rem;
  text-decoration: none;

  svg {
    margin: 1px 8px 0 0;
    width: 24px;
  }

  &:hover {
    color: var(--dark-text-color1);
    fill: var(--dark-text-color1);
  }

  @include breakpoint('sm') {
    display: inline-flex;
  }
}
</style>
