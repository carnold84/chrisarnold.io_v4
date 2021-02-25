<template>
  <app-page :breadcrumb="breadcrumb" theme="light">
    <div class="wrapper">
      <h1 class="heading">About Me.</h1>
      <p class="paragraph">
        I started out getting a Bachelor of Design (Visual Communication Design)
        in 2006, but I have always been fascinated by technology, computers and,
        particularly, the internet.
      </p>
      <p class="paragraph">
        After completing my degree I got a job developing interactive medical
        animations in Adobe Flash. From there I taught myself Actionscript 3.0
        and moved onto developing more complex applications including early
        augmented reality in the browser. I also learnt HTML, CSS and JQuery.
      </p>
      <p class="paragraph">
        In 2011 I moved to Melbourne, Australia and started work as a front-end
        developer for a small design agency building websites and applications
        in HTML, CSS, JQuery and Flash, and integrating with PHP backends.
      </p>
      <p class="paragraph">
        In 2014 I moved to London, UK and started work for a company building
        set-top boxes for televisions. The UI was built in HTML, CSS, and plain
        javascript, and ran in a customised version of Chrome browser. This was
        a fascinating project and I learned a vast amount. From achieving
        complex functionality in plain javascript and no libraries, to
        integrating with platform apis, and squeezing the maximum performance
        from relatively under-powered hardware.
      </p>
    </div>
  </app-page>
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage,
  },
  data() {
    return {
      breadcrumb: [
        {
          id: 'about-1',
          label: 'About',
        },
        {
          id: 'about-2',
          label: 'History & Experience',
        },
      ],
      theme: 'light',
    }
  },
  meta: { theme: 'light' },
  transition: {
    mode: '',
    name: 'page',
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_breakpoint.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  opacity: 1;
  padding: 40px 0 0;
  position: relative;
}

.heading {
  color: var(--light-text-color1);
  font-size: 6rem;
  font-weight: 400;
  line-height: 6rem;
  margin: 0 0 25px;
}

.paragraph {
  color: var(--light-text-color2);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7rem;
  margin: 0 0 10px;
  text-align: justify;

  @include breakpoint('sm') {
    font-size: 1rem;
    line-height: 1.7rem;
  }

  @include breakpoint('md') {
    font-size: 1rem;
    line-height: 1.7rem;
  }
}
</style>
