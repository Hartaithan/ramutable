<script setup lang="ts">
const { id } = useRoute().params;
</script>

<template>
  <p>character page: {{ id }}</p>
</template>
