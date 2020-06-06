<template>
	<view class="">
		<view class="mytop w100">
			<view @tap="goUserCenter" class="user-info tui-flex tui-vertical-center tui-align-between">
				<view class="user-img border-circle"><image src="../../static/images/my/user-imgs.png" mode="widthFix" class="w100"></image></view>
				<view class="user-con colorf">
					<view class="fon33">A先生</view>
					<view class="fon26">ID:1234567</view>
				</view>
				<view class="user-more"><image src="../../static/images/my/icon-right.png" mode="widthFix" class="w100"></image></view>
			</view>
			<!--star  my list-icon -->
			<view class="list-icon tui-center tui-flex">
				<navigator url="../../pages/qa/qa" class="tui-col-4 colorf">
					<image src="../../static/images/my/m-icon1.png" mode="widthFix" class="my-icon"></image>
					<view class="fon26">问答</view>
				</navigator>
				<navigator url="../info/info"  class="tui-col-4 colorf">
					<image src="../../static/images/my/my-icon2.png" mode="widthFix" class="my-icon"></image>
					<view class="fon26">消息</view>
				</navigator>
				<navigator url="../collection/collection" class="tui-col-4 colorf">
					<image src="../../static/images/my/my-icon3.png" mode="widthFix" class="my-icon"></image>
					<view class="fon26">收藏</view>
				</navigator>
			</view>
			<!--end  my list-icon -->
		</view>
		
		<view class="my-tab fon26  tui-flex tui-vertical-center tui-center">
			<navigator url="../menber/menber" class="tui-col-4 " :class="isactive==0?'cur':''">会员福利</navigator>
			<navigator  url="../../pages/myOrder/myOrder" class="tui-col-4" :class="isactive==1?'cur':''">我的订单</navigator>
			<navigator  url="../../pages/myproduct/myproduct" class="tui-col-4" :class="isactive==2?'cur':''">我的产品</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myTop",
		props:{
			isactive:{
				type: Number,
				default: 0
			}
		},methods:{
			goUserCenter(){
				uni.navigateTo({
					url:'../../pages/personalData/personalData'
				})
			}
		}
		}
</script>

<style lang="scss" scoped>
	.mytop {
		width: 100%;
		height: 360rpx;
		background-color: $color-org;
		padding: 50rpx 25rpx;
		box-sizing: border-box;
	}
	.user-img {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
		border: 1px solid $color-f;
	}
	.user-more {
		width: 77rpx;
	}
	.user-con {
		width: 460rpx;
		line-height: 2;
	}
	.my-icon {
		width: 90rpx;
		height: 90rpx;
	}
	.list-icon {
		padding-top: 15rpx;
	}
	
	.my-tab {
		width: 100%;
		height: 104rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 1rpx 0rpx 0rpx #cccccc;
	
		.cur {
			color: $color-org;
		}
	}
</style>
