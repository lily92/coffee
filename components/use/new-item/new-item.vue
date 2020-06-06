<template>
	<view class="list-item" @tap="goDetail(item.id)" >
		<view class="w100 positionr list-img">
			<image src="../../../static/images/new-img-bg.jpg" mode="widthFix" class="w100"></image>
			<view class="positionb-w"><image :src="item.img" mode="widthFix" class="w100"></image></view>
		</view>
		<view class="list-con ">
			<view class="fon32">{{item.title}}</view>
			<view class="fon22 time color9">{{item.date}}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "newItem",
	props:{
		item:{
			type:Object
		}
	},
	methods: {
		goDetail(newId) {
			this.$emit('click',newId);
			
		}
	}
};
</script>

<style lang="scss" scoped>

.list-img image {
	display: block;
}
.list-con {
	padding: 30rpx 20rpx;
	background: $color-f;
	border: 1px solid #ccc;
	border-top: 0;
}
.time {
	padding-top: 20rpx;
}
.list-item {
	margin-bottom: 44rpx;
}
</style>
