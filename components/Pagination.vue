<script setup lang="ts">
import type { Info } from '~/models/InfoModel';

interface Props {
  route: string;
  page: number;
  info: Info | undefined;
}

const { info } = defineProps<Props>();
</script>

<template>
  <div v-if="info" class="flex justify-between mt-6">
    <p class="centered">
      Page: {{ page }}
    </p>
    <div class="flex gap-3">
      <a v-if="page !== 1" :href="`${route}?page=1`" class="item centered">
        «
      </a>
      <a v-if="page > 1" :href="`${route}?page=${page - 1}`" class="item centered">
        ‹
      </a>
      <a v-if="page > 2" :href="`${route}?page=${page - 2}`" class="item centered">
        {{ page - 2 }}
      </a>
      <a v-if="page > 1" :href="`${route}?page=${page - 1}`" class="item centered">
        {{ page - 1 }}
      </a>
      <p class="item active centered">
        {{ page }}
      </p>
      <a v-if="page < info.pages" :href="`${route}?page=${page + 1}`" class="item centered">
        {{ page + 1 }}
      </a>
      <a v-if="page < info.pages - 1" :href="`${route}?page=${page + 2}`" class="item centered">
        {{ page + 2 }}
      </a>
      <a v-if="page < info.pages" :href="`${route}?page=${page + 1}`" class="item centered">
        ›
      </a>
      <a v-if="page !== info.pages" :href="`${route}?page=${info.pages}`" class="item centered">
        »
      </a>
    </div>
    <p class="centered">
      Total items: {{ info?.count }}
    </p>
  </div>
</template>

<style scoped>
.item {
  @apply bg-neutral-800 flex justify-center items-center rounded w-8 h-8
}

.centered {
  @apply flex justify-center items-center
}

.active {
  @apply bg-neutral-700 font-bold
}
</style>
