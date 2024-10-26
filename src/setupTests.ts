// Adds custom jest matchers for asserting on DOM nodes
// import '@testing-library/jest-dom'; // Not needed if one does not want to use jest matchers.

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Ensure cleanup happens between tests
afterEach(() => {
  cleanup();
});
