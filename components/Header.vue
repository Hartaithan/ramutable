<script>
export default {
  methods: {
    isRouteActive(id) {
      return this.$route.path === id;
    },
  },
};
</script>

<template>
  <header>
    <nav class="h-12 bg-neutral-800 flex justify-center items-center gap-6">
      <a :class="{ active: isRouteActive('/') }" href="/">Characters</a>
      <a :class="{ active: isRouteActive('/locations') }" href="/locations">Locations</a>
      <a :class="{ active: isRouteActive('/episodes') }" href="/episodes">Episodes</a>
    </nav>
  </header>
</template>

<style scoped>
.active {
  @apply text-green-600 font-bold
}
</style>
