<template>
	<view class="container">
		<!-- <view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" :size="13" color="#999"></icon>
				<text class="tui-search-text">搜索商品</text>
			</view>
		</view> -->

		<scroll-view scroll-y scroll-with-animation class="tab-view padding-t30" :scroll-into-view="scrollViewId" :style="{ height: height + 'px', top: top + 'px' }">
			<view
				:id="`id_${index}`"
				v-for="(item, index) in tabbar"
				:key="index"
				class="tab-bar-item"
				:class="[currentTab == index ? 'active' : '']"
				:data-current="index"
				@tap.stop="swichNav"
			>
				<text>{{ item }}</text>
			</view>
		</scroll-view>
		<block v-for="(item, index) in tabbar" :key="index">
			<scroll-view scroll-y class="right-box" :style="{ height: height + 'px', top: top + 'px' }" v-if="currentTab == index">
				<view class="page-view">
					<view class="classify-img"><image src="../../static/images/active-banner.jpg" mode="widthFix" class="w100"></image></view>
					<view class="class-box">
						<view class="class-item">
							<view class="class-name">{{ item }}</view>
							<view class="g-container">
								
								<view v-for="(item,index) in productList" :key="index" class="g-box" @tap.stop="productList" data-key="商用咖啡机">
									<image src="../../static/images/my/info/qa-img.jpg" class="g-image" />
									<view class="g-title">商用咖啡机</view>
								</view>
							</view>
						</view>

						<view class="class-item">
							<view class="class-name">热门分类</view>
							<view class="g-container">
								<view v-for="(item,index) in productList" :key="index" class="g-box" @tap.stop="productList" data-key="家用咖啡机" v-if="index % 2 === 0">
									<image src="../../static/images/my/info/qa-img-bg.jpg" class="g-image" />
									<view class="g-title">家用咖啡机</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabbar: ['为你推荐', '商用咖啡机', '家用咖啡机', '咖啡豆','为你推荐', '商用咖啡机', '家用咖啡机', '咖啡豆','为你推荐', '商用咖啡机', '家用咖啡机', '咖啡豆','为你推荐', '商用咖啡机', '家用咖啡机', '咖啡豆', '品牌专区'],
			productList: [{
				
			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			}],
			height: 0, //scroll-view高度
			top: 0,
			currentTab: 0, //预设当前项的值
			scrollViewId: 'id_0'
		};
	},
	onLoad: function(options) {
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					let header = 0;
					let top = 0;
					//#ifdef H5
					top = 44;
					//#endif
					this.height = res.windowHeight - uni.upx2px(header);
					this.top = top + uni.upx2px(header);
				}
			});
		}, 50);
	},
	methods: {
		// 点击标题切换当前页时改变样式
		swichNav: function(e) {
			let cur = e.currentTarget.dataset.current;
			if (this.currentTab == cur) {
				return false;
			} else {
				this.currentTab = cur;
				this.checkCor();
			}
		},
		//判断当前滚动超过一屏时，设置tab标题滚动条。
		checkCor: function() {
			if (this.currentTab > 6) {
				this.scrollViewId = `id_${this.currentTab - 2}`;
			} else {
				this.scrollViewId = `id_0`;
			}
		},
		detail(e) {
			uni.navigateTo({
				url: '../productDetail/productDetail'
			});
		},
		productList(e) {
			let key = e.currentTarget.dataset.key;
			uni.navigateTo({
				// url: '../productList/productList?searchKey=' + key
			});
		},
		search: function() {
			uni.navigateTo({
				// url: '../../news/search/search'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: #fff;
}

/* 左侧导航布局 start*/

/* 隐藏scroll-view滚动条*/

::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}

.tui-searchbox {
	width: 100%;
	height: 92rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	/* #ifdef H5 */
	top: 44px;
	/* #endif */
	z-index: 100;
}

.tui-searchbox::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #d2d2d2;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-search-input {
	width: 100%;
	height: 60rpx;
	background: #f1f1f1;
	border-radius: 30rpx;
	font-size: 26rpx;
	color: #999;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-search-text {
	padding-left: 16rpx;
}

.tab-view {
	/* height: 100%; */
	width: 200rpx;
	position: fixed;
	left: 0;
	z-index: 10;
	border-right: 6rpx solid $border-color;
}

.tab-bar-item {
	width: 200rpx;
	height: 80rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
	color: #444;
	font-weight: 400;
	margin-bottom: 10rpx;
}

.active {
	position: relative;
	color: #fff;
	font-size: 30rpx;
	background: #e96a1e;
}

/* 左侧导航布局 end*/
.classify-img {
	padding-left: 20rpx;
	border-bottom: 7rpx solid rgba($color: #ccc, $alpha: 0.5);
	padding-bottom: 20rpx;
	padding-right: 20rpx;
}

.right-box {
	width: 100%;
	position: fixed;
	padding-left: 200rpx;
	box-sizing: border-box;
	left: 0;
}

.page-view {
	width: 100%;
	overflow: hidden;
	padding-top: 30rpx;
	box-sizing: border-box;
	padding-bottom: env(safe-area-inset-bottom);
}

.slide-image {
	width: 100%;
	height: 220rpx;
}

.class-box {
	padding-top: 30rpx;
}

.class-item {
	background: #fff;
	width: 100%;
	box-sizing: border-box;
	padding: 0 20rpx 20rpx;
	margin-bottom: 40rpx;
	border-bottom: 7rpx solid rgba($color: #ccc, $alpha: 0.5);
}

.class-name {
	font-size: 22rpx;
}

.g-container {
	/* padding-top: 20rpx; */
	display: flex;
	display: -webkit-flex;
	justify-content: flex-start;
	flex-direction: row;
	flex-wrap: wrap;
}

.g-box {
	width: 33.3333%;
	text-align: center;
	padding-top: 40rpx;
}

.g-image {
	width: 120rpx;
	height: 120rpx;
}

.g-title {
	font-size: 22rpx;
}
</style>
