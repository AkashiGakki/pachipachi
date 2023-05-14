<script setup lang="ts">
import type { MediaType } from '~/types'
import { QUERY_LIST } from '~/constants/lists'

const route = useRoute()
const type = computed(() => route.params.type as MediaType || 'movie')

const queries = computed(() => [
  QUERY_LIST.movie[1],
  QUERY_LIST.tv[1],
])

const AsyncWrapper = defineComponent(async (_, ctx) => {
  // const list = await listMedia(type.value, queries.value[0].query, 1)
  // const item = await getMedia(type.value, list.results[0].id)

  const item = await getMedia(type.value, '635302') // 鬼灭之刃 无限列车
  return () => ctx.slots?.default?.({ item })
})
</script>

<template>
  <div>
    <AsyncWrapper>
      <template #default="{ item }">
        <NuxtLink :to="`/${type}/${item.id}`">
          <!-- <MediaHero :item="item" /> -->
        </NuxtLink>
      </template>
    </AsyncWrapper>

    <PageView />
  </div>
</template>
