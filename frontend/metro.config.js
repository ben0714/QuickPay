const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  ...require('node-libs-react-native'),
  crypto: require.resolve('crypto-browserify'),
  stream: require.resolve('stream-browserify'),
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
