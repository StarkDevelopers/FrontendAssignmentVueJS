import { describe, it, expect, beforeEach } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'

import AccountPanelChangePassword from '../AccountPanelChangePassword.vue'

describe('AccountPanelChangePassword', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('renders the button with the provided text', () => {
    const wrapper = mount(AccountPanelChangePassword)

    // Expect the button to render with the provided text
    expect(wrapper.text()).toContain('Change Password')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(AccountPanelChangePassword, {
      props: {
        buttonText: 'Change Password'
      }
    })

    // Simulate click event
    await wrapper.trigger('click')

    // Expect click event to be emitted
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('renders only Change Password button when not editing', () => {
    const wrapper = mount(AccountPanelChangePassword)

    expect(wrapper.text()).toContain('Change Password')
    expect(wrapper.find('input').exists()).toBe(false)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(false)
  })

  it('renders input field, save button and cancel button when editing', async () => {
    const wrapper = mount(AccountPanelChangePassword)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(true)
  })

  it('toggles editing when clicked', async () => {
    const wrapper = mount(AccountPanelChangePassword, {
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

  it('toggles visibility when clicked', async () => {
    const wrapper = mount(AccountPanelChangePassword, {
      props: {
        buttonText: 'Change Password'
      }
    })

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // Initial visible value should be false
    expect(wrapper.vm.visible).toBe(false)

    // Simulate click event to toggle visibility
    await wrapper.find('.v-field__append-inner button').trigger('click')

    // After click, visible value should be true
    expect(wrapper.vm.visible).toBe(true)
  })

  // Add test cases to check validation functionality
  it('validates password correctly', async () => {
    const wrapper = mount(AccountPanelChangePassword)

    // Simulate click event to toggle editing
    await wrapper.find('.v-btn').trigger('click')

    // Set invalid password
    wrapper.vm.password = ''

    // Expect password to be invalid
    expect(wrapper.vm.isPasswordValid).toBe('Field is required')

    // Set valid password
    wrapper.vm.password = 'test1234'

    // Expect password to be valid
    expect(wrapper.vm.isPasswordValid).toBe('This is a very common password')

    // Set valid password
    wrapper.vm.password = '$tr0&gP@$$w0rd#*'

    // Expect password to be valid
    expect(wrapper.vm.isPasswordValid).toBe(true)

    // Set valid password
    wrapper.vm.password =
      '$tr0&gP@$$w0rd#*very-very-very-very-very-very-very-very-very-long-password'

    // Expect password to be valid
    expect(wrapper.vm.isPasswordValid).toBe('Max 64 characters allowed')
  })
})
