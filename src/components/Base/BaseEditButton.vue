<template>
  <div v-if="!isEditing">
    <BaseIconButton font-awesome-icon="pencil" @click="$emit('onEdit')" data-testid="edit-button" />
  </div>
  <div v-else class="editing-buttons">
    <BaseIconButton
      font-awesome-icon="check"
      @click="$emit('onSave')"
      :disabled="disableSaveButton"
      data-testid="save-button"
    />
    <BaseIconButton
      font-awesome-icon="xmark"
      @click="$emit('onCancel')"
      data-testid="cancel-button"
    />
  </div>
</template>

<script setup>
import BaseIconButton from '@/components/Base/BaseIconButton.vue'

defineProps({
  isEditing: {
    type: Boolean,
    required: true
  },
  disableSaveButton: {
    type: Boolean,
    required: false
  }
})

defineEmits(['onEdit', 'onSave', 'onCancel'])
</script>

<style scoped>
.editing-buttons {
  margin-top: -1rem;
}
</style>
