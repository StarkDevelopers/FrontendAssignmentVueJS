<template>
  <VBtn variant="text" :text="buttonText" class="text-button" />
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.text-button {
  color: #222d85;
  font-family: 'Open Sans', sans-serif;
}

.text-button > .v-btn__content {
  font-weight: bold !important;
}
</style>
