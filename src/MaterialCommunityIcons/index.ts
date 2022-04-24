import { createPlugin } from '@bluebase/core';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

import { Icon } from './Icon';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-community-icons',
	name: 'Vector Icons - Material Community Icons',
	version: '1.0.0',

	components: { Icon: Icon as any },

	fonts: {
		// react native
		'Material Design Icons': MaterialCommunityIcons,

		// web
		MaterialCommunityIcons,
	},
});
