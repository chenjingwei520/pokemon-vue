const Router = require('koa-router');
const jwt = require('koa-jwt')
const usersCtl = require('../controllers/users')

const router = new Router({
	prefix: '/users'
})

const {
	secret
} = require('../config');

// 认证
const auth = jwt({ secret });
// 授权
const checkOwner = async (contxt, next) => {
	if (contxt.params.id != contxt.state.user._id) {
		contxt.throw(403, '没有权限')
	}

	await next();
}

router.get('/', usersCtl.getUsers)

router.post('/', usersCtl.createUser)

router.get('/:id', usersCtl.getUserById)

router.patch('/:id', auth, checkOwner, usersCtl.updateUserById)

router.delete('/:id', auth, checkOwner, usersCtl.deleteUserById)

router.post('/login', usersCtl.login)

module.exports = router;
