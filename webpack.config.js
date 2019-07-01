const path = require('path');

module.exports = {
    context: __dirname,
    entry: './lib/main.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    devtool: 'eval-source-map',

};
