const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const hotClient = require('webpack-hot-client');

const app = require('./stub');
const config = require('./webpack.config');
const compiler = webpack(config);
const options = {};
const {publicPath} = config.output;

// we recommend calling the client _before_ adding the dev middleware
const client = hotClient(compiler, options);
const {server} = client;
server.on('listening', () => {
    app.use(webpackDevMiddleware(compiler, {publicPath}));
    // Fallback when no previous route was matched
    app.get('*', (req, res, next) => {
        const filename = path.resolve(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
});