import Icon from 'react-native-vector-icons/MaterialIcons';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-icons',
	name: 'Vector Icons - Material Icons',
	version: '1.0.0',

	components: { Icon },

	fonts: {
		'MaterialIcons': require('react-native-vector-icons/Fonts/MaterialIcons.ttf'),
	},
});
