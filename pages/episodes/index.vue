<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';
import type { ListResponse } from '~/models/ResponseModel';

const { page = 1 } = useRoute().query;
const { data: episodes } = await useAPI<ListResponse<Episode>>(`/episode?page=${page}`);
</script>

<template>
  <div v-if="episodes" class="grid gap-4 grid-cols-4">
    <EpisodeCard v-for="episode in episodes.results" :key="episode.id" :episode="episode" />
  </div>
</template>
