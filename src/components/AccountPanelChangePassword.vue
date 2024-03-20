<template>
  <div class="change-password-container">
    <template v-if="!isEditing">
      <BaseTextButton button-text="Change Password" @click="toggleEditing" />
    </template>
    <template v-else>
      <div class="input-field-container">
        <VTextField
          variant="solo"
          class="input-field"
          v-model="password"
          label="Password"
          :type="visible ? 'text' : 'password'"
          :rules="[() => isPasswordValid]"
        >
          <template #append-inner>
            <BaseIconButton
              :font-awesome-icon="visible ? 'eye-slash' : 'eye'"
              @click="visible = !visible"
            />
          </template>
        </VTextField>
        <div class="password-strength-meter">
          <AccountPanelPasswordMeter :score="passwordStrength.score" />
        </div>
      </div>
      <div class="edit-buttons">
        <BaseEditButton
          :is-editing="isEditing"
          :disable-save-button="isPasswordValid !== true"
          @on-edit="toggleEditing"
          @on-save="savePassword"
          @on-cancel="toggleEditing"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import BaseEditButton from '@/components/Base/BaseEditButton.vue'
import BaseTextButton from '@/components/Base/BaseTextButton.vue'
import BaseIconButton from '@/components/Base/BaseIconButton.vue'
import AccountPanelPasswordMeter from '@/components/AccountPanelPasswordMeter.vue'

import { useUserProfileStore } from '@/stores/userProfile'
import { checkPasswordStrength } from '@/helpers/validations'

const store = useUserProfileStore()

const isEditing = ref(false)
const visible = ref(false)

const password = ref(store.userProfile.password)

const passwordStrength = computed(() => checkPasswordStrength(password.value || ''))
const isPasswordValid = computed(() => requiredAndValidCheck(password.value))

function savePassword() {
  if (isPasswordValid.value !== true) {
    return
  }

  store.updateUserProfile('password', password.value.trim())

  toggleEditing()
}

function toggleEditing() {
  isEditing.value = !isEditing.value
  visible.value = false

  password.value = store.userProfile.password
}

function requiredAndValidCheck(value) {
  if (!value || !value.trim()) {
    return 'Field is required'
  }

  if (passwordStrength.value.score !== 4) {
    return (
      passwordStrength.value.feedback.warning ||
      passwordStrength.value.feedback.suggestions[0] ||
      'Enter strong password'
    )
  }

  return value.length < 64 || 'Max 64 characters allowed'
}
</script>

<style scoped>
.change-password-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
  width: 100%;
  padding: 0 2rem;
}
.input-field-container {
  width: 100%;
  position: relative;
}
.password-strength-meter {
  position: absolute;
  width: calc(100% - 10px);
  top: 52px;
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
  .change-password-container {
    padding: 0;
  }
}
</style>
