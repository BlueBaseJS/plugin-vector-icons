import './setup';
import Icon from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({

	key: 'vector-icons-font-awesome',
	name: 'VectorIconsFontAwesome',

	components: {
		Icon: Icon
	}
});
