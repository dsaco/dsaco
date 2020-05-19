import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-spring/renderprops';

const now = Date.now();
let key = 1;
let noticeInstance;

function Item({ wait, style, id, onClose, msg, type = '' }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose(id);
		}, wait * 1000 || 3000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<div className={`ds-notification-item ${type}`} style={style}>
			<span>{msg}</span>
			<span onClick={() => onClose(id)} className="ds-notification-close">
				x
			</span>
		</div>
	);
}

class Container extends React.Component {
	state = {
		notices: [],
	};
	add = ({ msg, wait, type }) => {
		this.setState((prevState) => {
			return {
				notices: [
					...prevState.notices,
					{
						id: `ds-notification-${now}-${key++}`,
						msg,
						wait,
						type,
					},
				],
			};
		});
	};
	remove = (id) => {
		this.setState((prevState) => ({
			notices: prevState.notices.filter((l) => l.id !== id),
		}));
	};
	render() {
		const { notices } = this.state;
		return (
			<Transition
				items={notices}
				keys={(item) => item.id}
				from={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
				enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
				leave={{ opacity: 0, transform: 'translate3d(0, -100%, 0)' }}
			>
				{(item) => (props) => (
					<Item
						key={item.id}
						{...item}
						onClose={this.remove}
						style={props}
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
		const div = document.createElement('div');
		div.className = 'ds-notification';
		document.body.appendChild(div);
		return (noticeInstance = ReactDOM.render(<Container />, div));
	}
}

export default class Notice {
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
