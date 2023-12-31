import exampleConfig from './example-config.json';

console.log(exampleConfig);

/* eslint-disable */
export default {
  displayName: 'test-jest-ts-compile-error',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/test-jest-ts-compile-error',
};
