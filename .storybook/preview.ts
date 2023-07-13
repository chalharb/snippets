import type { Preview } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";

import results from "../coverage/.test-results.json";

export const decorators = [
  withTests({
    results,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
