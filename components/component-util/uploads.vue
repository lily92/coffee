<template>
	<view class="color9 flex flex-just-between">
		<view :style="{  height: height + 'rpx'}" v-if="files.length < limit" @tap="chooseImage" class="identity-img flex flex-al-center text-center">
			<view class='w100'>
				<view class="add">
					+
				</view>
				<view class="">
					{{name}}
				</view>
			</view>
		</view>
		<view v-for="(item,index) in files" :key="index" class="identity-img flex flex-al-center text-center">
			 <image :src="item" :style="{  height: height + 'rpx' }" class='w100 identity-image' @tap="previewImage" mode="aspectFill" :id="item"></image>
		<tui-icon :color="close_color" :size="24" name="close-fill" :index="index" class="tui-upload-del"  @click="dels"></tui-icon>
		</view>
	</view>	
</template>

<script>
	import tuiIcon from "@/components/icon/icon"	
	export default {
		components: {
			tuiIcon,
		},
		name: "utilUploads",
		props: {
			
			name: {
				//名称
				type: String,
				default: "上传收款码"
			},
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
			close_color: {
				//关闭按钮颜色
				type: String,
				default: "#ed3f14"
			},
			type: {
				//类型
				type: Number,
				default: 1
			},
			limit: {
				//上传数量限制
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
	
										that.tui.uploadFile(tempFilePaths[0],'image').then(function(data) {
											
											if (data.code == 0) {
												that.adds(data.data.url)
											}
										});
								    }
								});
							
							},
							previewImage: function (e) {
								uni.previewImage({
									current: e.currentTarget.id, // 当前显示图片的http链接
									urls: this.files // 需要预览的图片http链接列表
								})
							},
							dels: function (e) {
								const index = e.index;
								this.$emit('dels',index, this.type)
							},
							adds(index) {
								this.$emit('adds',index, this.type)
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

