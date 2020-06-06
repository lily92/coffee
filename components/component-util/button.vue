<template>
	<view>
		<view class="flex order-btn-list">
			
			<!-- 取消订单 未付款-->
			<view v-if="newsItem.is_pay==0&&newsItem.is_cancel==0" class="order-btn flex">
				<view @click="toCancel(newsItem.order_id)" class="btn-line">
					取消订单
				</view>
			</view>
			<!-- end  取消订单 -->
			
			<!-- 查看支付凭证 -->
			<view class="order-btn flex" v-if="newsItem.is_member==0&&newsItem.payment_voucher">
				<view @click="goLook(newsItem.payment_voucher)" class="btn-line active">
					查看支付凭证
				</view>
			</view>
			<!-- end  查看支付凭证 -->
			
			<!-- 查看物流 已发货-->
			<view class="order-btn flex" v-if="false&&newsItem.is_send==1&&newsItem.is_cancel==0&&newsItem.is_member==0&&newsItem.express_no">
			
				<view @click="toExpress(newsItem.order_id)" class="btn-line active">
					查看物流
				</view>
			</view>
			
			<!-- end  查看物流 -->
			
			<!-- 确认收货  已发货-->
			<view class="order-btn flex" v-if="newsItem.is_member==0&&newsItem.is_cancel==0&&newsItem.is_send==1&&newsItem.is_confirm==0">
				<view @click="toConfirm(newsItem.order_id)" class="btn-line active">
					确认收货
				</view>
			</view>
			<!-- end  确认收货 -->
			
			<!-- 申请售后 已付款 已发货-->
			<!-- <view class="order-btn flex" v-if="newsItem.is_send==1&&newsItem.is_pay==1&&newsItem.is_cancel==0&&newsItem.is_confirm==1&&newsItem.is_member==0">
				<view @click="toService(newsItem.order_id)" class="btn-line active">
					申请售后
				</view>
			</view> -->
			<!-- end  申请售后 -->
			
			
			<!-- 删除订单 已取消-->
			<view class="order-btn flex" v-if="newsItem.is_delete==0&&newsItem.is_cancel==1">
				<view @click="toDelete(newsItem.order_id)" class="btn-line">
					删除订单
				</view>
			</view>
			<!-- end  删除订单 -->
			
			<!-- 确认下级订单 会员订单 未确认-->
			<view class="order-btn flex" v-if="newsItem.is_delete==0&&newsItem.is_cancel==0&&newsItem.is_member==1&&newsItem.is_pay==0&&newsItem.belong_id==newsItem.user_id">
				<view @click="toCheck(newsItem.order_id)" class="btn-line active">
					确认处理
				</view>
			</view>
			<!-- end  确认下级订单 -->
			
			
			<!-- 查看详细-->
			<view class="order-btn flex" v-if="newsItem.is_delete==0&&!isDetail">
				<view @click="detail(newsItem.order_id)" class="btn-line active">
					查看详细
				</view>
			</view>
			<!-- end  查看详细 -->
			
			<!-- 查看售后详情-->
			<view class="order-btn flex" v-if="newsItem.refund_type>0&&!isDetail">
				<view @click="toServiceDetail(newsItem.order_refund_id)" class="btn-line active">
					售后详情
				</view>
			</view>
			<!-- end  查看售后详情 -->
		</view>
		</view>
		
</template>

<script>
	
	export default {
		components: {
			
		},
		name: "utilButton",
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
			toDelete(index) {
				console.log(index)
				this.$emit('toDelete', index)
			},
			// toService(index) {
			// 	console.log(index)
			// 	this.$emit('toService', index)
			// },
			toConfirm(index) {
				console.log(index)
				this.$emit('toConfirm', index)
			},
			toCheck(index) {
				console.log(index)
				this.$emit('toCheck', index)
			},
			toExpress(index) {
				console.log(index)
				this.$emit('toExpress', index)
			},
			toCancel(index) {
				console.log(index)
				this.$emit('toCancel', index)
			},
			toServiceDetail(index) {
				console.log(index)
				this.$emit('toServiceDetail', index)
			},
			goLook(list){//查看凭证
				var _this = this;
				var arr=JSON.parse(list)
				if(arr.length>0){
					uni.previewImage({
						current: arr[0],
						loop: true,
						urls: arr
					})	
				}
			},
		},
		
		mounted() {
			
		},
	}
</script>

<style lang="scss" scoped>
		.order-btn-list{
			flex-wrap: wrap;
			justify-content: flex-end;
		.order-btn {
		padding: 20rpx 0rpx;
		margin-top: 0;
		.btn-line {
			width: 150rpx;
			height: 50rpx;
			border-radius: 10rpx;
			border: 1px solid #999;
			background: #fff;
			line-height: 50rpx;
			text-align: center;
			margin-left: 20rpx;
			color: #999
		}
		.btn-line.active {
			color: #dda461;
			border: 1px solid #dda461;
		}
	}
}
</style>
