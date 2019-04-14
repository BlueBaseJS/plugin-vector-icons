const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = (baseConfig, env, config) => {

	config = storybookWebpackConfigs({ config });

	config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: "babel-loader",
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        presets: [
					"@bluebase/code-standards/babel.config"
				]
      }
    }
  });

	// config.module.rules.push({
  //   test: /\.ttf$/,
  //   loader: "url-loader", // or directly file-loader
  //   include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
  // });
  
	return config;
};
