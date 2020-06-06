<template>
	<view class="padding-t30">
		<view class="color6 tui-center padding30 margin-b50">
			<view class="">感谢您的评价</view>
			<view class="">格米莱将会根据您的评价继续优化服务</view>
		</view>
		<view class="w560 margin-auto margin-b50">
			<view class="tui-flex tui-vertical-center   tui-align-between margin-b50">
				<view class="color6">服务态度</view>
				<view class="xingxing"><uni-rate :size="18" :value="4" color="#bbb" active-color="#e96a1e" @change="onChange" /></view>
				<view class="color9">星级评价</view>
			</view>
			<view class="tui-flex tui-vertical-center   tui-align-between margin-b50">
				<view class="color6">维修时效</view>
				<view class="xingxing"><uni-rate :size="18" :value="5" color="#bbb" active-color="#e96a1e" @change="onChange" /></view>
				<view class="color9">星级评价</view>
			</view>
			<view class="tui-flex tui-vertical-center   tui-align-between margin-b50">
				<view class="color6">整体服务</view>
				<view class="xingxing"><uni-rate :size="18" :value="5" color="#bbb" active-color="#e96a1e" @change="onChange" /></view>
				<view class="color9">星级评价</view>
			</view>
		</view>
	
	    <view class="positionr margin-auto text-area  margin-b50">
			<textarea  class=" fon20 bgf7   padding20  " value="" placeholder="请输入文字评价"  maxlength="500"/>
			<view class="max-length color9">
				最多输入500个字
			</view>
	    </view>
		 <view class="btn-submit fon30">
		 	立即评价
		 </view>
	</view>
</template>

<script>
import tuiRate from '../../components/uni-rate/uni-rate.vue';
export default {
	data() {
		return {
			loadding: false,
			show: false,
			current: 0,
			current1:0,
			current2:0,
			index: 3,
			score: 4,
			active:"#e96a1e"
		};
	},
	components: {
		tuiRate
	},
	methods: {
		onChange(e) {
			// console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}
.w560 {
	width: 560rpx;
}
.xingxing {
	padding: 0 30rpx;
}
.text-area {
	width: 636rpx;
	height: 256rpx;
	padding: 20rpx 20rpx 40rpx 20rpx;
	textarea{ height:100%}
	
}
.max-length{ position: absolute;right:25rpx; bottom:25px; font-size: 12px;}
</style>
