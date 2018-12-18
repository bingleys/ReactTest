/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppMain from "./web/AppMain";

AppRegistry.registerComponent(appName, () => AppMain);
