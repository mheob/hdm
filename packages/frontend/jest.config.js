module.exports = {
  roots: ['<rootDir>'],
  coveragePathIgnorePatterns: ['../../node_modules/', '<rootDir>/__test__/', '<rootDir>/styles/'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFiles: ['<rootDir>/__test__/enzyme.ts'],
  snapshotSerializers: ['@emotion/jest/serializer', 'enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { cwd: __dirname }],
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
