const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/**
 * @type { import('jest').Config }
 */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@components': '<rootDir>/components/index.ts'
  },
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
