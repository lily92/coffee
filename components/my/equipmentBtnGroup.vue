<template>
	<view class="tui-flex tui-align-right color9 ">
		<view class="btn btn-cancel" @tap="again">再次报修</view>
		<view class="btn btn-confrim" v-if="equipmentState == 3" @tap="comment">立即评价</view>
		<view class="btn btn-confrim" v-if="equipmentState == 1" @tap="comfrim">确认完成</view>
	</view>
</template>

<script>
export default {
	name: 'equipmentBtnGroup',
	props: {
		equipmentState: {
			type: Number, //1待确认，2已取消 3已完成
			default: 1
		}
	},
	methods: {
		again() {
			//再次报修
			this.$emit('again', {});
		},
		comment() {
			//评价
			this.$emit('comment', {});
		},
		comfrim() {
			//确认完成
			this.$emit('comfrim', {});
		}
	}
};
</script>

<style lang="scss" scoped>
.btn {
	width: 160rpx;
	height: 56rpx;
	text-align: center;
	line-height: 52rpx;
	margin-left: 40rpx;
}
.btn-cancel {
	background-color: #ffffff;
	border: solid 1rpx #999999;
}
.btn-confrim {
	background-color: #e96a1e;
	border: solid 1rpx #e96a1e;
	color: $color-f;
}
</style>
