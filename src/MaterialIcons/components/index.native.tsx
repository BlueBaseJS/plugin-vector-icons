declare var global: { __expo: any };
import React from 'react';
import { Text } from 'react-native';

function getIcon() {

	if (global.__expo && global.__expo.Icon && global.__expo.Icon.MaterialIcons) {
    // Snack doesn't properly bundle vector icons from subpath
    // Use icons from the __expo global if available
		return global.__expo.Icon.MaterialIcons;
	}

	let MaterialIcons;

	try {
		// Optionally require vector-icons
		MaterialIcons = require('react-native-vector-icons/MaterialIcons').default;
	} catch (e) {

		let isErrorLogged = false;

			// Fallback component for icons
		MaterialIcons = ({ name, color, size, ...rest }) => {

			if (!isErrorLogged) {
				// tslint:disable: max-line-length no-console
				if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)) {
					console.error(e);
				}

				console.warn(
				`Tried to use the icon '${name}' in a component from 'react-native-paper', but 'react-native-vector-icons' could not be loaded.`,
				`To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.`
				);

				isErrorLogged = true;
			}

			return (
				<Text
					{...rest}
					style={[{ backgroundColor: 'transparent' }, { color, fontSize: size }]}
					pointerEvents="none"
				>;
					□
				</Text>
			);
		};

		return MaterialIcons;
	}
}

export default getIcon();
