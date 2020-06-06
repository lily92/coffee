<template>
        <view v-if="isCanUse">
            <view>
                <view class='header'>
                    <image src='/static/images/user/wxlogin.png'></image>
                </view>
                <view class='content'>
                    <view>申请获取以下权限</view>
                    <text>获得你的公开信息(昵称，头像、地区等)</text>
                </view>

                <button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
                    授权登录
                </button>
				<button class='bottom' type='default'  withCredentials="true" lang="zh_CN" @tap="mall">
				    取消登录
				</button>
            </view>
        </view>
</template>
<script>
    export default {
        data() {
            return { 
				user_info: {},
                encryptedData: "",
                signature: "",
                iv: "",
                isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
            };
        },
		mounted() {
		    var _this = this;
		  },
        methods: {
            //第一授权获取用户信息===》按钮触发
            wxGetUserInfo() {
                let _this = this;
                uni.getUserInfo({
                    provider: 'weixin',
                    success: function(infoRes) {
                        _this.iv = infoRes.iv; //iv
                        _this.encryptedData = infoRes.encryptedData; //解密串
                        _this.user_info = infoRes.userInfo; //用户信息
                        _this.signature = infoRes.signature; //签名
                        try {
                            uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							_this.isCanUse=false
							_this.login()
            
                        } catch (e) {}
                    },
                    fail(res) {}
                });
            },
  
　　　　　　//登录
                login() {
                let _this = this;
                uni.showLoading({
                    title: '登录中...'
                });
               // 1.wx获取登录用户code
                uni.login({
                    provider: 'weixin',
                    success: function(loginRes) {
                        let code = loginRes.code;
                        if (!_this.isCanUse) {
                            //非第一次授权获取用户信息
                            uni.getUserInfo({
                                provider: 'weixin',
                                success: function(infoRes) {
 　　　　　　　　　　　　　　　　　　　　　　//获取用户信息后向调用信息更新方法
										console.log(infoRes)
										_this.iv = infoRes.iv; //iv
										_this.encryptedData = infoRes.encryptedData; //解密串
                                _this.user_info = infoRes.userInfo; //用户信息
								 _this.signature = infoRes.signature; //签名
								}
                            });
                        }
        
						var param = {
							'code': code,
							'signature': _this.signature,
							'user_info': _this.user_info,
							'parent_id': uni.getStorageSync('parent_id'),
							encrypted_data: _this.encryptedData,
							iv: _this.iv,
						};
						console.log(param)
						_this.tui.request( '/passport/login',param).then(function(data){
						 uni.hideLoading();
				if(data.code == 0){
					 uni.setStorageSync("token", data.data.access_token);
				  _this.tui.toast('授权登录成功');
					  _this.$store.commit('setLogin',true)
					  let path = uni.getStorageSync('currRoute');
					  if(path==""){//未存路径,则到首页
					  				uni.switchTab({
					  			url: getApp().globalData.homePage
					  				});
					  			}else{
					  				uni.reLaunch({
					  				url:path
					  			})
					  }
					}else{
		  _this.tui.toast('授权登录失败');
				}
						  
						});
                    },
                });
            },
			mall: function() {
				uni.reLaunch({
					url: getApp().globalData.homePage
				})
			}
        },
        onLoad() {//默认加载
            //this.login()
        }
    }
</script>
<style>
    .header {
        margin: 90rpx 0 90rpx 50rpx;
        border-bottom: 1px solid #ccc;
        text-align: center;
        width: 650rpx;
        height: 300rpx;
        line-height: 450rpx;
    }

    .header image {
        width: 200rpx;
        height: 200rpx;
    }

    .content {
        margin-left: 50rpx;
        margin-bottom: 90rpx;
    }

    .content text {
        display: block;
        color: #9d9d9d;
        margin-top: 40rpx;
    }

    .bottom {
        border-radius: 80rpx;
        margin: 70rpx 50rpx;
        font-size: 35rpx;
    }
</style>