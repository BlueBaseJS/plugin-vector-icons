import React from 'react';

export const withFont = (Component: React.ComponentType<any>) => {

	return class FontProvider extends React.Component {

		render() {
			return <Component {...this.props} />;
		}
	};
};