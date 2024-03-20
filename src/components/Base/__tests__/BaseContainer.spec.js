import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseContainer from '../BaseContainer.vue'

describe('BaseContainer', () => {
  it('renders without crashing', () => {
    const wrapper = mount(BaseContainer)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders slot content', () => {
    const wrapper = mount(BaseContainer, {
      slots: {
        default: 'Container Content'
      }
    })
    expect(wrapper.text()).toContain('Container Content')
  })

  it('applies fill-height class', () => {
    const wrapper = mount(BaseContainer)
    expect(wrapper.find('.fill-height').exists()).toBeTruthy()
  })

  it('applies fluid property', () => {
    const wrapper = mount(BaseContainer)

    expect(wrapper.classes()).toContain('v-container--fluid')
  })
})
