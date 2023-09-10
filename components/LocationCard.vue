<script setup lang="ts">
import type { Location } from '~/models/LocationModel';

interface Props {
  location: Location;
}

const { location } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="flex flex-col justify-center p-4 bg-neutral-800 rounded-md" :to="`/locations/${location.id}`">
    <b class="mb-2">{{ location.name }}</b>
    <p>Type: <b>{{ location.type }}</b></p>
    <p>Dimension: <b>{{ location.dimension }}</b></p>
  </NuxtLink>
</template>
