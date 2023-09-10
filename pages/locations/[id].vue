<script setup lang="ts">
import type { Location } from '~/models/LocationModel';

const { id } = useRoute().params;
const { data: location } = await useAPI<Location>(`/location/${id}`);
</script>

<template>
  <div v-if="location" class="flex flex-col gap-4">
    <LocationInfo :location="location" />
    <LocationResidents :residents="location.residents" />
  </div>
  <div v-else>
    Location not found!
  </div>
</template>
