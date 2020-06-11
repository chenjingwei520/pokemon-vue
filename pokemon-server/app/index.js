const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const app = new Koa();
const routing = require('./routes');
const cors = require('koa2-cors');
const {
	connectionStr
} = require('./config');

mongoose.connect(connectionStr, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, () => console.log('mongodb连接成功'));
mongoose.connection.on('error', console.error);
app.use(error({
	postFormat: (e, {
		stack,
		...rest
	}) => process.env.NODE_ENV === 'prodection' ? rest : {
		stack,
		...rest
	}
}));

app.use(cors())
app.use(bodyparser()); // 必须放在路由前面，不然解析不了request.body
app.use(parameter(app));
routing(app);
app.listen(8000, () => console.log('程序启动在 8000 端口了'));
