<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';

interface Props {
  character: Character;
}

const { character } = defineProps<Props>();
</script>

<template>
  <div class="flex p-4 bg-neutral-800 rounded-md">
    <img class="h-32 min-w-[8rem] rounded" :src="character.image">
    <div class="flex flex-col justify-center ml-4">
      <b>{{ character.name }}</b>
      <p>Created: <b>{{ new Date(character.created).toLocaleDateString() }}</b></p>
      <p>Status: <b>{{ character.status }}</b></p>
      <p>Species: <b>{{ character.species }}</b></p>
      <p>Gender: <b>{{ character.gender }}</b></p>
    </div>
  </div>
</template>
