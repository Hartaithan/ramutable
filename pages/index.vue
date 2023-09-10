<script setup lang="ts">
import type { CharactersResponse } from '~/models/CharacterModel';

const { data: characters } = await useAPI<CharactersResponse>('/character');
</script>

<template>
  <div v-if="characters" class="grid gap-4 grid-cols-3">
    <Character v-for="character in characters.results" :key="character.id" :character="character" />
  </div>
</template>
