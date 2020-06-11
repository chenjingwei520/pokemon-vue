const Router = require('koa-router');
const router = new Router();
// const homeCtl = require('../controllers/home')
const { index } = require('../controllers/home')
// es6 语法
router.get('/', index);

module.exports = router;
