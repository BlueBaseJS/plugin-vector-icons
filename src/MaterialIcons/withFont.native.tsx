import { Font } from 'expo';
import React from 'react';

export const withFont = (Component: React.ComponentType<any>) => {

	return class FontProvider extends React.Component {

		readonly state = {
			isFontLoaded: false
		};

		async componentWillMount() {
			await Font.loadAsync({ 'Material Icons': require('react-native-vector-icons/Fonts/MaterialIcons.ttf') });
			this.setState({ isFontLoaded: true });
		}

		render() {
			if (!this.state.isFontLoaded) {
				return null;
			}

			return <Component {...this.props} />;
		}
	};
};