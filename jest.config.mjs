const defaultConfig = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: '50%',
  watchPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules']
}

export default {
  projects: [
    {
      ...defaultConfig,
      displayName: 'unit',
      collectCoverageFrom: ['src/', '!src/index.js'],
      testMatch: ['**/tests/**/*.spec.ts']
    },
    {
      ...defaultConfig,
      displayName: 'e2e',
      testMatch: ['**/tests/**/*.test.ts']
    }
  ]
}
