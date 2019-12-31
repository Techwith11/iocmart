export default {
	devServer: {
		proxy: {
			"^/api": {
				target: "http://api.iocmart.test/v1",
				ws: true,
				changeOrigin: true
			}
		}
	}
	// publicPath: process.env.NODE_ENV === 'production'
	// ? '/'
	// : '/',
};
