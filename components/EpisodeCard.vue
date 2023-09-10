<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';

interface Props {
  episode: Episode;
}

const { episode } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="flex flex-col justify-center p-4 bg-neutral-800 rounded-md" :to="`/episodes/${episode.id}`">
    <b>{{ episode.name }}</b>
    <p>Air Date: <b>{{ episode.air_date }}</b></p>
    <p>Episode: <b>{{ episode.episode }}</b></p>
  </NuxtLink>
</template>
