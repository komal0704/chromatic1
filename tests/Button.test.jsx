// tests/Button.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../src/components/Button.stories.jsx';
import { generateImage } from 'jsdom-screenshot';
import Button from '../src/components/button.jsx';
expect.extend({ toMatchImageSnapshot });
console.log(stories);
const { Primary, Secondary } = composeStories(stories);

test('Primary Button matches snapshot', async () => {
  render(<Primary />);
  const image = await generateImage();
  expect(image).toMatchImageSnapshot();
});

test('Secondary Button matches snapshot', async () => {
  render(<Secondary />);
  const image = await generateImage();
  expect(image).toMatchImageSnapshot();
});
test('button', async () => {
  render(<Button />);
  const image = await generateImage();
  expect(image).toMatchImageSnapshot();
});