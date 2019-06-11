import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import { createPlugin } from '@bluebase/core';

// // TODO: This is a temp fix for:
// // https://github.com/react-native-community/cli/issues/228
// // tslint:disable-next-line: no-var-requires
// const Font = require('../../MaterialCommunityIcons.ttf');

// // const Font = require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf');

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-community-icons',
	name: 'Vector Icons - Material Community Icons',
	version: '1.0.0',

	components: {
		Icon,
	},

	fonts: {
		// react native
		'Material Design Icons': MaterialCommunityIcons,

		// web
		MaterialCommunityIcons,
	},
});
