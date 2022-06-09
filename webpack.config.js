
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    const deps = require("./package.json").dependencies;
    module.exports = {
    mode: "development",
    output: {
        publicPath: "auto",
        chunkFilename: "[name].[contenthash].js",
        filename: "[name].[contenthash].js",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
            fullySpecified: false,
            },
        },
        {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            },
        },
        {
            test: /\.(jpg|png|svg)$/,
            use: {
            loader: 'url-loader',
            },
        },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "react_shell_jwt",
            library: { type: 'umd' },
            filename: "remoteEntry.js",
            remotes:{
                mfe:'mfe@http://localhost:3001/remoteEntry.js'
            },
            shared: {
                ...deps,
                react: {
                singleton: true,
                requiredVersion: deps.react,
                },
                "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        }),
    ],
};