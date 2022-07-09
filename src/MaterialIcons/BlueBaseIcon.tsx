import { IconProps } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React from 'react';

import { Icon as BaseIcon } from './Icon';

export const Icon = (props: IconProps) => {
	const { theme } = useTheme();
	return <BaseIcon color={theme.palette.text.icon} {...props as any} />;
};

Icon.displayName = 'Icon';
