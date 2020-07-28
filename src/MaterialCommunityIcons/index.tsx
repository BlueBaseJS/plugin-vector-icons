import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import { createPlugin } from '@bluebase/core';

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
