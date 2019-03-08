import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
import { Entypo, /*FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons */ } from '../../src/index';
// TODO: Only for evaluation, remove this
import DummyPlugin from './sample';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [
		// TODO: Only for evaluation, remove this
		DummyPlugin,
		Entypo,
		// FontAwesome,
		// Ionicons,
		// MaterialCommunityIcons,
		// MaterialIcons
	],
	// config: {

	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/storybook/wallpaper.jpg'),
	// 	},
	// }
};

export default deepmerge(commonBootOptions, bootOptions);
