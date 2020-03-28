module.exports = {
	rules: {
		// 强制所有控制语句使用一致的括号风格
		curly: 2,
		// 禁止在数组括号内出现空格
		'array-bracket-spacing': 1,
		// 要求箭头函数的参数使用圆括号
		'arrow-parens': 2,
		// 强制在代码块中开括号前和闭括号后有空格
		'block-spacing': 1,
		// 不允许多个空行 默认最多2行
		'no-multiple-empty-lines': 1,
		// 强制箭头函数的箭头前后使用一致的空格
		'arrow-spacing': 1,
		// 禁止重复模块导入
		'no-duplicate-imports': 2,
		// 要求使用 let 或 const 而不是 var
		'no-var': 2,
		// 强制在逗号前后使用一致的空格
		'comma-spacing': 1,
		// 要求或禁止末尾逗号
		// always-multiline：当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
		'comma-dangle': [1, 'always-multiline'],
		// 强制使用一致的分号
		semi: 1,
		// 强制在块之前使用一致的空格
		'space-before-blocks': 1,
		// 强制使用一致的反勾号、双引号或单引号
		quotes: [1, 'single', { allowTemplateLiterals: true }],
		// 强制所有不包含双引号的 JSX 属性值使用双引号
		'jsx-quotes': 1,
	},
};
