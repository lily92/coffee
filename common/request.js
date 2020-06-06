import app from "../App.vue"
//公共js,以及基本方法封装 nvue里使用
const fetch = {
	interfaceUrl: function() {
		//接口地址
		return app.globalData.interfaceUrl+app.globalData.interfaceApi;
	},
	toast: function(tips) {
		uni.showToast({
			title: tips || "出错啦~",
			icon: 'none',
			duration: 2000
		})
	},
	request: function(url, postData, method, type, showLoading) {
		//接口请求
		if (showLoading) {
			uni.showLoading({
				mask: true,
				title: '请稍候...'
			})
		}
		const token = uni.getStorageSync("token")
	
		// if(method === "POST"){
		// 	const params =postData
		// }else{
		// 	const params ={data:JSON.stringify(postData)}
		// }
		return new Promise((resolve, reject) => {
			uni.request({
				url: fetch.interfaceUrl() + url,
				data: method === "POST" ? JSON.stringify(postData) : postData,
				header: {
					'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
					'security': "1",
					'X-Klapi-Authorization': token,
					'X-Klapi-Pfalform' : app.globalData.interfacePlatform,
					  'X-Klapi-Fwkey' : app.globalData.interfaceFwkey,
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					showLoading && uni.hideLoading()
					resolve(res.data)
				},
				fail: (res) => {
					fetch.toast("网络不给力，请稍后再试~")
					reject(res)
				}
			})
		})
	}
}

module.exports = {
	request: fetch.request,
	toast: fetch.toast
}
