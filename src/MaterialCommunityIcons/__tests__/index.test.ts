import { BlueBase } from '@bluebase/core';
import Plugin from '../index';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	await BB.boot();

	expect(BB.Plugins.has('vector-icons-material-community-icons')).toBe(true);
	expect(BB.Fonts.has('Material Icons')).toBe(true);
	expect(BB.Components.has('Icon')).toBe(true);
});
