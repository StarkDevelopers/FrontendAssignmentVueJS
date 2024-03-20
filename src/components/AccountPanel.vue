<template>
  <BaseProfileAvatar />
  <AccountPanelUserFullName />
  <AccountPanelUserDescription />
  <AccountPanelEmail />
  <AccountPanelChangePassword />
</template>

<script setup>
import BaseProfileAvatar from '@/components/Base/BaseProfileAvatar.vue'

import AccountPanelUserFullName from '@/components/AccountPanelUserFullName.vue'
import AccountPanelEmail from '@/components/AccountPanelEmail.vue'
import AccountPanelChangePassword from '@/components/AccountPanelChangePassword.vue'
import AccountPanelUserDescription from '@/components/AccountPanelUserDescription.vue'
</script>
