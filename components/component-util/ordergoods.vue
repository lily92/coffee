<template>
	<view>
	
		<!-- 产品循环 -->
		<view  class="order-desc flex  flex-just-between last" >
			<view  class="order-img">
				<image :src="item.goods_pic"  mode="widthFix" class="w100 img"></image>
			</view>
			<view  class="order-describe ">
				<view class=" line2 w100 fon28">
					{{item.name}}
				</view>
				<view class="w100 color6 guige">
					规格：<span v-for="(item1,index1) in item.attr" :key="index1">
			{{index1==0?item1.attr_name:' / '+item1.attr_name}}
			</span>
				</view>
				<view class="w100">
					<text>单价：{{item.single_price}}</text>	
				</view>
			</view>
			<view class=" flex flex-al-end heji" style="justify-content: flex-end;">
				<view class="w100 text-right shuliang">
					x {{item.num}}
				</view>
			</view>
		</view>
		<!-- end 产品循环 -->
		
		</view>
		
	
</template>

<script>
	
	export default {
		components: {
			
		},
		name: "utilOrdergoods",
		props: {
			item: {
				type: Object,
				default: function() {
					return {
					}
				}
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			
		},
		
		mounted() {
			
		},
	}
</script>

<style lang="scss" scoped>
.order-list {

		.order-title {
			width: calc(100% - 180rpx);
		}

		.order-desc {
			padding: 20rpx 20rpx;

		}

		.order-img {
			width: 176rpx;
		}

		.order-img .img {
			width: 176rpx;
			height: 176rpx;
			border-radius: 10rpx;
			background: #ececec
		}

		.order-describe {
			width: 250rpx;
			padding: 0 20rpx;
		}

		.price {
			margin-right: 30rpx;
		}

		.order-btn {
			padding: 0 10px 20rpx;
			justify-content: flex-end;
			margin-top: 0;

			.btn-line {
				width: 150rpx;
				height: 50rpx;
				border-radius: 10rpx;
				border: 1px solid #999;
				background: #fff;
				line-height: 45rpx;
				text-align: center;
				color: #999
			}

			.btn-line.active {
				color: #dda461;
				border: 1px solid #dda461;
			}
		}

		// .order-desc.last {
		// 	border-bottom: none !important;
		// }

	}

	.text-right {
		text-align: right;
	}

	.price-all {
		padding: 20rpx;
	}

	.copy-icon {
		width: 22rpx;
		height: 22rpx;
		margin-left: 20rpx;
	}

	.guige {
		padding: 15rpx 0;
	}

	.flex-al-end {
		align-content: flex-end;
	}

	.heji {
		padding-bottom: 20rpx;
		.btn-line {
			width: 150rpx;
			height: 50rpx;
			border-radius: 10rpx;
			border: 1px solid #999;
			background: #fff;
			line-height: 45rpx;
			text-align: center;
			color: #999
		}
		.btn-line.active {
			color: #dda461;
			border: 1px solid #dda461;
		}
	}
	
</style>
