export default {
  testEnvironment: 'node',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['js', 'ts', 'd.ts'],
};
