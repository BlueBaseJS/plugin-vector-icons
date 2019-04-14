// import './setup';
import Icon from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-icons',
	name: 'Vector Icons - MaterialIcons',
	version: '1.0.0',

	components: { Icon },

	fonts: {
		'MaterialIcons': require('react-native-vector-icons/Fonts/MaterialIcons.ttf')
	},

	// filters: {
	// 	'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
	// 		BB.Components.addHocs('BlueBaseContent', withFont);
	// 		return bootOptions;
	// 	},
	// },
});
