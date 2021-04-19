module.exports = {
  stories: ["../**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
      // use babel-plugin-react-docgen for docgen support.
      require.resolve("babel-plugin-react-docgen"),
    ];

    for (let i = 0; i < config.module.rules.length; i++) {
      if (config.module.rules[i].test.test("file.css")) {
        config.module.rules[i].exclude = /\.module\.css$/;
      }

      if (config.module.rules[i].test.test("file.js")) {
        // Gatsby files need transpiling
        config.module.rules[i].exclude = [/node_modules\/(?!(gatsby)\/)/];

        // Language options for Gatsby
        config.module.rules[i].use[0].options.plugins = [
          // use @babel/plugin-proposal-class-properties for class arrow functions
          require.resolve("@babel/plugin-proposal-class-properties"),
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          require.resolve("babel-plugin-remove-graphql-queries"),
        ];
      }
    }

    // Support CSS Modules
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
      ],
    });

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
  },
};
