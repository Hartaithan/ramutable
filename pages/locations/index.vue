<script setup lang="ts">
import type { Location } from '~/models/LocationModel';
import type { ListResponse } from '~/models/ResponseModel';

const { page = 1 } = useRoute().query;
const { data: locations } = await useAPI<ListResponse<Location>>(`/location?page=${page}`);
</script>

<template>
  <div v-if="locations" class="grid gap-4 grid-cols-4">
    <LocationCard v-for="location in locations.results" :key="location.id" :location="location" />
  </div>
</template>
