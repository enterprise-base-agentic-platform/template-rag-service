// Webpack Module Federation Configuration Matrix
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ui_shell",
      filename: "remoteEntry.js",
      remotes: {
        // Injected at runtime via environment configuration matrices
        ui_mfe_chat: "ui_mfe_chat@${MFE_CHAT_URL}/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
    }),
  ],
};
