<script setup lang="ts">
import type { Location } from '~/models/LocationModel';

interface Props {
  location: Location;
}

const { location } = defineProps<Props>();
</script>

<template>
  <div class="flex p-4 bg-neutral-800 rounded-md">
    <div class="flex flex-col justify-center">
      <b>{{ location.name }}</b>
      <p>Created: <b>{{ new Date(location.created).toLocaleDateString() }}</b></p>
      <p>Type: <b>{{ location.type }}</b></p>
      <p>Dimension: <b>{{ location.dimension }}</b></p>
    </div>
  </div>
</template>
