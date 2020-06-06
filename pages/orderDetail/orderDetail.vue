<template>
	<view>
		<!-- 订单状态 -->
		<view class="detail-state padding-lr30 colorf tui-flex tui-vertical-center">
			<view class="">
				<view class="fon34">
					等待买家付款
				</view>
				<view class="">
					还剩6天21小时后自动取消
				</view>
			</view>
		</view>
		
		<view class="padding-lr30 padding-t30">
			<!-- 地址 -->
			<view class="address  tui-flex tui-vertical-center tui-align-between">
				<image class="address-img" src="../../static/images/icon-address.png" mode="widthFix"></image>
				<view class="address-con">
					<view class="">
						<text  class="margin-r20">S先生</text>
						<text>12312312345</text>
					</view>
					<view class="">
						广东省广州市东风路123号1000室
					</view>
				</view>
				<view class="right-btn">
					
				</view>
			</view>
			<!-- end地址  -->
			
			<!-- list -->
			<view v-for="(item,index) in list" :key="index">
				<product-item :productItem='item' class="product-item"></product-item>
			</view>
			<!-- end list -->
			
			<!-- detail -->
			<view class="detail">
				<view class="peisong tui-flex tui-align-between tui-vertical-center">
					<text>配送</text>
					<view class="tui-flex tui-vertical-center">
						<text>顺丰快递</text>
						<view class="right-btn">
							
						</view>
					</view>
				</view>
				<view class="margin-b20">
					<view class="margin-b10 tui-flex  tui-align-between tui-vertical-center">
						<text>商品总数</text>
						<text>x4</text>
					</view>
					<view class="margin-b10 tui-flex tui-align-between tui-vertical-center">
						<text>运费（总量：10kg）</text>
						<text>¥8.00</text>
					</view>
					<view class="tui-flex tui-align-between tui-vertical-center">
						<text>总金额</text>
						<text class="color-org">（含运费）¥8008.00</text>
					</view>
				</view>
				
				<view class="order-info padding-t30">
					订单信息
				</view>
				<view class="padding-t30 tui-flex tui-align-between">
					<view class="">
						<text class="margin-r20">订单编号：</text>     <text> 13233131213121</text>
					</view>
					<view class="color-org">
						复制
					</view>
				</view>
				<!--star 等待收货 -->
				<view class="">
					<view class="">
						<text class="margin-r20">下单时间：</text>
						<text> 2020-01-01  12:00</text>
					</view>
					<view class="">
						<text class="margin-r20">发货时间：</text>
						<text> 2020-01-01  12:00</text>
					</view>
					<view class="">
						<text class="margin-r20">付款时间：</text>
						<text> 2020-01-01  12:00</text>
					</view>
				</view>
				<!-- end 等待收货 -->
				<view class="btn-group">
					<order-btn :orderState='2'></order-btn>
				</view>
				
			</view>
			<!-- end detail -->
		</view>
		
		
		
	</view>
</template>

<script>
	import productItem from '@/components/my/productItem.vue'
	import orderBtn from '@/components/my/orderBtnGroup.vue'
	export default {
		data() {
			return {
				list:[
					{
					
				},	{
					
				},
				]
			};
		},
		components:{
			productItem,
			orderBtn
		}
	}
</script>

<style lang="scss" scoped>
	page{ background: #fff;}
.detail-state {
	width: 100%;
	height: 257rpx;
	background-color: #e96a1e;
}
.address{ border-bottom: 1rpx solid $border-color; padding-bottom: 30rpx;margin-bottom: 30rpx;}
.address-img{ width: 46rpx;}
.address-con{ width: 540rpx;}
.product-item{ padding-bottom: 30rpx; border-bottom: 1px solid $border-color; margin-bottom: 30rpx;}
.peisong{ border-bottom: 1px solid $border-color; padding-bottom: 30rpx; margin-bottom: 30rpx;}
.order-info{
	border-top: 1px solid $border-color; padding-bottom: 30rpx; border-bottom: 1px solid $border-color;
}
.btn-group{padding-bottom: 100rpx;padding-top: 30rpx;}
</style>
