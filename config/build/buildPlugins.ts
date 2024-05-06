import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:
                `css/${isDev ? '[name].css' : '[name].[contenthash:8].css'}`,
            chunkFilename:
                `css/${
                    isDev ? '[name].[id].css' : '[id].[contenthash:8].css'}`,
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
