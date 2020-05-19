import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring';

let progressInstance;

export function Progress({ visible = false, close }) {
	const [percent, set] = useState(0);
	useEffect(() => {
		let timer;
		if (visible) {
			set(0);
			timer = setInterval(() => {
				set((prev) => {
					if (prev < 20) {
						return prev + parseInt(Math.random() * 20);
					} else if (prev < 50) {
						return prev + parseInt(Math.random() * 10);
					} else if (prev < 80) {
						return prev + parseInt(Math.random() * 5);
					} else if (prev < 98) {
						return prev + parseInt(Math.random() * 2);
					} else {
						clearInterval(timer);
						return prev;
					}
				});
			}, 500);
		} else {
			set(100);
			timer = setTimeout(close, 300);
		}
		return () => {
			clearInterval(timer);
			clearTimeout(timer);
		};
	}, [visible]);
	const transitions = useTransition(visible, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	return transitions.map(
		({ item, key, props }) =>
			item && (
				<animated.div className="ds-progress" key={key} style={props}>
					<div
						style={{ transform: `scale3d(${percent / 100}, 1, 1)` }}
					></div>
				</animated.div>
			)
	);
}

class ProgressUi extends React.Component {
	state = {
		visible: false,
	};
	start = () => {
		this.setState({ visible: true });
	};
	done = () => {
		this.setState({ visible: false });
	};
	render() {
		return <Progress visible={this.state.visible} close={this.done} />;
	}
}

function getInst() {
	if (progressInstance) {
		return progressInstance;
	} else {
		const div = document.createElement('div');
		document.body.appendChild(div);
		return (progressInstance = ReactDOM.render(<ProgressUi />, div));
	}
}

export default class ProgressApi {
	static start = getInst().start;
	static done = getInst().done;
}
