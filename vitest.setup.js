import { config } from '@vue/test-utils'
import vuetify from './src/vuetify'
import FontAwesomeIcon from './src/fontAwesome'
import { vi } from 'vitest'

config.global.plugins = [vuetify]
config.global.stubs = {
  FontAwesomeIcon: FontAwesomeIcon
}

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
