import React, { useMemo } from 'react';

import Ripple from '../Ripple';

export default function Button({
	type = 'ripple',
	theme,
	rippleColor,
	link,
	outline,
	disabled,
	children,
	className,
	...rest
}) {
	const _rippleColor = useMemo(() => {
		if (type === 'ripple') {
			if (rippleColor) {
				return rippleColor;
			}
			let color = 'rgba(0, 0, 0, 0.25)';
			if (link || outline) {
				if (theme === 'primary') {
					color = 'rgba(33, 150, 243, 0.25)';
				} else if (theme === 'secondary') {
					color = 'rgba(225, 0, 80, 0.25)';
				}
			} else {
				if (theme) {
					color = 'rgba(255, 255, 255, 0.3)';
				}
			}
			return color;
		}
	}, [type, theme, link, outline]);
	return (
		<button
			className={`${className} ds-button${
				outline ? '-outline' : link ? '-link' : ''
			} ${theme} ${disabled ? 'disabled' : ''}`}
			{...rest}
		>
			{children}
			{type === 'ripple' && <Ripple color={_rippleColor} />}
		</button>
	);
}
