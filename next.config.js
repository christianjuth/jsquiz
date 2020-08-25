// next.config.js

module.exports = {
  excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
  webpack: (config, options) => {
    
    config.resolve.alias['react'] = 'preact/compat';
    config.resolve.alias['react-dom'] = 'preact/compat';

    return config;
  },
}
