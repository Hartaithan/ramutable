<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';
import type { ListResponse } from '~/models/ResponseModel';

const { page = 1 } = useRoute().query;
const { data: characters } = await useAPI<ListResponse<Character>>(`/character?page=${page}`);
</script>

<template>
  <div v-if="characters" class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-auto">
    <CharacterCard v-for="character in characters.results" :key="character.id" :character="character" />
  </div>
  <Pagination route="/" :page="Number(page)" :info="characters?.info" />
</template>
