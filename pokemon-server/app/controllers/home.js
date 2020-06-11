class HomeController {
	index(contxt) {
		contxt.body = '这是主页';
	}
}

module.exports = new HomeController();