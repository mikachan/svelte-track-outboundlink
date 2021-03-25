module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true,
			},
		],
	},
	moduleFileExtensions: ['ts', 'js', 'svelte'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
