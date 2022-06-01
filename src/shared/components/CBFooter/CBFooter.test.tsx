import React from 'react';
import { render } from '@testing-library/react';
import CBFooter from './CBFooter';

test('CBFooter: renders footer component', () => {
  expect(render(<CBFooter />)).toBeTruthy();
});
