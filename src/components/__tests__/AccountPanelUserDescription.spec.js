import { describe, it, expect, beforeEach } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import AccountPanelUserDescription from '../AccountPanelUserDescription.vue'

describe('AccountPanelUserDescription', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders description with correct full name', () => {
    const wrapper = mount(AccountPanelUserDescription)

    // Expect to render email with edit button
    expect(wrapper.find('.description').text().startsWith('Marvin McKinney')).toBe(true)
  })
})
