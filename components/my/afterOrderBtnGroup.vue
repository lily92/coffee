<template>
	<view class="tui-flex tui-align-between ">
		<view class=""  v-if="orderState != 1 || orderState != 2"  >
			
		</view>
		<view class=" color9 tui-flex tui-vertical-center" v-if="orderState == 1">
			<image class="icon margin-r20" src="../../static/images/icon-tuikuan.png" mode="widthFix"></image>
			已申请退款不退货
		</view>
		
		<view class=" color9 tui-flex tui-vertical-center" v-if="orderState == 2">
			<image class="icon margin-r20" src="../../static/images/icon-tuikuan.png" mode="widthFix"></image>
			已申请退款退货
		</view>
		
		
		<view class="tui-flex">
			<view class="btn btn-cancel" >取消申请</view>
			<view class="btn btn-cancel" >修改申请</view>
		</view>
		
	</view>
</template>
 
<script>
	export default {
		name: "afterOrderBtnGroup",
		props:{
			orderState:{
				type: Number, //1已申请退款不退货, 2已申请退款不退货
				default: 0
			}
		},
		methods:{
			cancel(){
				//取消
				this.$emit('cancel', {});
			},
			edit(){
				//修改申请
				this.$emit('edit', {});
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
	.icon{ width: 30rpx;}
</style>
