import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseTextButton from '../BaseTextButton.vue'

describe('BaseTextButton', () => {
  it('renders the button with the provided text', () => {
    const buttonText = 'Click me'
    const wrapper = mount(BaseTextButton, {
      props: {
        buttonText
      }
    })

    // Expect the button to render with the provided text
    expect(wrapper.text()).toContain(buttonText)
  })
})
