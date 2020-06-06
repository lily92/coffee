<template>
	<view>
		<!-- 订单头部信息 -->
		<view v-if="!isDetail" class="color9 flex flex-al-center flex-just-between padding-lr20">
			<view  class="">
				<view  class=" ">
					订单编号：{{newsItem.order_no}}
					<image @tap="copy(newsItem.order_no)" src="/static/images/icon-copy.png" mode="widthFix" class="copy-icon"></image>
				</view>
				<view v-if="showTime" class=" flex flex-al-center">
					<text>时间：</text>
					<text>{{newsItem.addtime}}</text>
				</view>
				<view v-if="showWx" class=" ">
					微信号：{{newsItem.wechat_account}}
					<image @tap="copy(newsItem.wechat_account)" src="/static/images/icon-copy.png" mode="widthFix" class="copy-icon"></image>
				</view>
			</view>
			<view class=" fon28 color0">
				{{newsItem.status}}
			</view>
		</view>
		<!-- end  订单头部信息 -->
		<!-- 产品循环 -->
		<view @click="detail(newsItem.order_id)"  class="order-desc flex  flex-just-between  " v-for="(item,index) in newsItem.orderDetail" :key="index" :class="index == list.length-1?'last':'xx'">
			<view  class="order-img">
				<image :src="item.goods_pic"  mode="widthFix" class="w100 img"></image>
			</view>
			<view  class="order-describe ">
				<view class=" line2 w100 fon28">
					{{item.name}}
				</view>
				<view class="w100 color6 guige">
						规格：<span v-for="(item1,index1) in item.attr_list" :key="index1">
				{{index1==0?item1.attr_name:' / '+item1.attr_name}}
				</span>
					</view>
					<view class="w100">
						<text>单价：{{item.single_price}}</text>	
					</view>
			</view>
			<view class=" flex flex-al-end heji">
				<view class="w100 text-right shuliang">
					x {{item.num}}
				</view>
			</view>
		</view>
		<!-- end 产品循环 -->
		<!-- 订单总价， 邮费 -->
		<view class="text-right color-org">
			<text>订单合计：</text><text class="fon32  ">￥{{newsItem.pay_price}}</text>
		</view>
		<!--end  订单总价， 邮费 -->
		<view style="margin-top: 20rpx;" class="flex  flex-just-between flex-al-center">
			<view  class="user-img">
				<image :src="newsItem.avatar_url"  mode="widthFix" class="w100 img"></image>
			</view>
			<view  class="order-describe ">
				<view class=" line2 w100 fon28">
					{{newsItem.nickname}}
				</view>
				<view v-if="newsItem.wechat_account" class=" line2 w100 color9">
					微信号: {{newsItem.wechat_account}}
					<image @tap="copy(newsItem.wechat_account)" src="/static/images/icon-copy.png" mode="widthFix" class="copy-icon"></image>
				</view>
				<view class=" line2 w100 color9">
					级别: {{newsItem.s_name}}
				</view>
			</view>
			
			<view class="content flex" style="flex-wrap: wrap;
			justify-content: flex-end;">
				<view class=" fon32 order-num" >
					{{newsItem.share_status}}
				</view>
				<view class="fon32 color-org" >
					+{{newsItem.share_money}}
				</view>
			</view>
		</view>
		
		</view>
		
	
</template>

<script>
	const thorui = require("@/components/utils/clipboard.thorui.js")
	export default {
		components: {
			
		},
		name: "utilShareorder",
		props: {
			newsItem: {
				type: Object,
				default: function() {
					return {}
				}
			},
			isDetail: {
				type: Number,
				default: function() {
					return 0
				}
			},
			showTime: {
				type: Number,
				default: function() {
					return 1
				}
			},
			showWx: {
				type: Number,
				default: function() {
					return 0
				}
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			detail(index) {
				console.log(index)
				this.$emit('detail', index)
			},
			copy(text){
				const that = this
				thorui.getClipboardData(text, (res) => {
					that.tui.toast("已复制到粘贴板")
				})
			},
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
				margin-left: 20rpx;
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
	}
	.order-num{ padding:  0 10rpx;}
	.user-img {
		width: 88rpx;
	}
	
	.user-img .img {
		width: 88rpx;
		height: 88rpx;
		border-radius: 10rpx;
		background: #ececec
	}
</style>
