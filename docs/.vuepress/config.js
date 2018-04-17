module.exports = {

	base : "/demo/",
	title : "Documentation Demo",
	description: "Documentation description",
	head: [
		['link', { rel: 'icon', href: `/logo.png` }]
	],
	serviceWorker: true,
	themeConfig: {
		repo: 'aryaprakasa/demo',
		docsDir: 'docs',
		nav: [
			{
				text: 'Theme Setup',
				link: '/setup/',
			}
		]
	}

}