<template>
	<view class="tui-flex tui-align-right  padding-t30 ">
		<view class="btn btn-cancel" v-if="orderState === 1" @tap="cancel(item)">取消订单</view>
		<view class="btn btn-confrim" v-if="orderState === 1" @tap="pay(item)">立即付款</view>
		<view class="btn btn-cancel" v-if="orderState === 3"  @tap="comment(item)">评价</view>
		<view class="btn btn-cancel" v-if="orderState === 3">再次购买</view>
		<view class="btn btn-cancel" v-if="orderState === 2 || orderState === 3 " @tap="afterSale(item)">申请售后</view>
		<view class="btn btn-cancel"  v-if="orderState === 2" @tap="logisitics(item)">查看物流</view>
		<view class="btn btn-confrim"  v-if="orderState === 2" @tap="confrim(item)">确认收货</view>
	</view>
</template>
 
<script>
	export default {
		name: "orderBtn",
		props:{
			item:{
				type:Object
			},
			orderState:{
				type: Number, //1待付款，2待收货，3待评价，4退换货
				default: 0
			}
		},
		methods:{
			cancel(item){
				//取消订单
				this.$emit('cancel',item);
			},
			pay(item){
				//立即付款 
				this.$emit('pay',item);
			},
			comment(item){
				//评价
				this.$emit('comment',item);
			}
			,logisitics(item){
				//查看物流
				this.$emit('readlogisitics', item);
			},
			afterSale(item){
				//售后
				this.$emit('afterSale', item);
			},
			confrim(item){
				//确认收货
				this.$emit('confrim', item);
			}
		}
		}
</script>

<style lang="scss" scoped>
	.btn {
		width: 160rpx;
		height: 56rpx;
		text-align: center;
		line-height: 52rpx;
		margin-left: 40rpx;
	}
	.btn-cancel{
		background-color: #ffffff;
		border: solid 1rpx #999999;
	}
	.btn-confrim{
		background-color: #e96a1e;
		border: solid 1rpx #e96a1e;
		color:$color-f
	}
</style>
