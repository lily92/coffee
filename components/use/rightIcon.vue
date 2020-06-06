<template>
	<view class="colorf fix-right fon20 tui-center">
		<navigator class="icon cart" url="../../pages/cart/cart">
			<text  class="" >
				购物车
			</text>
		</navigator>
		<view class="icon service">
			<view class="">
				客服
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "rightIcon",
	props:{
		
	},
	methods: {
		cart() {
			this.$emit('cart');
			
		}
	}
};
</script>

<style lang="scss" scoped>
	.icon{ width: 104rpx; height:104rpx; border-radius: 50%; padding-top: 55rpx; box-sizing: border-box; margin-bottom: 30rpx;}
	.cart{background:url(../../static/images/icon-cart.png) no-repeat center 15rpx #f07623; background-size: 48rpx;}
	.fix-right{ position: fixed; right: 20rpx; bottom: 20%; z-index: 9;}
	.service{background:url(../../static/images/icon-service.png) no-repeat center 15rpx #66c62c; background-size: 40rpx;}
</style>
