<template>
  <VCard class="card" elevation="8" rounded="lg">
    <slot></slot>
  </VCard>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
}
</style>
