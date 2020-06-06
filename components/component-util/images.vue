<template>
	<view class="color9 flex flex-just-between">
		<view v-for="(item,index) in files" :key="index" class="identity-img flex flex-al-center text-center">
			 <image :src="item" :style="{  height: height + 'rpx' }" class='w100 identity-image' @tap="previewImage" mode="aspectFill" :id="item"></image>
		</view>
	</view>	
</template>

<script>
	import tuiIcon from "@/components/icon/icon"	
	export default {
		components: {
			tuiIcon,
		},
		name: "utilImages",
		props: {
			
			
			files: {
				//图片列表
				type: Array,
				default: function() {
					return []
				}
			},
			height:{
				type: Number,
				default: 228
			},
			
		},
		data() {
			return {
				
			};
		},
		methods: {
		
							previewImage: function (e) {
								uni.previewImage({
									current: e.currentTarget.id, // 当前显示图片的http链接
									urls: this.files // 需要预览的图片http链接列表
								})
							},
												
		},
		
		mounted() {
			
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../static/style/thorui.css';
	.identity-img {
		width: 48%;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin-top: 30rpx;
		position: relative;
	}
	.add {font-size: 80rpx;}
	.identity-image {
		border-radius: 20rpx;
	}
</style>
