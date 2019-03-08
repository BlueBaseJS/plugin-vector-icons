declare var module: any;

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Icon = getComponent('Icon');

storiesOf('MateiralCommunityIcons', module)
  .add('MateiralCommunityIcons', () => (
    <Icon name="airplane" size={30} color="blue" />
  ));