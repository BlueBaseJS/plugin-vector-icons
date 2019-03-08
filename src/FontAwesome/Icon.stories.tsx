declare var module: any;

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Icon = getComponent('Icon');

storiesOf('FontAwesome', module)
  .add('FontAwesome', () => (
    <Icon name="rocket" size={30} color="#900" />
  ));