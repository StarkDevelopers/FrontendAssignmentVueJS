import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseCard from '../BaseCard.vue'

describe('BaseCard', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseCard)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders slot content', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: 'Card Content'
      }
    })
    expect(wrapper.text()).toContain('Card Content')
  })

  it('applies elevation', () => {
    const wrapper = mount(BaseCard, {
      props: {
        elevation: 8
      }
    })

    expect(wrapper.classes()).toContain('elevation-8')
  })

  it('applies rounded corners', () => {
    const wrapper = mount(BaseCard, {
      props: {
        rounded: 'lg'
      }
    })
    expect(wrapper.classes()).toContain('rounded-lg')
  })
})
