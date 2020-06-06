<script>
	export default {
		globalData:{
			homePage:"/pages/index/index",//首页路径getApp().globalData.homePage
			// goUrl(){
			// 	uni.switchTab({
			// 		url:getApp().globalData.homePage
			// 	})
			// },
			//Object.keys(address).length>0
			myPage:"/pages/index/index",//我的路径getApp().globalData.myPage
			interfaceApi:"api",
			interfacePlatform:"wxapp",
			uploadInterface:"/default/upload-image-moti",
			adminPlatform:"yii2",//后台框架
			productDetailPage:"/pages/productDetail/productDetail",//产品详情路径getApp().globalData.addressPage
			addressPage:"/pages/address/selectAdress",//选择收货地址路径getApp().globalData.addressPage
			ordersPage:"/pages/suitOrder/suitOrder",//订单列表路径getApp().globalData.ordersPage
			userOrdersPage:"/pages/myOrder/myOrder",//订单列表路径getApp().globalData.ordersPage
			paySuccessPage:"/pages/paySuccess/paySuccess",//跳转订单列表路径getApp().globalData.paySuccessPage
			setinfoPage:"/pages/setting/index",//设置信息路径getApp().globalData.setinfoPage
			agencyCheckPage:"/pages/agencyInvitation/agencyCheck",//审核页面路径getApp().globalData.agencyCheckPage
			bindPage:"/pages/agencyInvitation/register",//绑定页面路径getApp().globalData.bindPage
			bindingPage:"/pages/setting/bindPhone",//绑定手机号路径getApp().globalData.bindPage
			// #ifdef MP
			loginType:"/pages/login/wxapplogin",
			interfaceUrl:'http://www.moti.coma/addons/zjhj_mall/core/web/index.php?_acid=2&r=',//线下
			//interfaceUrl:'https://minapp.gzmoti.com/addons/zjhj_mall/core/web/index.php?_acid=2&r=',//线上
			// #endif
			// #ifdef H5
			//interfaceUrl:'http://www.nvlang.coma',//测试
			loginType:"/pages/login/loginPhone",//登录
			
			interfaceUrl:'http://www.moti.coma/addons/zjhj_mall/core/web/index.php?_acid=2&r=',//线上
			// #endif
			//appid:"wx59edc71215b66b04",//线下
			//appid:"wxdd00286dd0d3aea4",//线上
			interfaceFwkey:"2587l6QEQ3mPHJZgYTAznd2sN17mlBQZ4CgMNdYoEZJ3",
		},
		
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/app.css";
	@import "./static/style/thorui.css";
</style>
