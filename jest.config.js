module.exports = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json", "vue"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  }
};
