<script setup lang="ts">
import { Character } from '~/models/CharacterModel';
import type { ListResponse } from '~/models/ResponseModel';

const { data: characters } = await useAPI<ListResponse<Character>>('/character');
</script>

<template>
  <div v-if="characters" class="grid gap-4 grid-cols-3">
    <Character v-for="character in characters.results" :key="character.id" :character="character" />
  </div>
</template>
