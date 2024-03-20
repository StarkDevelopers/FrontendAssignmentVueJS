import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseIconButton from '../BaseIconButton.vue'

describe('BaseIconButton', () => {
  it('renders icon button with correct props', () => {
    const wrapper = mount(BaseIconButton, {
      props: {
        fontAwesomeIcon: 'pencil'
      }
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('.font-awesome-icon').exists()).toBe(true)
    expect(wrapper.find('.font-awesome-icon').attributes('data-icon')).toBe('pencil')
  })

  it('applies zero elevation', () => {
    const wrapper = mount(BaseIconButton, {
      props: {
        fontAwesomeIcon: 'pencil'
      }
    })

    expect(wrapper.classes()).toContain('elevation-0')
  })
})
