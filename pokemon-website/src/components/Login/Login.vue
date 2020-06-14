<template>
	<div id="login">
		<Layout style="background-color: #FFFFFF;">
			<Header style="background-color: #FFFFFF;line-height: 0px; padding: 0px;">
				<Nav />
			</Header>
			<Content class="content-main">
				<div class="title-line">
					<span class="tit">登 录</span>
				</div>
				<div class="login-box">
					<div class="login-left">
						<img src="../../assets/login-left-pikachu.png" alt="" width="420px">
					</div>
					<div class="line"></div>
					<div class="login-right">
						<div class="form-login">
							<div class="input-box">
								<Form ref="formItem" :model="formItem" :rule="ruleItem">
									<FormItem prop="account">
										<Input type="text" v-model="formItem.account" placeholder="用户名" />
									</FormItem>
									<FormItem prop="password">
										<Input type="password" v-model="formItem.password" placeholder="密码" />
									</FormItem>
									<FormItem>
										<Button size="large" type="primary" @click="handleSubmit(formItem)">登 录</Button>
										<Button size="large" type="primary" @click="handleSignup" style="float: right;">注 册</Button>
									</FormItem>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</Content>
			<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
		</Layout>
	</div>
</template>

<script>
	import Nav from '../Nav.vue'
	export default {
		name: 'Login',
		data() {
			return {
				formItem: {
					account: '',
					password: ''
				},
				ruleItem: {
					account: [{
						required: true,
						message: 'Please fill in the user name',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: 'Please fill in the password.',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: 'The password length cannot be less than 6 bits',
							trigger: 'blur'
						}
					]
				}
			}
		},
		components: {
			Nav,
		},
		methods: {
			handleSubmit(formItem) {
				(async () => {
					try {
						const res = await this.$http.post('http://localhost:8000/users/login', {
							account: formItem.account,
							password: formItem.password
						})
						const json = await res.json();
						console.log(json);
						this.$store.commit('setUser', json);
						this.$router.push('/');
					} catch (e) {
						this.$Message.error(e.body.message)
					}
				})()
			},
			handleSignup() {
				this.$router.push('/signup')
			}
		}
	}
</script>

<style>
	.title-line {
		width: 980px;
		height: 28px;
		border-bottom: 1px solid #ddd;
		margin: 0 auto 28px;
		text-align: center;
	}

	.title-line .tit {
		height: 56px;
		line-height: 56px;
		margin: 0 auto;
		padding: 0 20px;
		font-size: 40px;
		background: #fff;
		text-align: center;
	}

	.login-box {
		position: relative;
		width: 980px;
		margin: 0 auto;
	}

	.login-box .line {
		float: left;
		border-right: 1px solid #ddd;
		height: 300px;
		margin-top: 28px;
	}

	.login-box .login-left {
		float: left;
		width: 489px;
	}

	.login-left img {
		padding-top: 20px;
	}

	.login-box .login-right {
		float: left;
		padding-left: 45px;
		width: 490px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.form-login {
		position: relative;
	}

	.form-login .input-box {
		margin-top: 50px;
		width: 414px;
	}
</style>
