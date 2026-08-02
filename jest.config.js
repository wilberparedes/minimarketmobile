module.exports = {
  preset: "jest-expo",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/__tests__/jest.setup.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|expo-modules-core)",
  ],
}
