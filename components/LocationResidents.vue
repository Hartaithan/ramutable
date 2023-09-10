<script setup lang="ts">
import type { Location } from '~/models/LocationModel';

interface Props {
  residents: Location['residents'];
}

const { residents } = defineProps<Props>();
</script>

<template>
  <div v-if="residents.length > 0" class="flex flex-col p-4 bg-neutral-800 rounded-md">
    <h2 class="font-bold text-xl mb-4">
      Residents ({{ residents.length }})
    </h2>
    <div class="grid gap-4 grid-cols-8">
      <NuxtLink v-for="episode in residents" :key="episode" class="flex flex-col p-4 bg-neutral-900 rounded-md"
        :to="`/characters/${getId(episode)}`">
        <p>Resident <b>{{ getId(episode) }}</b></p>
      </NuxtLink>
    </div>
  </div>
</template>
