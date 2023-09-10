<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';

interface Props {
  episode: Episode;
}

const { episode } = defineProps<Props>();
</script>

<template>
  <div class="flex p-4 bg-neutral-800 rounded-md">
    <div class="flex flex-col justify-center">
      <b>{{ episode.name }}</b>
      <p>Created: <b>{{ new Date(episode.created).toLocaleDateString() }}</b></p>
      <p>Air Date: <b>{{ episode.air_date }}</b></p>
      <p>Episode: <b>{{ episode.episode }}</b></p>
    </div>
  </div>
</template>
