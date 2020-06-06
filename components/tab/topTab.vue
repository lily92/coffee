<template>
	<view>
		<scroll-view ref="tabbar1" id="tab-bar" class="tab-bar" :scroll="false" :scroll-x="true" :show-scrollbar="false"
		 :scroll-into-view="scrollInto">
			<view style="flex-direction: column;">
				<view style="flex-direction: row;">
					<view class="uni-tab-item" v-for="(tab,index) in tabList" :key="tab.id" :id="tab.id" :ref="'tabitem'+index"
					 :data-id="index" :data-current="index" @click="ontabtap">
						<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
					</view>
				</view>
				<view class="scroll-view-indicator">
					<view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''" :style="{left: indicatorLineLeft + 'px', width: indicatorLineWidth + 'px'}"></view>
				</view>
			</view>
		</scroll-view>
		<view class="tab-bar-line"></view>
	</view>
</template>

<script>
	export default {
		props:['tabList','tabIndex','indicatorLineWidth','indicatorLineLeft'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.tab-bar {
		width: 750rpx;
		height: 84rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.tab-bar ::-webkit-scrollbar {
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
	/* #endif */

	.scroll-view-indicator {
		position: relative;
		height: 2px;
		background-color: transparent;
	}

	.scroll-view-underline {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 0;
		background-image: linear-gradient(90deg, 
		#6d8bff 0%, 
		#f3e0fc 100%), 
	linear-gradient(
		#f6bcb5, 
		#f6bcb5);
	background-blend-mode: normal, 
		normal;
	}

	.scroll-view-animation {
		transition-duration: 0.2s;
		transition-property: left;
	}

	.tab-bar-line {
		height: 1rpx;
		background-color: #cccccc;
	}

	.tab-box {
		flex: 1;
		height: calc(100% - 84rpx);
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 20px;
		padding-right: 20px;
		width: 33.33%;
		text-align: center;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #90a0e4;
	}

</style>
