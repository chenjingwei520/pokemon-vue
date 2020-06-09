<template>
	<div id="Signup">
		<Layout style="background-color: #FFFFFF;">
			<Header style="background-color: #FFFFFF;padding: 0rem; line-height: 0rem;">
				<Nav />
			</Header>
			<Content class="content-main">
				<div class="title-line">
					<span class="tit">注 册</span>
				</div>
				<div class="register-container">
					<Form :model="formTop" label-position="top" :rule="ruleItem">
						<FormItem label="账号">
							<Input v-model="formTop.account" />
						</FormItem>
						<FormItem label="昵称">
							<Input v-model="formTop.name" />
						</FormItem>
						<FormItem label="密码">
							<Input v-model="formTop.password" />
						</FormItem>
						<FormItem label="重复密码">
							<Input v-model="formTop.repwd" />
						</FormItem>
						<FormItem style="text-align: center;">
							<Button size="large" type="primary" @click="handleSubmit('formTop')">注 册</Button>
						</FormItem>
					</Form>
				</div>
			</Content>
			<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
		</Layout>
	</div>
</template>

<script>
	import Nav from '../Nav.vue'
	export default {
		name: 'Signup',
		components: {
			Nav,
		},
		data() {
			return {
				formTop: {
					account: '',
					password: '',
					repwd: '',
					name: ''
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
		}
	}
</script>

<style>
	.register-container {
		width: 980px;
		margin: 0 auto;
		padding: 60px 0;
	}
	
	.ivu-form-item {
		width: 420px;
		margin: 12px auto;
	}
</style>
