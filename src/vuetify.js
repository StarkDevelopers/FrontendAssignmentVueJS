import 'vuetify/styles'

import { createVuetify } from 'vuetify'

import { VCard } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VImg } from 'vuetify/components/VImg'
import { VTextField } from 'vuetify/components/VTextField'
import { VProgressLinear } from 'vuetify/components/VProgressLinear'
import { VProgressCircular } from 'vuetify/components/VProgressCircular'
import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'

const vuetify = new createVuetify({
  components: {
    VCard,
    VBtn,
    VContainer,
    VRow,
    VCol,
    VImg,
    VTextField,
    VProgressLinear,
    VProgressCircular
  }
})

export default vuetify
