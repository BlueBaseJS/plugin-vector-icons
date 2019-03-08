declare var module: any;

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Icon = getComponent('Icon');

storiesOf('Ionicons', module)
  .add('Ionicons', () => (
    <Icon name="md-checkmark-circle" size={32} color="green" />
  ));