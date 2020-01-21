const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
	.sass("resources/sass/app.scss", "public/css")
	.webpackConfig({
		resolve: {
			alias: {
				"@": path.join(__dirname, "resources", "js")
			}
		},
		output: {
			path: path.join(__dirname, "public"),
			chunkFilename: "js/[name].bundle.js"
		}
	});
