## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

## package.json

``` bash
{
  "name": "react_redux_webpack_starter",
  "version": "1.0.0",
  "description": "Boilerplate for React-Redux",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "./node_modules/.bin/webpack --mode production"
  },
  "author": "Satya",
  "license": "ISC",
  "dependencies": {
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^7.2.0",
    "redux": "^4.0.5"
  },
  "devDependencies": {
    "autoprefixer": "^9.0.2",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.1.0",
    "node-sass": "^4.14.1",
    "postcss-loader": "^2.1.6",
    "redux-devtools-extension": "^2.13.8",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.20.3",
    "webpack": "^4.4.0",
    "webpack-cli": "^2.0.13",
    "webpack-dev-server": "^3.11.0"
  },
  "browserslist": {
    "production": [
      "last 3 version"
    ]
  }
}


```


## webpack.config.js

``` bash

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = (env, options) => {
    const isDevMode = options.mode === "development";

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: '/',
        },
        devtool: isDevMode ? "source-map" : false,
        resolve: {
            extensions: [".js"],
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    use: [
                        "babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: isDevMode
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("autoprefixer")()
                                ],
                                sourceMap: isDevMode
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevMode
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "assets/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin([settings.distPath], {
                verbose: true
            }),
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
        ]
    };
};


```


## .babelrc

``` bash

{
  "presets": ["env", "react"]
}


```

# Folder Structure

```
├── node_modules
├── public
│   ├── index.html
├── src
│   ├── components
│   |   ├── Footer.js
│   |   ├── Header.js
│   |   ├── Home.js
│   ├── redux
│   |   ├── actions
│   |   ├── constants
│   |   ├── reducers
│   ├── App.js
│   ├── index.js
├── .babelrc
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js

```