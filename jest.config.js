const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/**
 * @type { import('jest').Config }
 */
const customJestConfig = {
  automock: false,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components': '<rootDir>/components/index.ts',
    '^@lib/query': '<rootDir>/lib/query/index.ts',
    '^@lib/schema': '<rootDir>/lib/schema/index.ts',
    '^@lib/helpers': '<rootDir>/lib/index.ts'
  },
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
