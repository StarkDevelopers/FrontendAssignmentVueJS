import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userProfile', () => {
  const userProfile = ref({
    firstName: 'Marvin',
    lastName: 'McKinney',
    email: 'marvin.mckinney@gmail.com',
    password: '$tr0&gP@$$w0rd#*'
  })

  const fullName = computed(() => {
    return `${userProfile.value.firstName} ${userProfile.value.lastName}`
  })

  function updateUserProfile(property, value) {
    if (!Object.keys(userProfile.value).includes(property)) {
      throw new Error('Attempted to update an invalid property in the User Profile')
    }

    userProfile.value[property] = value
  }

  return { userProfile, fullName, updateUserProfile }
})
