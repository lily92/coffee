<template>
	<view>
		<view class="info-num colorf fon26">
			已收藏
			<b>4</b>
			个产品
		</view>
		<view class="list padding-lr30">
			<view v-for="(item,index) in list" :key="index" class="item tui-flex tui-vertical-center tui-align-between">
				<view class="img"><image src="../../static/images/my/info/qa-img.jpg" mode="widthFix" class="w100"></image></view>
				<view class="desc">
					<view class="">
						<view class="">格米莱CRM3200C咖啡机</view>
						<view class="ellipsis">商用半自动专业意式家用多锅炉...</view>
					</view>
					<view class="">¥2000.00</view>
				</view>
				<view class="close-btn">关闭</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list:[
				{
					'img':"../../static/images/my/info/qa-img.jpg"
				},
				{
					'img':"../../static/images/my/info/qa-img.jpg"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}
.info-num {
	background: $color-org;
	padding: 60rpx 20px;
	b {
		padding: 0 5rpx;
	}
}
.item {
	padding: 30rpx 0; border-bottom: 1px solid $border-color;
}
.img {
	width: 153rpx;
}
.close-btn {
	width: 60rpx;
	height: 58rpx;
	background: url(~@/static/images/my/btn-close.png) no-repeat;
	background-size: contain;
	font-size: 0;
}
.desc{ width: 455rpx;}
</style>
