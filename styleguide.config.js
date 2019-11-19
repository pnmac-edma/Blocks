const path = require('path');

module.exports = {
	title: 'Blocks Docs',
	components: './src/components/**/[A-Z]*.js',
	showSidebar: false,
	skipComponentsWithoutExample: true,
	styleguideDir: './docs',
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js');
		return `import ${name} from '@edma/blocks/components/${name}';`;
	},

	// Example of overriding the CLI message in local development.
	// Uncomment/edit the following `serverHost` entry to see in output
	// serverHost: 'your-domain',
	printServerInstructions(config) {
		// eslint-disable-next-line no-console
		console.log(`View Blocks Docs at: http://${config.serverHost}:${config.serverPort}`);
	},
};
