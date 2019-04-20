import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import React from 'react';
import { createPlugin } from '@bluebase/core';
export default createPlugin({
	description: 'A BlueBase port of the React Native Vector Icons project',
	key: 'vector-icons-material-community-icons',
	name: 'Vector Icons - Material Community Icons',
	version: '1.0.0',

	components: {
		// 'HomeScreen': () => <Icon name="delete" size={100} color="green" />,
		Icon,
	},

	fonts: {
		'MaterialCommunity Icons': require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
		MaterialCommunityIcons: require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
	},
});
