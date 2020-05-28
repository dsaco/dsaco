import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import { animated, Spring, Transition } from 'react-spring/renderprops.cjs';

class Modal extends React.PureComponent {
	state = {
		visible: false,
		src: '',
		style: {},
		toStyle: {},
	};
	open = ({ left, top, width, height, src }) => {
		const { clientWidth, clientHeight } = document.documentElement;
		document.body.classList.add('ds-body-no-scroll');

		const img = new Image();
		img.src = src;
		img.onload = () => {
			const imgWidth = img.width;
			const imgHeight = img.height;

			const offsetX = (clientWidth - width) / 2 - left;
			const offsetY = (clientHeight - height) / 2 - top;

			let scaleW = 1;
			let scaleH = 1;

			const bigerWidth = imgWidth > clientWidth;
			const bigerHeight = imgHeight > clientHeight;

			if (bigerWidth && bigerHeight) {
				if (imgWidth / imgHeight > clientWidth / clientHeight) {
					scaleW = clientWidth / width;
					scaleH = ((imgHeight / imgWidth) * clientWidth) / height;
				} else {
					scaleH = clientHeight / height;
					scaleW = ((imgWidth / imgHeight) * clientHeight) / width;
				}
			} else if (bigerWidth) {
				scaleW = clientWidth / width;
				scaleH = ((imgHeight / imgWidth) * clientWidth) / height;
			} else if (bigerHeight) {
				scaleH = clientHeight / height;
				scaleW = ((imgWidth / imgHeight) * clientHeight) / width;
			} else {
				scaleW = imgWidth / width;
				scaleH = imgHeight / height;
			}
			this.setState({
				src,
				style: { left, top, width, height },
				toStyle: {
					offsetX,
					offsetY,
					scaleW,
					scaleH,
				},
				visible: true,
			});
		};
	};
	close = () => {
		this.setState(
			{
				toStyle: {
					offsetX: 0,
					offsetY: 0,
					scaleW: 1,
					scaleH: 1,
				},
				visible: false,
			},
			() => {
				document.body.classList.remove('ds-body-no-scroll');
			}
		);
	};
	render() {
		const { visible, src, style, toStyle } = this.state;
		return (
			<Transition
				items={visible}
				from={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
				enter={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                leave={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                config={{duration: 300}}
			>
				{(visible) =>
					visible &&
					((props) => (
						<animated.div
							style={{
								position: 'fixed',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								...props,
							}}
							onClick={this.close}
						>
							<Spring
								from={{
									offsetX: 0,
									offsetY: 0,
									scaleW: 1,
									scaleH: 1,
								}}
								to={{
									offsetX: toStyle.offsetX,
									offsetY: toStyle.offsetY,
									scaleW: toStyle.scaleW,
									scaleH: toStyle.scaleH,
                                }}
                                config={{duration: 250}}
							>
								{(props) => {
									return (
										<animated.img
											src={src}
											style={{
												...style,
                                                position: 'absolute',
                                                cursor: 'zoom-out',
												transform: `translate3d(${props.offsetX}px, ${props.offsetY}px, 0) scale3d(${props.scaleW}, ${props.scaleH}, 1)`,
											}}
										/>
									);
								}}
							</Spring>
						</animated.div>
					))
				}
			</Transition>
		);
	}
}

let modalInstance;

function getInst() {
	if (modalInstance) {
		return modalInstance;
	} else {
		if (typeof document !== 'undefined') {
			const div = document.createElement('div');
			document.body.appendChild(div);
			return (modalInstance = ReactDOM.render(<Modal />, div));
		}
	}
}

export default function Img({ src, ...rest }) {
	const [loaded, setLoaded] = useState(false);
	const imgRef = useRef(null);
	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			setLoaded(true);
		};
	}, []);
	const preview = () => {
		if (loaded) {
			const {
				x: left,
				y: top,
				width,
				height,
			} = imgRef.current.getBoundingClientRect();

			getInst().open({
				top,
				left,
				width,
				height,
				src,
			});
		}
	};
	return <img src={src} onClick={preview} ref={imgRef} {...rest} />;
}
