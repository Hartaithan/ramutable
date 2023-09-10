<script setup lang="ts">
import type { Location } from '~/models/LocationModel';
import type { ListResponse } from '~/models/ResponseModel';

const { data: locations } = await useAPI<ListResponse<Location>>('/location');
</script>

<template>
  <div v-if="locations" class="grid gap-4 grid-cols-3">
    <LocationCard v-for="location in locations.results" :key="location.id" :location="location" />
  </div>
</template>
