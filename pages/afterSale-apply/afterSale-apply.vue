<template>
	<view>
		<view class="padding30 broder-b">
			<product-item  ></product-item>
		</view>
		<view class="padding30">
			<view class="tui-flex tui-vertical-center tui-align-between broder-b padding-tb30">
				<image class="icon-w35" src="../../static/images/icon-tuikuan.png" mode="widthFix"></image>
				<view class="w570">
					<view class="fon30">
						我要退款（无需退货）
					</view>
					<view class="color9">
						未收到货，或与商家达成统一不退货
					</view>
				</view>
				<view class="right-btn">
					更多
				</view>
			</view>
			
			<view class="tui-flex tui-vertical-center tui-align-between broder-b padding-tb30">
				<image class="icon-w35" src="../../static/images/icon-tuihuo.png" mode="widthFix"></image>
				<view class="w570">
					<view class="fon30">
						我要退款退货
					</view>
					<view class="color9">
						已收到货，并与商家达成统一退款退货
					</view>
				</view>
				<view class="right-btn">
					更多
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import productItem from '@/components/my/productItem.vue';
	export default {
		data() {
			return {
				
			};
		},
		components:{
			productItem
		}
	}
</script>

<style lang="scss" scoped>
page{ background: $color-f;}
.broder-b{ border-bottom: 1px solid $border-color;}
.icon-w35{width: 35rpx;}
.w570{ width: 570rpx;}
</style>
