import Icon from 'react-native-vector-icons/MaterialIcons';
import { createPlugin } from '@bluebase/core';

// TODO: This is a temp fix for:
// https://github.com/react-native-community/cli/issues/228
// import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
// tslint:disable-next-line: no-var-requires
const MaterialIcons = require('../../Fonts/MaterialIcons.ttf');

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-icons',
	name: 'Vector Icons - Material Icons',
	version: '1.0.0',

	components: { Icon },

	fonts: {
		// Native
		'Material Icons': MaterialIcons,

		// Web
		MaterialIcons,
	},
});
