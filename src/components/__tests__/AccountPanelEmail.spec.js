import { describe, it, expect, beforeEach } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import AccountPanelEmail from '../AccountPanelEmail.vue'

describe('BaseCard', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders the email with the edit button', () => {
    const wrapper = mount(AccountPanelEmail)

    // Expect to render email with edit button
    expect(wrapper.find('.email').text()).toBe('marvin.mckinney@gmail.com')
    expect(wrapper.find('[data-testid="edit-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(false)
  })

  it('renders input field, save button and cancel button when editing', async () => {
    const wrapper = mount(AccountPanelEmail)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(true)
  })

  it('toggles editing when clicked', async () => {
    const wrapper = mount(AccountPanelEmail, {
      props: {
        buttonText: 'Change Password'
      }
    })

    // Initial isEditing value should be false
    expect(wrapper.vm.isEditing).toBe(false)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // After click, isEditing value should be true
    expect(wrapper.vm.isEditing).toBe(true)
  })

  // Add test cases to check validation functionality
  it('validates email correctly', async () => {
    const wrapper = mount(AccountPanelEmail)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // Set invalid email
    wrapper.vm.email = ''

    // Expect email to be invalid
    expect(wrapper.vm.isEmailValid).toBe('Field is required')

    // Set valid email
    wrapper.vm.email = 'test1234'

    // Expect email to be valid
    expect(wrapper.vm.isEmailValid).toBe('Invalid email address')

    // Set valid email
    wrapper.vm.email = 'test@gmail.com'

    // Expect email to be valid
    expect(wrapper.vm.isEmailValid).toBe(true)

    // Set long email
    wrapper.vm.email =
      'test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-test-very-very-very-long-email@gmail.com'

    // Expect email to be valid
    expect(wrapper.vm.isEmailValid).toBe('Max 255 characters allowed')
  })
})
