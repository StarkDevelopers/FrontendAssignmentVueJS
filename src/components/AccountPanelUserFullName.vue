<template>
  <div class="full-name-container">
    <template v-if="!isEditing">
      <span class="full-name">{{ store.fullName }}</span>
    </template>
    <template v-else>
      <VTextField
        variant="solo"
        class="input-field"
        v-model="firstName"
        label="First Name"
        :rules="[requireAndLengthCheck]"
      />
      <VTextField
        variant="solo"
        class="input-field"
        v-model="lastName"
        label="Last Name"
        :rules="[requireAndLengthCheck]"
      />
    </template>
    <div class="edit-buttons">
      <BaseEditButton
        :is-editing="isEditing"
        :disable-save-button="isDisabled"
        @on-edit="toggleEditing"
        @on-save="saveFullName"
        @on-cancel="toggleEditing"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import BaseEditButton from '@/components/Base/BaseEditButton.vue'

import { useUserProfileStore } from '@/stores/userProfile'

const store = useUserProfileStore()

const isEditing = ref(false)

const firstName = ref(store.userProfile.firstName)
const lastName = ref(store.userProfile.lastName)

const isDisabled = computed(
  () =>
    !firstName.value ||
    !firstName.value.trim() ||
    !lastName.value ||
    !lastName.value.trim() ||
    firstName.value.length > 20 ||
    lastName.value.length > 20
)

function saveFullName() {
  if (isDisabled.value) {
    return
  }

  store.updateUserProfile('firstName', firstName.value.trim())
  store.updateUserProfile('lastName', lastName.value.trim())

  toggleEditing()
}

function toggleEditing() {
  isEditing.value = !isEditing.value

  firstName.value = store.userProfile.firstName
  lastName.value = store.userProfile.lastName
}

function requireAndLengthCheck(value) {
  if (!value || !value.trim()) {
    return 'Field is required'
  }

  return value.length <= 20 || 'Max 20 characters allowed'
}
</script>

<style scoped>
.full-name-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  padding: 0 2rem;
}

.full-name {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.input-field {
  margin-right: 10px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
}

.edit-buttons {
  flex-shrink: 0;
}

@media only screen and (max-width: 600px) {
  .full-name-container {
    padding: 0;
  }
}
</style>
