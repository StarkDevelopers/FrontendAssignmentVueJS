import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseEditButton from '../BaseEditButton.vue'

describe('BaseEditButton', () => {
  it('renders edit button when not editing', () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: false
      }
    })
    expect(wrapper.find('[data-testid="edit-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(false)
  })

  it('renders save and cancel buttons when editing', () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: true
      }
    })
    expect(wrapper.find('[data-testid="edit-button"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="save-button"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cancel-button"]').exists()).toBe(true)
  })

  it('emits onEdit event when edit button is clicked', async () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: false
      }
    })
    await wrapper.find('[data-testid="edit-button"]').trigger('click')
    expect(wrapper.emitted('onEdit')).toBeTruthy()
  })

  it('emits onSave event when save button is clicked', async () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: true
      }
    })
    await wrapper.find('[data-testid="save-button"]').trigger('click')
    expect(wrapper.emitted('onSave')).toBeTruthy()
  })

  it('emits onCancel event when cancel button is clicked', async () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: true
      }
    })
    await wrapper.find('[data-testid="cancel-button"]').trigger('click')
    expect(wrapper.emitted('onCancel')).toBeTruthy()
  })

  it('disables save button when disableSaveButton prop is true', () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: true,
        disableSaveButton: true
      }
    })
    expect(wrapper.find('[data-testid="save-button"]').attributes('disabled')).toBe('')
  })

  it('enables save button when disableSaveButton prop is false', () => {
    const wrapper = mount(BaseEditButton, {
      props: {
        isEditing: true,
        disableSaveButton: false
      }
    })
    expect(wrapper.find('[data-testid="save-button"]').attributes('disabled')).toBeFalsy()
  })
})
