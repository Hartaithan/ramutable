<script setup lang="ts">
import type { Episode } from '~/models/EpisodeModel';
import type { ListResponse } from '~/models/ResponseModel';

const { page = 1 } = useRoute().query;
const { data: episodes } = await useAPI<ListResponse<Episode>>(`/episode?page=${page}`);
</script>

<template>
  <div v-if="episodes" class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-auto">
    <EpisodeCard v-for="episode in episodes.results" :key="episode.id" :episode="episode" />
  </div>
  <Pagination route="/episodes" :page="Number(page)" :info="episodes?.info" />
</template>
