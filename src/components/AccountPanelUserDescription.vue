<template>
  <div class="description-container">
    <span class="description">
      {{ store.fullName }} is an accomplished marketing strategist with a knack for creative
      campaigns and a track record of driving results. His expertise lies in developing innovative
      strategies that captivate audiences and elevate brands to new heights.
    </span>
  </div>
</template>

<script setup>
import { useUserProfileStore } from '@/stores/userProfile'

const store = useUserProfileStore()
</script>

<style scoped>
.description-container {
  margin: 0.25rem 2rem;
  text-align: center;
}

.description {
  font-size: 1rem;
  color: #666666;
}
</style>
