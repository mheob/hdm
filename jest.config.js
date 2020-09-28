module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  setupFiles: ["<rootDir>/src/__test__/enzyme.ts"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/__test__/__hoc__/"],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { cwd: __dirname }],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
}
