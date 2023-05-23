// module.exports = {
//   "plugins": [
//     [
//       "@babel/plugin-transform-react-jsx",
//       {
//         "throwIfNamespace": false, // defaults to true
//         "runtime": "automatic", // defaults to classic
//         "importSource": "custom-jsx-library" // defaults to react
//       }
//     ]
//   ]
// };

// module.exports = {
//   "presets": ["@babel/preset-env"]
// }

module.exports = {
	presets: [
		['@babel/preset-env', { targets: { esmodules: true } }],
		['@babel/preset-react', { runtime: 'automatic' }],
	],
};
