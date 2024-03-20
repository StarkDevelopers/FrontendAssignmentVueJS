<template>
  <VBtn icon elevation="0" width="36" height="36">
    <FontAwesomeIcon :icon="fontAwesomeIcon" class="font-awesome-icon" />
  </VBtn>
</template>

<script setup>
defineProps({
  fontAwesomeIcon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.font-awesome-icon {
  color: #666666;
}
button:disabled {
  opacity: 0.4;
}
</style>
