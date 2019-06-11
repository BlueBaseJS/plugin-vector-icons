import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import { createPlugin } from '@bluebase/core';

// TODO: This is a temp fix for:
// https://github.com/react-native-community/cli/issues/228
// tslint:disable-next-line: no-var-requires
// const Font = require('../../MaterialIcons.ttf');

// const Font = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');

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
