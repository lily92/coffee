<template>
	<view>
		<view class="broder-b padding-tb30">
			<product-item  ></product-item>
		</view>
		<view class="padding30">
			<navigator url="../refundApplication/refundApplication" class="tui-flex tui-vertical-center  tui-cell-arrow broder-b padding-tb30">
				<image class="icon-w35 margin-r20" src="../../static/images/icon-tuikuan.png" mode="widthFix"></image>
				<view class="w570">
					<view class="fon30">
						我要退款（无需退货）
					</view>
					<view class="color9">
						未收到货，或与商家达成统一不退货
					</view>
				</view>
				
			</navigator>
			
			<navigator  url="../refundApplication/refundApplication" class="tui-flex tui-vertical-center broder-b padding-tb30 tui-cell-arrow">
				<image class="icon-w35 margin-r20" src="../../static/images/icon-tuihuo.png" mode="widthFix"></image>
				<view class="w570">
					<view class="fon30">
						我要退款退货
					</view>
					<view class="color9">
						已收到货，并与商家达成统一退款退货
					</view>
				</view>
				
			</navigator>
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
<style lang="scss">
	page{ background: $color-f;}
</style>
<style lang="scss" scoped>

.broder-b{ border-bottom: 1px solid $border-color;}
.icon-w35{width: 35rpx;}
.w570{ width: 570rpx;}
</style>
