import React from 'react';
import { render } from '@testing-library/react';
import CBHeader from './CBHeader';

test('CBHeader: renders footer component', () => {
  expect(render(<CBHeader />)).toBeTruthy();
});
