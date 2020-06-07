<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 50px;
        height: 30px;
        background: #eaf10e;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 600px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item{
		width: 150px;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		border-radius: 5px 5px 0 0 ;
		bottom: -92%;
	}
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
		border-bottom: 0px;
	}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%', background: '#ffffff'}">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" :style="{color: 'white', background: '#f44336'}">
                            游戏
                        </MenuItem>
                        <MenuItem name="2">
                            电影
                        </MenuItem>
                        <MenuItem name="3">
                            卡牌游戏
                        </MenuItem>
                        <MenuItem name="4">
                            宝可梦图鉴
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                Content
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld'
    }
</script>
