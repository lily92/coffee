<template>
	
	
		<view :style="{  height: height + 'rpx'}" v-if="!url" @tap="chooseImage" class="identity-img flex flex-al-center text-center">
			<view class='w100'>
				<view class="add">
					+
				</view>
				<view class="">
					{{name}}
				</view>
			</view>
		</view>
		<view v-else class="identity-img flex flex-al-center text-center">
			 <image :src="url" :style="{  height: height + 'rpx' }" class='w100 identity-image' @tap="previewImage" mode="aspectFill" :id="url"></image>
		<tui-icon :color="close_color" :size="24" name="close-fill" class="tui-upload-del"  @click="del"></tui-icon>
		</view>

			
			
		
		
</template>

<script>
	import tuiIcon from "@/components/icon/icon"	
	export default {
		components: {
			tuiIcon,
		},
		name: "utilUpload",
		props: {
			
			name: {//名称
				type: String,
				default: "上传收款码"
			},
			url:{
				type: String,
				default: ""
			},
			height:{
				type: Number,
				default: 228
			},
			close_color: {//关闭按钮颜色
				type: String,
				default: "#ed3f14"
			},
			type: {//
				type: Number,
				default: 1
			},
			
		},
		data() {
			return {
				
			};
		},
		methods: {
			chooseImage: function (e) {
								let that = this;
								uni.chooseImage({
									count: 1, //默认9
									sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
									sourceType: ['album'], //从相册选择
								    success: (chooseImageRes) => {
								        const tempFilePaths = chooseImageRes.tempFilePaths;
								        const appArr = getApp().globalData;
										
										that.tui.uploadFile(tempFilePaths[0],'image').then(function(data) {
											
											if (data.code == 0) {
												that.add(data.data.url)
											}
										});
								    }
								});
							
							},
							previewImage: function (e) {
								uni.previewImage({
									current: 0, // 当前显示图片的http链接
									urls: [this.url] // 需要预览的图片http链接列表
								})
							},
							add(index) {
								this.$emit('add',index, this.type)
							},
							del() {
								this.$emit('del', this.type)
							},
							
		},
		
		mounted() {
			
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../static/style/thorui.css';
	.identity-img {
		width: 100%;
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
