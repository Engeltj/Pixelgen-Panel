import { configure } from '@storybook/react';

// import 'testing.css';

const req = require.context('../app/stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);