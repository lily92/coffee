<template>
	<view>

		
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
			
			<view class="peisong tui-flex tui-align-between tui-vertical-center">
				<text>支付方式</text>
				<view class="tui-flex tui-vertical-center">
					<text>在线支付</text>
					<view class="right-btn">
						
					</view>
				</view>
			</view>
			
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
				<view class="peisong tui-flex tui-align-between tui-vertical-center">
					<text>发票</text>
					<view class="tui-flex tui-vertical-center">
						<text>电子发票</text>
						<view class="right-btn">
							
						</view>
					</view>
				</view>
				<view class="peisong tui-flex tui-align-between tui-vertical-center">
					<text>优惠券</text>
					<view class="tui-flex tui-vertical-center">
						<text>无可用</text>
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
				
		
			</view>
			<!-- end detail -->
		</view>
		
		
		<!-- 底部 -->
		<view class="cart-bottom-h">
		</view>
		<view class="cart-bottom bgf tui-flex tui-vertical-center tui-align-between">
			<view class=" padding-lr30">
				总计：<text class="color-org">￥8008.00</text>
			</view>
			<view class="fon34 colorf btn-submits tui-center">
				立即付款
			</view>
		</view>
		<!-- end 底部 -->
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
