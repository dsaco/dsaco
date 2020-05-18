import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export default function Ripple({ color = 'rgba(0, 0, 0, .25)' }) {
	const [ripples, setRipples] = useState([]);
	const [lastTouchTime, setLTT] = useState(0);

	const onMouseDown = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setLTT(Date.now());
		// 获取当前元素的左上角坐标、宽高
		const { x, y, width, height } = e.target.getBoundingClientRect();
		// 点击坐标
		const _x = e.clientX || e.pageX;
		const _y = e.clientY || e.pageY;
		const w = Math.abs(_x - x);
		const h = Math.abs(_y - y);
		const max_w = Math.max(width - w, w);
		const max_h = Math.max(height - h, h);
		const r = Math.sqrt(max_w ** 2 + max_h ** 2);

		const ripple = {
			key: `ripple-${Date.now()}`,
			top: _y - y - r,
			left: _x - x - r,
			width: r * 2,
			height: r * 2,
		};
		ripples.push(ripple);
		setRipples(ripples);
	};
	const onRemove = () => {
		const diff = Date.now() - lastTouchTime;
		if (diff > 300) {
			setRipples([]);
		} else {
			setTimeout(() => {
				ripples.shift();
				setRipples(ripples);
			}, 350 - diff);
		}
	};
	const transitions = useTransition(ripples, (item) => item.key, {
		from: { transform: 'scale(0)', opacity: 1 },
		enter: { transform: 'scale(1)' },
		leave: { opacity: 0 },
	});
	return (
		<div
			onMouseDown={onMouseDown}
			onMouseLeave={onRemove}
			onMouseUp={onRemove}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: 'hidden',
			}}
		>
			{transitions.map(({ item, props, key }) => {
				return (
					<animated.div
						key={key}
						style={{
							...item,
							...props,
							backgroundColor: color,
							position: 'absolute',
							pointerEvents: 'none',
							borderRadius: '50%',
						}}
					></animated.div>
				);
			})}
		</div>
	);
}
