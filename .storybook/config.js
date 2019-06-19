import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';

addDecorator(withInfo); 

// const req = require.context('../src', true, /\.stories\.js$/); <-- replaced
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);