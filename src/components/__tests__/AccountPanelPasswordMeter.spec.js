import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AccountPanelPasswordMeter from '../AccountPanelPasswordMeter.vue'

describe('AccountPanelPasswordMeter', () => {
  it('applies "too-weak" class if score is 1', () => {
    const score = 1 // Too weak password score
    const wrapper = mount(AccountPanelPasswordMeter, {
      props: {
        score
      }
    })

    // Expect the progress linear to have "too-weak" class
    expect(wrapper.props('score')).toBe(score)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).props('modelValue')).toBe(score * 25)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).classes()).toContain('too-weak')
  })

  it('renders the progress linear with correct value', () => {
    const score = 2 // Weak password score
    const wrapper = mount(AccountPanelPasswordMeter, {
      props: {
        score
      }
    })

    // Expect the progress linear to have correct model value
    expect(wrapper.props('score')).toBe(score)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).props('modelValue')).toBe(score * 25)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).classes()).toContain('weak')
  })

  it('applies correct color class based on the score', () => {
    const score = 3 // Strong password score
    const wrapper = mount(AccountPanelPasswordMeter, {
      props: {
        score
      }
    })

    // Expect the progress linear to have correct color class based on the score
    expect(wrapper.props('score')).toBe(score)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).props('modelValue')).toBe(score * 25)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).classes()).toContain('strong')
  })

  it('applies "too-strong" class if score is 4', () => {
    const score = 4 // Too strong password score
    const wrapper = mount(AccountPanelPasswordMeter, {
      props: {
        score
      }
    })

    // Expect the progress linear to have "too-strong" class
    expect(wrapper.props('score')).toBe(score)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).props('modelValue')).toBe(score * 25)
    expect(wrapper.findComponent({ name: 'VProgressLinear' }).classes()).toContain('too-strong')
  })
})
