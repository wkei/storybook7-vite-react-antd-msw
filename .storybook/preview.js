import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '../mocks'
import '../styles'

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: { handlers: handlers },
}

export const decorators = [mswDecorator];
