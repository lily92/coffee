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
			<view v-if="newsItem.od_state_str" class=" fon28 color0">
				{{newsItem.od_state_str}}
			</view>
			<view v-if="newsItem.refund_type==1" >
			            <view v-if="newsItem.refund_status==0">
			                <view v-if="newsItem.is_agree==0">等待审核中</view>
			                <view v-else>
			                    <view v-if="newsItem.is_user_send==0">已同意退货</view>
			                    <view v-else>
									已发货，待平台确认
									</view>
			                </view>
			            </view>
			            <view v-if="newsItem.refund_status==1" >已同意退货并已退款</view>
			            <view v-if="newsItem.refund_status==3">已拒绝退货</view>
			        </view>
			        <view v-else>
			            <view v-if="newsItem.refund_status==0">
			                <view v-if="newsItem.is_agree==0">等待审核中</view>
			                <view v-else>
			                    <view v-if="newsItem.is_user_send==0">已同意换货</view>
			                    <view v-else>
									<view v-if="newsItem.is_confirm==1">
										<view v-if="newsItem.is_send==1">
											公司已发货
											</view>
											<view v-else>
										待公司发货
										</view>
										</view>
										<view v-else>
									待公司收货
									</view>
									</view>
			                </view>
			            </view>
			            <view v-if="newsItem.refund_status==2">已完成换货</view>
			            <view v-if="newsItem.refund_status==3">已拒绝换货</view>
			        </view>
		</view>
		<!-- end  订单头部信息 -->
		<!-- 产品循环 -->
		<view @click="detail(newsItem.order_id)"  class="order-desc flex  flex-just-between" v-for="(item,index) in newsItem.goods_list" :key="index" :class="index == list.length-1?'last':'xx'">
			<view  class="order-img">
				<image :src="item.goods_pic"  mode="widthFix" class="w100 img"></image>
			</view>
			<view  class="order-describe ">
				<view class=" line2 w100 fon28">
					{{item.goods_name}}
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
			<view class=" flex flex-al-end heji" style="justify-content: flex-end;">
				<view  v-if="item.is_order_refund==0&&isDetail==1&&newsItem.is_send==1&&newsItem.is_pay==1&&newsItem.is_cancel==0&&newsItem.is_confirm==1&&newsItem.is_member==0" @click="toService(item.order_detail_id)" class="w100 text-right btn-line">
					申请售后
				</view>
				<view  v-if="item.is_order_refund==1" class="w100 text-right btn-line active">
					已申请售后
				</view>
				<view class="w100 text-right shuliang">
					x {{item.num}}
				</view>
			</view>
		</view>
		<!-- end 产品循环 -->
		
		<!-- 订单总价， 邮费 -->
		<view v-if="newsItem.total_price" class="text-right color-org">
			<text>合计：</text><text class="fon32  ">￥{{newsItem.total_price}}</text>
		</view>
		<!--end  订单总价， 邮费 -->
		</view>
		
	
</template>

<script>
	const thorui = require("@/components/utils/clipboard.thorui.js")
	export default {
		components: {
			
		},
		name: "utilOrder",
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
			toService(index) {
				console.log(index)
				this.$emit('toService', index)
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
			line-height: 50rpx;
			text-align: center;
			color: #999
		}
		.btn-line.active {
			color: #dda461;
			border: 1px solid #dda461;
		}
	}
	
</style>
