<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';

interface Props {
  episodes: Character['episode'];
}

const { episodes } = defineProps<Props>();
</script>

<template>
  <div v-if="episodes.length > 0" class="flex flex-col p-4 bg-neutral-800 rounded-md">
    <h2 class="font-bold text-xl mb-4">
      Episodes ({{ episodes.length }})
    </h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10">
      <NuxtLink v-for="episode in episodes" :key="episode" class="flex flex-col p-4 bg-neutral-900 rounded-md"
        :to="`/episodes/${getId(episode)}`">
        <p>Episode <b>{{ getId(episode) }}</b></p>
      </NuxtLink>
    </div>
  </div>
</template>
