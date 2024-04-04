import { createPlugin } from '@bluebase/core';

import MaterialCommunityIcons from '../../Fonts/MaterialCommunityIcons.ttf';
import { VERSION } from '../version';
import { Icon } from './BlueBaseIcon';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-community-icons',
	name: 'Vector Icons - Material Community Icons',
	version: VERSION,

	components: { Icon: Icon as any },

	fonts: {
		// react native
		'Material Design Icons': MaterialCommunityIcons,
		// 'material-community': MaterialCommunityIcons,

		// web
		MaterialCommunityIcons,
	},
});
