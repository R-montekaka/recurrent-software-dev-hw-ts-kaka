// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

require("jest-fetch-mock").enableMocks();
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
// fetchMock.dontMock();
