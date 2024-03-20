<template>
  <VImg class="image" :src="profileImage">
    <template v-slot:placeholder>
      <VRow align="center" justify="center" class="fill-height ma-0 loader-container">
        <VProgressCircular color="grey-lighten-5" indeterminate />
      </VRow>
    </template>
    <template v-slot:error>
      <VImg class="image default-image" :src="defaultImage" />
    </template>
  </VImg>
</template>

<script setup>
import defaultImage from '@/assets/images/default-user.png'
import { getProfileUrl } from '@/helpers/profile'
import { useUserProfileStore } from '@/stores/userProfile'
import { computed } from 'vue'

const store = useUserProfileStore()

const profileImage = computed(() => getProfileUrl(store.userProfile.email))
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.default-image {
  border: 1px solid #666666;
}
.loader-container {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid #666666;
}
</style>
