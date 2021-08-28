---
description: 'Example of passing slots down through multiple components in Vue.'
path: '/notes/passing-down-slots-in-vue'
publishedAt: '2021-08-24'
tags: 'Vue'
title: 'Passing down slots in Vue'
type: 'note'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus nec augue mattis, sit amet dictum lorem volutpat. Mauris scelerisque, massa sit amet malesuada.

AppView.vue

```html
<template>
  <div
    :class="[
      { 'is-disabled': isDisabled, 'is-stacked': isStacked },
      'c_app_view',
    ]"
  >
    <div class="body">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <task-bar>
      <template v-slot:left-content>
        <slot name="task-bar-left-content" />
      </template>
      <template v-slot:center-content>
        <slot name="task-bar-center-content" />
      </template>
      <template v-slot:right-content>
        <slot name="task-bar-right-content" />
      </template>
    </task-bar>
  </div>
</template>
```

HomeView.vue

```html
<app-view :isDisabled="isDisabled" title="Tasks">
  <message-screen v-if="items === undefined"> Loading... </message-screen>
  <message-screen v-else-if="items.length === 0"> No Tasks </message-screen>
  <ul v-else class="list">
    <template v-for="item of items">
      <list-sub-header v-if="item.type === 'section-header'" :key="item.id">
        {{ item.label }}
      </list-sub-header>
      <list-item
        v-else
        :key="item.id"
        :subTitle="formatDueDate(item.dueDate)"
        :title="item.title"
        :to="`/${item.id}`"
      />
    </template>
  </ul>
  <template v-slot:task-bar-center-content>
    <icon-link class="add-btn" to="/add-task">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" />
      </svg>
    </icon-link>
  </template>
  <template v-slot:task-bar-right-content>
    <select-menu
      :options="[
          {
            id: 'theme',
            label: `Toggle theme`,
            value: true,
          },
        ]"
      @select="onSelect"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"
          fill="inherit"
        />
      </svg>
    </select-menu>
  </template>
</app-view>
```
