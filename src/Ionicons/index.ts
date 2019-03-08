import './setup';
import Icon from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({

	key: 'vector-icons-Ionicons',
	name: 'VectorIconsIonicons',

	components: {
		Icon: Icon

	}
});
