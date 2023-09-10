<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';
import type { ListResponse } from '~/models/ResponseModel';

const { data: episodes } = await useAPI<ListResponse<Episode>>('/episode');
</script>

<template>
  <div v-if="episodes" class="grid gap-4 grid-cols-3">
    <EpisodeCard v-for="episode in episodes.results" :key="episode.id" :episode="episode" />
  </div>
</template>
