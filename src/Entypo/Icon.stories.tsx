declare var module: any;

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Icon = getComponent('Icon');

storiesOf('Entypo', module)
	.add('Entypo', () => (
		<Icon name="facebook" size={30} color="blue" />
    ));