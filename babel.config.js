module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["inline-dotenv"],
			[
				"babel-plugin-tsconfig-paths",
				{
					relative: false,
					extensions: [
						".js",
						".jsx",
						".ts",
						".tsx",

						".android.js",
						".android.ts",
						".android.tsx",

						".web.js",
						".web.ts",
						".web.tsx",

						".ios.js",
						".ios.ts",
						".ios.tsx",
					],
					rootDir: ".",
					tsconfig: "tsconfig.json",
					transformFunctions: [
						"require",
						"require.resolve",
						"System.import",
						"jest.genMockFromModule",
						"jest.mock",
						"jest.unmock",
						"jest.doMock",
						"jest.dontMock",
						"jest.setMock",
						"require.requireActual",
						"require.requireMock",
					],
				},
			],
		],
	};
};
