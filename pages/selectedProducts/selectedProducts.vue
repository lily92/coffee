<template>
	<view>
		<view class="banner positionr">
			<image class="w100" src="../../static/images/jingxuan-banner.jpg" mode="widthFix"></image>
			<view class="positionb-w tui-flex tui-vertical-center tui-align-center fon47 colorf">精选产品</view>
		</view>
		<view class="bgf7">
			<view class="new-content ">
				<view class="content-top max435">
					<view class="title fon34 tui-center">精选产品</view>
					<view class="color6 tui-center fon20 ">用心灵来感受世界，你会展开新的探索 发现之旅，你会捕捉到其他感官而不能触及的东西。</view>
				</view>
				<!-- list -->
				<view class="list">
					<view v-for="(item, index) in newsList" :key="index">
						<new-item :item='item' @click="showDetail"></new-item>
					</view>
				</view>
				<!-- end list -->
			</view>
			<!--加载loadding-->
			<tui-loadmore v-if="loadding"></tui-loadmore>
			<tui-nomore v-if="!pullUpOn"></tui-nomore>
			<!--加载loadding-->
		</view>
	</view>
</template>

<script>
import newItem from '@/components/use/new-item/new-item.vue';
export default {
	components: {
		newItem,
	},
	data() {
		return {
			pageIndex: 1,
			newsList: [
				{
					title: '应用到咖啡机上，实现了磨粉、压粉、装粉、 冲泡、清除残渣等...',
					img: '../../static/images/new-img.jpg',
					id: '12',
					type: '1',
					typeName: '精选产品',
					date: '2020-05-10'
				},
				{
					title: '压粉、装粉、 冲泡、清除残渣等...',
					img: '../../static/images/new-img.jpg',
					id: '12',
					type: '1',
					typeName: '精选产品',
					date: '2030-05-10'
				}
			],
			loadData: [
				{
					title: '应用到咖啡机上，实现了磨粉、压粉、装粉、 冲泡、清除残渣等...',
					img: '../../static/images/new-img.jpg',
					id: '12',
					type: '1',
					typeName: '精选产品',
					date: '2020-05-10'
				},
				{
					title: '应用到咖啡机上，实现了磨粉、压粉、装粉、 冲泡、清除残渣等...',
					img: '../../static/images/new-img.jpg',
					id: '12',
					type: '1',
					typeName: '精选产品',
					date: '2020-05-10'
				}
			],
			loadding: false,
			pullUpOn: true
		};
	},
	methods: {
		showDetail(e) {
			console.log(e)
			uni.navigateTo({
				// url: '/pages/template/news/newsDetail/newsDetail'
			});
		},
		detail(e) {
			uni.navigateTo({
				url: '/pages/template/news/newsDetail/newsDetail'
			});
		}
	},
	onLoad(option) {
		console.log('根据传过来的id请求接口更改内容')
		console.log('传过来的typeId'+option.typeId)
	},
	//页面相关事件处理函数--监听用户下拉动作
	onPullDownRefresh() {
		//延时为了看效果
		setTimeout(() => {
			this.newsList = this.loadData;
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false;
			uni.stopPullDownRefresh();
			this.tui.toast('刷新成功');
		}, 200);
	},

	// 页面上拉触底事件的处理函数
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true;
		if (this.pageIndex == 3) {
			this.loadding = false;
			this.pullUpOn = false;
		} else {
			this.newsList = this.newsList.concat(this.loadData);
			this.pageIndex = this.pageIndex + 1;
		}
	}

};
</script>

<style lang="scss" scoped>
.new-content {
	padding: 15rpx 30rpx;
}
.max435 {
	max-width: 500rpx;
	margin: 70rpx auto;
}
.title {
	margin-bottom: 50rpx;
}
</style>
