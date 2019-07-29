const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = env => {

         const $mode =  env.NODE_ENV;
         let plugins = []

         if($mode == 'production'){
            plugins = [
                new MiniCssExtractPlugin({
                    filename: 'css/[name].css'
                })
            ]
         }

        return{

            mode: $mode,
            entry:{
                index: path.resolve(__dirname, 'src/js/index.js')
            },
            output:{
                path: path.resolve('dist'),
                filename: 'bundle.js'
            },
            devServer:{
                port: 9000 
            },
            module:{
                rules:[

                    //   sass loader
                    {
                        test: /\.scss$/,
                        use:[
                            $mode == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                                                                      'css-loader',
                                                                      'sass-loader'
                        ]
                    }  

                ]
            },
            plugins
        }
    }