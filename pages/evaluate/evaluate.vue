<template>
	<view>
		<view class="">
			<image mode="widthFix" class="img" src="../../static/images/my/info/qa-img.jpg"></image>
			<view class="tui-center">
				<view class="fon34">格米莱CRM3200C咖啡机</view>
				<view class="fon34 ellipsis">商用半自动专业意式家用多锅炉...</view>
			</view>
			<!-- 星星评价 -->
			<view class="evaluate  tui-flex tui-align-center"><uni-rate :value="4" color="#bbb" active-color="#e96a1e" @change="onChange" /></view>
			<!-- end 星星评价 -->
			<textarea class="comment margin-auto" placeholder="你的产品体验如何？写出来分享给大家吧~"></textarea>

			<!-- 上传图片 -->
			<view class="tui-upload-img padding-lr30 tui-flex w100">
				<view class="up-img margin-r20"><image src="../../static/images/img-upload.jpg" mode="widthFix" class="upload-img"></image></view>
				<view class="up-img positionr">
					<image src="../../static/images/upload-img.jpg" mode="widthFix" class="upload-img"></image>
					<view class="icon-close"></view>
				</view>
			</view>
			<!-- end 上传图片 -->

			<!-- 描述相符度 -->
			<view class="padding-lr30 fon30 padding-t30">
				<view class="tui-flex tui-vertical-center">
					<text class="margin-r40">描述相符</text>
					<uni-rate :size="18" :value="5" color="#bbb" active-color="#e96a1e" @change="onChange" />
				</view>
				<view class="tui-flex tui-vertical-center">
					<text class="margin-r40">物流服务</text>
					<uni-rate :size="18" :value="4" color="#bbb" active-color="#e96a1e" @change="onChange" />
				</view>
				<view class="tui-flex tui-vertical-center">
					<text class="margin-r40">服务态度</text>
					<uni-rate :size="18" :value="4" color="#bbb" active-color="#e96a1e" @change="onChange" />
				</view>
			</view>
			<!-- end 描述相符度 -->
			
			<view class="btn-submit margin-t80 margin-b50">
				确定
			</view>
		</view>
	</view>
</template>

<script>
import tuiRate from '../../components/uni-rate/uni-rate.vue';
export default {
	data() {
		return {};
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
<style lang="scss">
	page {
		background: #fff;
	}
</style>
<style lang="scss" scoped>

.img {
	width: 188rpx;
	height: 188rpx;
	display: block;
	margin: 70rpx auto 30rpx;
}
.evaluate {
	padding: 60rpx 0;
}
.comment {
	width: 708rpx;
	height: 229rpx;
	background-color: #f5f5f5;
	padding: 20rpx 30rpx;
	margin-bottom: 20rpx;
}
.upload-img {
	width: 156rpx;
}
.icon-close {
	width: 37rpx;
	height: 35rpx;
	background: url(~@/static/images/icon-close.png) no-repeat center;
	background-size: contain;
	position: absolute;
	right: -10rpx;
	top: -10rpx;
}
.margin-r40{ margin-right: 40rpx;}
.margin-t80{ margin-top: 80rpx;}
</style>
