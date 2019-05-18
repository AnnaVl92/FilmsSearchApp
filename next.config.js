if (typeof require !== 'undefined') {
    require.extensions['.css'] = () => {};
}

const withCSS = require('@zeit/next-css');
module.exports = withCSS();
