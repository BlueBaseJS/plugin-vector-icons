import './setup';
import Icon from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({

	key: 'vector-icons-material-icons',
	name: 'VectorIconsMaterialIcon',

	components: {
		Icon: Icon

	}
});
