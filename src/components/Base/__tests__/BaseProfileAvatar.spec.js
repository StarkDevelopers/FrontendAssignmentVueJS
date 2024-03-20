import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import BaseProfileAvatar from '../BaseProfileAvatar.vue'

describe('BaseProfileAvatar', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders with default slot', () => {
    const wrapper = mount(BaseProfileAvatar)

    expect(wrapper.find('.v-img__img').exists()).toBe(true)
    expect(wrapper.find('.v-img__error').exists()).toBe(false)
  })
})
