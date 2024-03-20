import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import AccountPanel from '@/components/AccountPanel.vue'
import BaseProfileAvatar from '@/components/Base/BaseProfileAvatar.vue'
import AccountPanelUserFullName from '@/components/AccountPanelUserFullName.vue'
import AccountPanelEmail from '@/components/AccountPanelEmail.vue'
import AccountPanelChangePassword from '@/components/AccountPanelChangePassword.vue'
import AccountPanelUserDescription from '@/components/AccountPanelUserDescription.vue'

describe('AccountPanel', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders all child components', () => {
    const wrapper = mount(AccountPanel)

    // Expect all child components to be rendered
    expect(wrapper.findComponent(BaseProfileAvatar).exists()).toBe(true)
    expect(wrapper.findComponent(AccountPanelUserFullName).exists()).toBe(true)
    expect(wrapper.findComponent(AccountPanelEmail).exists()).toBe(true)
    expect(wrapper.findComponent(AccountPanelChangePassword).exists()).toBe(true)
    expect(wrapper.findComponent(AccountPanelUserDescription).exists()).toBe(true)
  })
})
