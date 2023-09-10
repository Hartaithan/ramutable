<script setup lang="ts">
import type { Character } from '~/models/CharacterModel';

const { id } = useRoute().params;
const { data: character } = await useAPI<Character>(`/character/${id}`);
</script>

<template>
  <div v-if="character" class="flex flex-col gap-4">
    <CharacterInfo :character="character" />
    <CharacterLocation :character="character" />
    <CharacterEpisodes :episodes="character.episode" />
  </div>
  <div v-else>
    Character not found!
  </div>
</template>
