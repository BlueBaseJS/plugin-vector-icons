import { BlueBase } from '@bluebase/core';
import { MaterialCommunityIcons } from '../../';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(MaterialCommunityIcons);
	await BB.boot();

	expect(BB.Plugins.has('vector-icons-material-community-icons')).toBe(true);
	expect(BB.Fonts.has('MaterialCommunityIcons')).toBe(true);
	expect(BB.Components.has('Icon')).toBe(true);
});
