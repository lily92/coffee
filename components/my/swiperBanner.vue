<template>
	<view class="uni-padding-wrap">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper indicator-active-color='#f07623' indicator-color='#fff' :style="{height:height+'rpx'}" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item, index) in list" :key="index">
						<image :src="item.img" mode="widthFix" class="w100"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'swiperBanner',
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	props: {
		height:{
			type:Number,
			default:500
		},
		list: {
			type: Array
		}
	}
};
</script>

<style lang="scss">
	// .swiper{ height: 250px !important;}
	
</style>
