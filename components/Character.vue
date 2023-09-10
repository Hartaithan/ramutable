<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';

interface CharacterProps {
  character: Character;
}

const { character } = defineProps<CharacterProps>();
</script>

<template>
  <NuxtLink class="flex p-4 bg-neutral-800 rounded-md" :to="`/characters/${character.id}`">
    <img class="h-20 rounded" :src="character.image">
    <div class="flex flex-col justify-center ml-4">
      <b>{{ character.name }}</b>
      <p>Gender: <b>{{ character.gender }}</b></p>
      <p>Status: <b>{{ character.status }}</b></p>
    </div>
  </NuxtLink>
</template>
