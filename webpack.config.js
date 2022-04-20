const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: {
        Libraty:'./src/kemoverso.ts',
    },
    output: {
        library:{
            name:"Kemoverso",
            export:"default",
            type:"umd"
        },
        path: outputPath,
        filename: "kemoverso.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
    devServer: {
        static: {
            directory: __dirname,
        }
    }
};