import { server } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import configuration from '../webpack/webpack.config.base';

export default server(configuration, settings);
