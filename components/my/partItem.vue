<template>
	<navigator url="../../pages/productDetail/productDetail?id=" class="padding20">
		<view class="list-img positionr">
			<image src="../../static/images/my/info/qa-img-bg.jpg" mode="widthFix" class="w100"></image>
			<view class="positionb-w tui-flex  tui-align-center tui-vertical-center">
				<image src="../../static/images/my/info/qa-img.jpg" mode="widthFix" class="w100"></image>
			</view>
		</view>
	    <view class="line line2 bgf padding30 tui-center">
	    	<view class="">
	    		格米莱商用咖啡机
	    		手柄58MM
	    	</view>
			<view class="color-org price">
				￥99.00
			</view>
	    </view>
	</navigator>
		
				
</template>

<script>
	export default {
		name: "partItem",
		props:{
			listItem:{
				type: Object
				
			}
		}
		}
</script>

<style lang="scss" scoped>
	.img{ width: 100rpx;}
	.desc{ width: 560rpx;}
	.list-img{
		image{ display: block;}
	}
	.line{ border-top: 1rpx solid $border-color; }
	.price{ margin-top: 10rpx;}
</style>
