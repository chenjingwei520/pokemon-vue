// 批量加载routes目录底下的所有路由，不需要再一个个的导入

const fs = require('fs');
module.exports = (app) => {
	fs.readdirSync(__dirname).forEach(file => {
		if (file === 'index.js') {
			return;
		}
		const route = require(`./${file}`);
		app.use(route.routes()).use(route.allowedMethods());
	});
}
