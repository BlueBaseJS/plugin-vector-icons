import './setup';
import Icon from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({

	key: 'vector-materialCommunity-icons',
	name: 'VectorMaterialCommunityIcons',

	components: {
		Icon: Icon

	}
});
