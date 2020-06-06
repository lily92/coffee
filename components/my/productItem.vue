<template>
	<view class=" tui-flex tui-align-between ">
		<view class="img">
			<image src="../../static/images/product-large.jpg" mode="widthFix" class="w100"></image>
		</view>
		<view class="desc tui-flex  ">
			<view class="w100">
				<view class="">
					格米莱CRM3200C咖啡机
				</view>
				<view class="ellipsis">
					商用半自动专业意式家用多锅炉...
				</view>
			</view>
			<view class="tui-flex tui-align-between w100">
				<text>¥2000.00</text>
				<text>x2</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "productItem",
		props:{
			productItem:{
				type: Object,
				default: {
				}
			}
		}
		}
</script>

<style lang="scss" scoped>
	.img{ width: 187rpx; height:187rpx; background: #e4e4e4;}
	.desc{ width: 470rpx; align-content: space-between;}
</style>
