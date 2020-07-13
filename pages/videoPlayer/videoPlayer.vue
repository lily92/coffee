<template>
	<view class="tui-flex tui-vertical-center h100">
		<video
			poster="https://gdhflw.com/public/partime/zhongwang/images/index/item-img2.png"
			title="视频名称"
			class="w100"
			id="myVideo"
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
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
			console.log('视频资源');
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
<style lang="scss">
page {
	background: $color-0;
}
</style>
<style lang="scss" scoped>
.h100 {
	height: 80vh;
}
</style>
