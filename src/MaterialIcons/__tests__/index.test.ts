import { BlueBase } from '@bluebase/core';
import { MaterialIcons } from '../../';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(MaterialIcons);
	await BB.boot();

	expect(BB.Plugins.has('vector-icons-material-icons')).toBe(true);
	expect(BB.Fonts.has('MaterialIcons')).toBe(true);
	expect(BB.Components.has('Icon')).toBe(true);
});
