<template>
  <ul class="nav-list">
    <li class="nav-item">
      <router-link active-class="is-active" class="link" :exact="true" to="/">
        Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link active-class="is-active" class="link" to="/about">
        About
      </router-link>
    </li>
    <li class="nav-item">
      <router-link active-class="is-active" class="link" to="/code">
        Code
      </router-link>
    </li>
    <li class="nav-item">
      <router-link active-class="is-active" class="link" to="/resources">
        Resources
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNav',
}
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  .link {
    background-color: transparent;
    border: none;
    color: var(--light-text-color2);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 300;
    margin: 0 25px 0 0;
    padding: 0;
    text-decoration: none;
    text-transform: uppercase;

    .light-theme & {
      color: var(--light-text-color2);

      &.is-active {
        color: var(--light-text-color1);
      }

      &:hover {
        color: var(--light-text-color1);
      }
    }

    .dark-theme & {
      color: var(--dark-text-color2);

      &.is-active {
        color: var(--dark-text-color1);
      }

      &:hover {
        color: var(--dark-text-color1);
      }
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
