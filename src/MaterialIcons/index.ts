import { createPlugin } from '@bluebase/core';

import MaterialIcons from '../../Fonts/MaterialIcons.ttf';
import { VERSION } from '../version';
import { Icon } from './BlueBaseIcon';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-icons',
	name: 'Vector Icons - Material Icons',
	version: VERSION,

	components: { Icon: Icon as any },

	fonts: {
		// Native
		'Material Icons': MaterialIcons,

		// Web
		MaterialIcons,
	},
});
