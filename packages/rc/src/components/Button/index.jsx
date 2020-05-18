import React from 'react';

import Ripple from '../Ripple';

export default function Button({
	link,
	outline,
	type,
	disabled,
    children,
    className,
    rippleColor = 'rgba(0, 0, 0, 0.25)',
	...rest
}) {
	if (link || outline) {
		if (type === 'primary') {
			rippleColor = 'rgba(33, 150, 243, 0.25)';
		} else if (type === 'secondary') {
			rippleColor = 'rgba(225, 0, 80, 0.25)';
		}
	} else {
		if (type) {
			rippleColor = 'rgba(255, 255, 255, 0.3)';
		}
	}
	return (
		<button
			className={`${className} ds-button${
				outline ? '-outline' : link ? '-link' : ''
			} ${type} ${disabled ? 'disabled' : ''}`}
			{...rest}
		>
			{children}
			<Ripple color={rippleColor} />
		</button>
	);
}
