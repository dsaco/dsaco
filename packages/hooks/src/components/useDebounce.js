import { useEffect } from 'react';

/**
 * 去抖动
 * @param {function} fn 处理函数
 * @param {number} [wait=0] 延迟时间
 * @param {array} deps 依赖数组
 * @return {null} 无返回值
 */

/*
	useDebounce(
		() => {
			fetch(query);
		},
		500,
		[query]
	);
*/

export function useDebounce(fn, wait = 0, deps = []) {
	useEffect(() => {
		const timer = setTimeout(fn, wait);
		return () => {
			clearTimeout(timer);
		};
	}, deps);
}
