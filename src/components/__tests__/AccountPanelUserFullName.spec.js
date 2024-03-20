import { describe, it, expect, beforeEach } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import AccountPanelUserFullName from '../AccountPanelUserFullName.vue'

describe('AccountPanelUserFullName', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders the full name with the edit button', () => {
    const wrapper = mount(AccountPanelUserFullName)

    // Expect to render email with edit button
    expect(wrapper.find('.full-name').text()).toBe('Marvin McKinney')
    expect(wrapper.find('[data-testid="edit-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(false)
  })

  it('renders 2 input field, save button and cancel button when editing', async () => {
    const wrapper = mount(AccountPanelUserFullName)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.findAll('input').length).toBe(2)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(true)
  })

  it('toggles editing when clicked', async () => {
    const wrapper = mount(AccountPanelUserFullName)

    // Initial isEditing value should be false
    expect(wrapper.vm.isEditing).toBe(false)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // After click, isEditing value should be true
    expect(wrapper.vm.isEditing).toBe(true)
  })

  // Add test cases to check validation functionality
  it('validates full name correctly', async () => {
    const wrapper = mount(AccountPanelUserFullName)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // Set invalid full name
    wrapper.vm.firstName = ''
    wrapper.vm.lastName = 'McKinney'

    // Expect full name to be invalid
    expect(wrapper.vm.isDisabled).toBe(true)

    // Set invalid full name
    wrapper.vm.firstName = 'Marvin'
    wrapper.vm.lastName = ''

    // Expect full name to be invalid
    expect(wrapper.vm.isDisabled).toBe(true)

    // Set valid full name
    wrapper.vm.firstName = 'Marvin'
    wrapper.vm.lastName = 'McKinney'

    // Expect full name to be valid
    expect(wrapper.vm.isDisabled).toBe(false)

    // Set long full name
    wrapper.vm.firstName = 'Very Very Very Very Very Very Very Long First Name'
    wrapper.vm.lastName = 'Very Very Very Very Very Very Very Long First Name'

    // Expect full name to be valid
    expect(wrapper.vm.isDisabled).toBe(true)
  })
})
