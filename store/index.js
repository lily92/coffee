import Vue from 'vue'
import Vuex from 'vuex'
import fetch from '../common/request.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		version: "1.0.0",
		isLogin: uni.getStorageSync("token") ? true : false,
		isBind: uni.getStorageSync("isBind") ? true : false,//绑定账号密码
		shopcart:0,
		openid: "",
		userInfo: { // 用户信息
			longitude: null, // 经度
			latitude: null, // 纬度
			locationCity: '' // 定位城市
		},
		appInfo: { // APP整体数据
			commonDataVersion: '0', // 公共数据的大版本号
			adVersion: '0', // 广告数据版本号	
			serviceVersion: '0' // 服务数据版本号
		},
	},
	mutations: {
		setLogin(state, login) {//登录
		state.isLogin = true;
	},
		logout(state) {//退出登录
			state.isLogin = false;
			state.isBind = false;
		},
		setOpenid(state, openid) {
			state.openid = openid;
		},
	
		setShopcart(state, index) {
			state.shopcart = index;
		},
	},
	actions: {
				
	}
})

export default store
