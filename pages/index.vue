<script setup lang="ts">
import type { CharactersResponse } from '~/models/CharacterModel';

const { data: characters } = await useAPI<CharactersResponse>('/character');
</script>

<template>
  <ul v-if="characters">
    <li v-for="character in characters.results" :key="character.id">
      {{ character.name }}
    </li>
  </ul>
</template>
