<template>
  <VProgressLinear :class="classes" :model-value="meterValue" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: {
    type: Number,
    required: true
  }
})

const meterValue = computed(() => props.score * 25)

const classes = computed(() => ({
  'too-weak': props.score === 1,
  weak: props.score === 2,
  strong: props.score === 3,
  'too-strong': props.score === 4
}))
</script>

<style scoped>
.too-weak {
  color: red;
}
.weak {
  color: orange;
}
.strong {
  color: greenyellow;
}
.too-strong {
  color: green;
}
</style>
