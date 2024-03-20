<template>
  <div class="email-container">
    <template v-if="!isEditing">
      <span class="email">{{ store.userProfile.email }}</span>
    </template>
    <template v-else>
      <VTextField
        variant="solo"
        class="input-field"
        type="email"
        v-model="email"
        label="Email"
        :rules="[() => isEmailValid]"
      />
    </template>
    <BaseEditButton
      :is-editing="isEditing"
      :disable-save-button="isEmailValid !== true"
      @on-edit="toggleEditing"
      @on-save="saveEmail"
      @on-cancel="toggleEditing"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import BaseEditButton from '@/components/Base/BaseEditButton.vue'

import { useUserProfileStore } from '@/stores/userProfile'
import { validateEmail } from '@/helpers/validations'

const store = useUserProfileStore()

const isEditing = ref(false)
const email = ref(store.userProfile.email)

const isEmailValid = computed(() => requireAndValidCheck(email.value))

function saveEmail() {
  if (isEmailValid.value !== true) {
    return
  }

  store.updateUserProfile('email', email.value.trim())

  toggleEditing()
}

function toggleEditing() {
  isEditing.value = !isEditing.value

  email.value = store.userProfile.email
}

function requireAndValidCheck(value) {
  if (!value || !value.trim()) {
    return 'Field is required'
  }

  const isValid = validateEmail(value)

  if (!isValid) {
    return 'Invalid email address'
  }

  return value.length <= 255 || 'Max 255 characters allowed'
}
</script>

<style scoped>
.email-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
  width: 100%;
  padding: 0 2rem;
}
.email {
  font-weight: 500;
  text-align: center;
  word-break: break-all;
}
.input-field {
  margin-right: 10px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
}

@media only screen and (max-width: 600px) {
  .email-container {
    padding: 0;
  }
}
</style>
