<template>
	<view class=" flex flex-al-center just-center">
		<view class="master" @tap="closeMaster">
		</view>
		
		<view class="w634">
			<image :src="sl_link" mode="widthFix" class="border-r20" ></image>
			<view class="colorf fon32 text-center">
				{{shareTitle}}
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props:['sl_link','shareTitle'],
		data() {
			return {
				// sl_link: "../../static/images/bg-share1.png",
			}
		},
		onLoad: function(options) {
	
	
		},
		mounted() {
			
		},
		methods:{
			closeMaster(){
				this.$emit('close', {});
			}
		}

	}
	
</script>

<style lang="scss" scoped>
	.border-r20{ border-radius: 20rpx;}
	.master {
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba($color: #000000, $alpha: .6);
		position: fixed;
		width: 100%;
		z-index:99
	}
	.just-center{ justify-content: center;}
	.w634 {
		width: 634rpx;
		margin: 0 auto;
		padding-top: 22rpx;
		position:fixed;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		z-index: 101;
	}
</style>
