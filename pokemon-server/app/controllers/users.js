const User = require('../model/users')
const jsonwebtoken = require('jsonwebtoken');
const {
	secret
} = require('../config')

class UsersController {
	async createUser(contxt) {
		contxt.verifyParams({
			account: {
				type: 'string',
				required: true
			},
			name: {
				type: 'string',
				required: true
			},
			password: {
				type: 'string',
				required: true
			}
		});
		const {
			account,
			name
		} = contxt.request.body;
		const repeatedUser = await User.findOne({
			account,
			name
		});
		if (repeatedUser) {
			contxt.throw(409, '用户已存在');
		}
		const user = await new User(contxt.request.body).save();
		contxt.body = user;
	}
	async getUsers(contxt) {
		contxt.body = await User.find();
	}
	async getUserById(contxt) {
		const user = await User.findById(contxt.params.id);
		if (!user) {
			contxt.throw(404, '用户不存在')
		}
		contxt.body = user;
	}
	
	
	
	async updateUserById(contxt) {
		contxt.verifyParams({
			name: {
				type: 'string',
				required: false
			},
			password: {
				type: 'string',
				required: false
			}
		});
		const user = await User.findByIdAndUpdate(contxt.params.id, contxt.request.body);
		if (!user) {
			contxt.throw(404, '用户不存在');
		}
		contxt.body = user;
	}
	async deleteUserById(contxt) {
		const user = await User.findByIdAndRemove(contxt.params.id);
		if (!user) {
			contxt.throw(404, '用户不存在');
		}
		contxt.status = 204;
	}

	async login(contxt) {
		contxt.verifyParams({
			account: {
				type: 'string',
				required: true
			},
			password: {
				type: 'string',
				required: true
			}
		});

		const user = await User.findOne(contxt.request.body);
		if (!user) {
			contxt.throw(401, '用户或者密码不正确');
		}
		const {
			_id,
			name
		} = user;
		const token = jsonwebtoken.sign({
			_id,
			name
		}, secret, {
			expiresIn: '1d' //有效时间
		});

		contxt.body = {
			_id,
			name,
			token
		}
	}
}

module.exports = new UsersController();
