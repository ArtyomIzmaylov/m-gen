const path = require("path");
module.exports ={
    entry: {
        mGen: "./build/app.js"

    },
    output: {
        filename: '[name].bundle.js',
        publicPath: "/",
        path: path.join(__dirname, 'dist'),
        clean: true
    },
    mode : 'development',
    target: 'node',
    module: {
        rules: [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
