module.exports = {
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/src/__test__/enzyme.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/__test__/__hoc__/"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]"],
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { cwd: __dirname }],
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
}
