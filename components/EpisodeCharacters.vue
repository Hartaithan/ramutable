<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';

interface Props {
  characters: Episode['characters'];
}

const { characters } = defineProps<Props>();
</script>

<template>
  <div v-if="characters.length > 0" class="flex flex-col p-4 bg-neutral-800 rounded-md">
    <h2 class="font-bold text-xl mb-4">
      Characters ({{ characters.length }})
    </h2>
    <div class="grid gap-4 grid-cols-8">
      <NuxtLink v-for="character in characters" :key="character" class="flex flex-col p-4 bg-neutral-900 rounded-md"
        :to="`/characters/${getId(character)}`">
        <p>Character <b>{{ getId(character) }}</b></p>
      </NuxtLink>
    </div>
  </div>
</template>
