<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';

const { id } = useRoute().params;
const { data: episode } = await useAPI<Episode>(`/episode/${id}`);
</script>

<template>
  <div v-if="episode" class="flex flex-col gap-4">
    <EpisodeInfo :episode="episode" />
    <EpisodeCharacters :characters="episode.characters" />
  </div>
  <div v-else>
    Episode not found!
  </div>
</template>
