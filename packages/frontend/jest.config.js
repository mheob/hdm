module.exports = {
  roots: ['<rootDir>'],
  coveragePathIgnorePatterns: ['../../node_modules/', '<rootDir>/test/', '<rootDir>/styles/'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next|containers)[/\\\\]'],
  testEnvironment: 'jsdom',
  testRegex: '\\.(test|spec)\\.tsx?$',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { cwd: __dirname }],
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
