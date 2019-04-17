import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Icons', module)
.add('Mateiral Community Icons', () => (
  <Icon name="delete" size={100} color="green" />
))
;