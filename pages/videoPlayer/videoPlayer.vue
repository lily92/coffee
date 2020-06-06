<template>
	<view class="tui-flex tui-vertical-center h100">
		<video
			poster="https://gdhflw.com/public/partime/zhongwang/images/index/item-img2.png"
			title="视频名称"
			class="w100"
			id="myVideo"
			src=""
			@error="videoErrorCallback"
			controls
		></video>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		videoErrorCallback: function(e) {
			console.log('视频资源')
			// uni.showModal({
			// 	content: e.target.errMsg,
			// 	showCancel: false
			// });
		}
	},
	onReady: function(res) {
		// #ifndef MP-ALIPAY
		this.videoContext = uni.createVideoContext('myVideo');
		// #endif
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-0;
}
.h100 {
	height: 80vh;
}
</style>
