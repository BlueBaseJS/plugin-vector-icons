import { createPlugin } from '@bluebase/core';

import MaterialIcons from '../../Fonts/MaterialIcons.ttf';
import { Icon } from './Icon';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-icons',
	name: 'Vector Icons - Material Icons',
	version: '1.0.0',

	components: { Icon: Icon as any },

	fonts: {
		// Native
		'Material Icons': MaterialIcons,

		// Web
		MaterialIcons,
	},
});
