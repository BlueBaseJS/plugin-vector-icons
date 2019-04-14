// import './setup';
import Icon from './components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Icons', module)
  .add('MateiralIcons', () => (
    <Icon name="delete" size={100} color="green" />
  ));