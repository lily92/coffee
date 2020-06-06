import Vue from 'vue'
import App from './App'
import store from './store'
import utilmd5 from './common/md5';
import tuiLoadmore from '@/components/use/tui-loadmore/tui-loadmore.vue';
import tuiNomore from '@/components/use/tui-nomore/tui-nomore.vue';
Vue.config.productionTip = false
// import VConsole from 'vconsole/dist/vconsole.min.js'
// if(uni.getStorageSync('isTest')==1){
// 	let vConsole = new VConsole();
// }

const tui = {
	toast: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	number_format:function number_format(number, decimals, dec_point, thousands_sep) {
	　　/*
	　　 * 参数说明：
	　　 * number：要格式化的数字
	　　 * decimals：保留几位小数
	　　 * dec_point：小数点符号
	　　 * thousands_sep：千分位符号
	　　 * */
	　　 number = (number + '').replace(/[^0-9+-Ee.]/g, '');
	　　 var n = !isFinite(+number) ? 0 : +number,
	　　 prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
	 　　sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	 　　dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	 　　s = '',
	　　 toFixedFix = function(n, prec) {
	 　　　　var k = Math.pow(10, prec);
	 　　　　return '' + Math.ceil(n * k) / k;
	 　　};
	
	 　　s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	　　 var re = /(-?\d+)(\d{3})/;
	　　 while(re.test(s[0])) {
	 　　　　s[0] = s[0].replace(re, "$1" + sep + "$2");
	 　　}
	
	 　　if((s[1] || '').length < prec) {
	    　　 s[1] = s[1] || '';
	     　　s[1] += new Array(prec - s[1].length + 1).join('0');
	 　　}
	  　　　　return s.join(dec);
	 },
	constNum: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android" ? 300 : 0;
	},
	px:function(num){
		return uni.upx2px(num)+'px';
	},
	interfaceUrl: function() {
		//接口地址
		return app.globalData.interfaceUrl;
	},
	interfaceApi: function() {
		//接口api
		return app.globalData.interfaceApi;
	},
	interfacePlatform: function() {
		//使用平台
		return app.globalData.interfacePlatform;
	},
	adminPlatform: function() {
		//使用平台
		return app.globalData.adminPlatform;
	},
	interfaceFwkey: function() {
		//使用平台
		return app.globalData.interfaceFwkey;
	},
	currRoute: function() {
		let pages = getCurrentPages();
		let currPage = pages[pages.length - 1]; //当前页面
		return '/'+currPage.route;
	},
	//获取url 参数
	getUrlKey : function (name){
		console.log(decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null)
		console.log('getUrlKey')
		return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	
	},
	request: function(url, postData, method, type, hideLoading) {
			
			console.log(postData)
			
			//接口请求
			// if (!hideLoading) {
			// 	uni.showLoading({
			// 		mask: true,
			// 		title: '请稍候...'
			// 	})
			// }
			var content_type_str='application/json'
			if(!type){
				if(this.adminPlatform()=='yii2'){
					content_type_str='application/x-www-form-urlencoded'
				}
			}else{
				content_type_str='application/x-www-form-urlencoded'
			}
			
			return new Promise((resolve, reject) => {
				var _this=this
				//  uni.setStorageSync("token", "");//清空登陆信息 测试用
				console.log(this.interfaceUrl()+ this.interfaceApi()+ url);
				uni.request({
					url: this.interfaceUrl()+ this.interfaceApi()+ url,
					data: postData,
					header: {
						'content-type': content_type_str,
						'X-Klapi-Authorization': this.getToken(),
						'security': 1,
						'X-Klapi-Pfalform' : this.interfacePlatform(),
						  'X-Klapi-Fwkey' : this.interfaceFwkey(),
						  'x-klapi-login' : this.getToken()?'1':'0',
					},
					method: method||'POST', //'GET','POST'
					dataType: 'json',
					success: (res) => {
						console.log(res)
						if(res.statusCode==404){
							this.toast('404错误，请联系管理员');
						}
						!hideLoading && uni.hideLoading()
						if (res.data.msg&&res.data.msg!='success') {
							  this.toast(res.data.msg,res.data.duration?res.data.duration:2000,res.data.msg_type?'success':'');
						 } 
						if (res.data.code !== '') { // 正常
						
							if (res.data.code == -1) {
								
											        // 未登录
						uni.setStorageSync('currRoute',this.currRoute())
						setTimeout(function (){
						uni.navigateTo({
						url: app.globalData.loginType
						})
						  }, 500)
						}else if (res.data.stat == 30
						||(res.data.stat == 1&&url=="/login/getToken")
						||(res.data.stat == 1&&url=="/wxmp/userwxLogin")
						) {//登陆成功
						console.log(res.data)
						  uni.setStorageSync("token", res.data.data.token);
												  					   
						  let path = uni.getStorageSync('currRoute');
						  console.log(path)												  					  
						 if ('router_path' in res.data && res.data.router_path!="") {//url传入了路径
					 //有跳转路径
					if(res.data.router_path==13){//绑定账号信息
					uni.navigateTo({
					url: app.globalData.bindPage+"?isbind=1&sl_id="+this.getLocal('sl_id')
						});
						}else if(res.data.router_path==17){//审核信息
						uni.navigateTo({
					url: app.globalData.agencyCheckPage
							});
					}else{
					uni.navigateTo({
						url: res.data.router_path
								});
					}
					 } else {
				if(path==""||path=="/pages/login/loginPhone"){//未存路径,则到首页
						uni.switchTab({
					url: app.globalData.homePage
						});
					}else{
					let url = app.globalData.interfaceUrl+`/#${path}`;
					console.log(url)
				//	window.location.replace(url);
						uni.reLaunch({
						url:path
					})
		}					 
			}
					  }else  if (res.data.stat == 8) { // 返回上一页
			 setTimeout(function (){
					uni.navigateBack({
				  delta: 1
					});
					  }, 500)
					}else if (res.data.stat == 6) { // 刷新页面
						setTimeout(function (){
					uni.redirectTo({
					url: _this.currRoute()
				});
				 }, 500)
				}else if (res.data.stat == 5) { // 重定向 push
	    if ('router_path' in res.data) {
				 // 对象
				uni.navigateTo({
				url: res.data.router_path
				});
				    } else {
				   // 首页
				uni.switchTab({
				url: app.globalData.homePage
					}); 
		 }   }if (res.data.stat == 4) { // 跳转到指定url路径
			   if ('router_path' in res.data) {
		     // 对象
		uni.redirectTo({
		          url: res.data.router_path
	        });
			  } else {
		       // 首页
	uni.switchTab({
		             url: app.globalData.homePage
				      }); 
	    }
		     } else if (res.data.stat == 11) {//设置个人信息
			 setTimeout(function (){
			  	uni.navigateTo({
			 	url: app.globalData.setinfoPage
			 	}); 
		 }, 500)
											      
			   }else if (res.data.stat == 12) {//设置地址信息
				  setTimeout(function (){
				 	uni.navigateTo({
				url: getApp().globalData.addressPage
			 	}); 
					  }, 500)
				    }else
			 if(res.data.stat==17){//审核信息
		 	uni.navigateTo({
				url: app.globalData.agencyCheckPage
					});
				}else if (res.data.stat == 20) {//跳转首页
				setTimeout(function (){
				uni.switchTab({
			         url: app.globalData.homePage
		    }); 
				  }, 500)
											      
			   }
												 
						
							 
	   // if the custom code is not 200, it is judged as an error.
						     resolve(res.data)
						    }else{
								reject(res)
							} 	
					},
					fail: (res) => {
						if (!hideLoading) {
							this.toast("网络不给力，请稍后再试~")
						}
						reject(res)
					}
				})
			})
		},
	
	uploadFile: function(src,type) {
		const that = this
		// uni.showLoading({
		// 	title: '请稍候...'
		// })
		return new Promise((resolve, reject) => {
			const uploadTask = uni.uploadFile({
				url: app.globalData.interfaceUrl+app.globalData.interfaceApi+app.globalData.uploadInterface,
				filePath: src,
				name: type,
				header: {
					'X-Klapi-Authorization': this.getToken(),
					'security': 1,
					'X-Klapi-Pfalform' : this.interfacePlatform(),
					  'X-Klapi-Fwkey' : this.interfaceFwkey(),
					  'x-klapi-login' : this.getToken()?'1':'0',
				},
				formData: {
				   
				},
				success: function(res) {
					// uni.hideLoading()
					
					const d=JSON.parse(res.data);
					//console.log(res)
					console.log(d)
					if (d.code === 0) {
						resolve(d)
					} else {
						that.toast(d.msg);
					}
				},
				fail: function(res) {
					reject(res)
					//uni.hideLoading();
					that.toast(res.msg);
				}
			})
		})
	},
	setToken: function(token) {
		uni.setStorageSync("token", token)
	},
	getToken() {
		return uni.getStorageSync("token")
	},
	isLogin: function() {
		return uni.getStorageSync("token") ? true : false
	},
	//存储
	setLocal:function (key, value) {
		uni.setStorageSync(key, JSON.stringify(value));
	},
	//取出数据
	getLocal: function (key) {
		return uni.getStorageSync(key)?JSON.parse(uni.getStorageSync(key)):"";
	},
	//获取code
	getCodeApi:function (state){
		let urlNow=encodeURIComponent(window.location.href);
		let scope='snsapi_userinfo';    //snsapi_userinfo   //静默授权 用户无感知
		let appid=app.globalData.appid;
		let url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}&connect_redirect=1#wechat_redirect`;
		console.log('getCodeApi')
		window.location.replace(url);
	},

}
uni.getSystemInfo({
    success: function (res) {
        uni.setStorageSync('sysinfo',res)
    }
});

Vue.prototype.MD5 = utilmd5
Vue.prototype.tui = tui
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
App.mpType = 'app'
Vue.component('tuiLoadmore',tuiLoadmore)
Vue.component('tuiNomore',tuiNomore)
const app = new Vue({
	store,
	...App
})
app.$mount()
