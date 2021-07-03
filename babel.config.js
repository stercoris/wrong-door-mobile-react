module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["inline-dotenv"],
			[
				"module-resolver",
				{
					root: ["."],
					alias: {
						"@Views": "./src/views",
						"@Tabs": "./src/Navigation",
						"@Config": "./src/Config/Config",
						"@ContextProviders": "./src/ContextProviders",
						"@Helpers": "./src/Helpers",
						"@Api": "./src/Api/types",
						"@Main": "./src/Main",
						"@ApiProvider": "./src/Api/WrongDoorApiProvider",
					},
				},
			],
		],
	};
};
