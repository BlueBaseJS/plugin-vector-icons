import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Icons', module)
.add('Mateiral Icons', () => (
  <Icon name="delete" size={100} color="green" />
))
;