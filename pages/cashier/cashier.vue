<template>
	<view>
	  <view class="min80vh">
	  	<view class="top tui-flex tui-align-center padding-t30 margin-b50">
	  		<view class="">
	  			<view class="tui-flex">
					 <icon class=" icon-success margin-r20 positionr" type="success" size="26" color='#e96a1e'/>
	  				<!-- <view class="icon-success margin-r20 positionr"></view> -->
	  				<view class="color-org">
	  					<view class="fon40">需付款</view>
	  					<view class="fon54">￥8008.00</view>
	  				</view>
	  			</view>
	  			<view class="tui-flex tui-vertical-center oder-commfirm">
	  				<view class="icon-dot margin-r20 positionr"></view>
	  				<view class="color9">订单已确认</view>
	  			</view>
	  		</view>
	  	</view>
	  	<view class="payway fon34 margin-b50">付款方式</view>
	  	<view class="">
	  		<radio-group @change="radioChange">
	  			<label class="tui-flex padding30 border-b  tui-vertical-center tui-align-between" v-for="(item, index) in payList" :key="item.value">
	  				<view class="icon-pay margin-r20"><image src="../../static/images/icon-wechat.png" mode="widthFix" class="w100"></image></view>
	  				<view class="pay-desc">{{ item.name }}</view>
	  				<radio color="#f07623" :value="item.value" :checked="index === current" />
	  			</label>
	  		</radio-group>
	  	</view>
	  	
	  </view>
		<view class="btn-submit">
			微信支付￥8008.00
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			payList: [
				{
					icon: '../../static/images/icon-wechat.png',
					name: '微信支付',
					value: '12'
				},
				{
					icon: '../../static/images/icon-wechat.png',
					name: '支付宝',
					value: '10'
				}
			]
		};
	},
	methods: {
		radioChange: function(evt) {
			for (let i = 0; i < this.payList.length; i++) {
				if (this.payList[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}

.icon-success::after {
	display: block;
	content: '';
	width: 6rpx;
	height: 100rpx;
	background: $color-org;
	top: 55rpx;
	left: 25rpx;
	position: absolute;
}
.icon-dot {
	width: 15rpx;
	height: 15rpx;
	background: #ccc;
	border-radius: 50%;
}
.oder-commfirm {
	padding: 80rpx 0 0 20rpx;
	position: relative;
}
.oder-commfirm::before {
	position: absolute;
	content: '';
	width: 3rpx;
	height: 78rpx;
	background: $border-color;
	top: 20rpx;
	left: 25rpx;
}
.payway {
	padding: 30rpx 20rpx;
	background: $border-color;
}
.icon-pay {
	width: 60rpx;
}
.pay-desc {
	width: calc(100% - 150rpx);
}
.border-b {
	border-bottom: 1px solid $border-color;
}
.min80vh{ min-height: 80vh; padding-bottom: 30rpx;}
</style>
