import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

storiesOf('Icons', module)
	.add('Mateiral Icons', () => (
		<Icon name="delete" size={100} color="green" />
	))
;