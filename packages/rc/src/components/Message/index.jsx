import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-spring/renderprops.cjs';

const now = Date.now();
let key = 1;
let noticeInstance;

function Item({ wait, style, msg, type = '', onClose }) {
	useEffect(() => {
		const timer = setTimeout(onClose, wait * 1000 || 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<div className={`ds-message-item ${type}`} style={style}>
			<span>{msg}</span>
		</div>
	);
}

class Container extends React.Component {
	state = {
		msgs: [],
	};
	add = ({ msg, wait, type }) => {
		this.setState({
			msgs: [
				{
					id: `ds-message-${now}-${key++}`,
					msg,
					wait,
					type,
				},
			],
		});
	};
	remove = () => {
		this.setState({
			msgs: [],
		});
	};
	render() {
		return (
			<Transition
				items={this.state.msgs}
				keys={(item) => item.id}
				from={{ opacity: 0, transform: 'scale(0) translateX(-50%)' }}
				enter={{ opacity: 1, transform: 'scale(1) translateX(-50%)' }}
				leave={{ opacity: 1, transform: 'scale(0) translateX(-50%)' }}
			>
				{(item) => (props) => (
					<Item
						key={item.id}
						{...item}
						style={props}
						onClose={this.remove}
					/>
				)}
			</Transition>
		);
	}
}

function getInst() {
	if (noticeInstance) {
		return noticeInstance;
	} else {
		if (typeof document !== 'undefined') {
			const div = document.createElement('div');
			div.className = 'ds-message';
			document.body.appendChild(div);
			return (noticeInstance = ReactDOM.render(<Container />, div));
		}
	}
}

export default class Message {
	static show(msg, wait) {
		getInst().add({
			msg,
			wait,
		});
	}
	static success(msg, wait) {
		getInst().add({
			msg,
			type: 'success',
			wait,
		});
	}
	static info(msg, wait) {
		getInst().add({
			msg,
			type: 'info',
			wait,
		});
	}
	static warning(msg, wait) {
		getInst().add({
			msg,
			type: 'warning',
			wait,
		});
	}
	static error(msg, wait) {
		getInst().add({
			msg,
			type: 'error',
			wait,
		});
	}
	static dark(msg, wait) {
		getInst().add({
			msg,
			type: 'dark',
			wait,
		});
	}
}
