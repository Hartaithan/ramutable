<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';

interface Props {
  character: Character;
}

const { character } = defineProps<Props>();
</script>

<template>
  <NuxtLink class="flex flex-col p-4 bg-neutral-800 rounded-md" :to="`/locations/${getId(character.location.url)}`">
    <h2 class="font-bold text-xl mb-2">
      Location
    </h2>
    <p>Location: <b>{{ character.location.name }}</b></p>
    <p>Origin: <b>{{ character.origin.name }}</b></p>
  </NuxtLink>
</template>

<style scoped></style>
