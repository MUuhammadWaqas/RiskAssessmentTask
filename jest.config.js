module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      babelConfig: true,
      allowSyntheticDefaultImports: true,
    },
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation|@babel)/)',
  ],
};
