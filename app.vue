<script setup lang="ts">
import { appName } from '~/constants/app'
import '@unocss/reset/tailwind.css'

useHead({
  title: appName,
  htmlAttrs: {
    lang: 'zh-CN',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="yellow-light" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  color-scheme: dark light;
}

html.dark {
  background: #222;
  color: white;
}
</style>
