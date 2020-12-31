import { useEffect } from 'react';

/**
 * 失去焦点回调
 * @param {object} ref 容器ref
 * @param {function}  回调方法
 * @return {null} 无返回值
 */

/*
	const ref = useRef(null);
	useClickAway(ref, () => {
		setVisible(false);
	});
*/

export default function useClickAway(ref, fn) {
	useEffect(() => {
		function handle(e) {
			if (!ref.current.contains(e.target)) {
				fn && fn();
			}
		}
		document.addEventListener('mousedown', handle);
		document.addEventListener('touchstart', handle);
		return () => {
			document.removeEventListener('mousedown', handle);
			document.removeEventListener('touchstart', handle);
		};
	}, []);
}
