/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const SWPreCacheWebpackPlugin = require('sw-precache-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const serviceWorkerConfig = {
  filename: 'service-worker.js',
  forceDelete: true,
  minify: false,
  runtimeCaching: [{
    handler: 'fastest',
    urlPattern: /[.](png|jpg|css|tff|svg)/,
  },
  {
    handler: 'networkFirst',
    urlPattern: /^http.*/,
  },
  ],
  staticFileGlobs: ['static/**/*'],
  staticFileGlobsIgnorePatterns: [/\.next\//],
};
const urlLoaderConfig = {
  loader: 'url-loader?limit=100000',
  test: /\.(svg|png|jpg|gif|pdf|jpeg|woff|ttf|eot)$/i,
};
const fileLoaderConfig = {
  test: /\.(woff(2)?|ttf|eot|svg!png!jpg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [{ loader: 'file-loader' }],
};
const getEnvironmentValues = (environment) => {
  const currentPath = path.join(__dirname);
  const basePath = `${currentPath}/.env`;
  const envPath = `${basePath}.${environment}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const values = Object.keys(fileEnv).reduce((prev, next) => {
    const clonePrev = { ...prev };

    clonePrev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);

    return clonePrev;
  }, {});

  return values;
};

const configurations = {
  compress: true,
  devIndicators: { autoPrerender: false },
  webpack: (config) => {
    const {
      ANALYZE, ENVIRONMENT,
    } = process.env;
    const cloneConfig = { ...config };

    cloneConfig.node = { fs: 'empty' };

    // Add Webpack plugins
    cloneConfig.plugins.push(new webpack.DefinePlugin(getEnvironmentValues(ENVIRONMENT)));
    cloneConfig.plugins.push(new webpack.EnvironmentPlugin(process.env));

    if (ENVIRONMENT !== 'dev') {
      cloneConfig.plugins.push(new SWPreCacheWebpackPlugin(serviceWorkerConfig));
    }

    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }

    // Add Webpack module rules
    cloneConfig.module.rules.push(fileLoaderConfig);
    cloneConfig.module.rules.push(urlLoaderConfig);

    return cloneConfig;
  },
};

module.exports = withCSS(configurations);
