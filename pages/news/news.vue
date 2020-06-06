<template>
	<view>
		<swiper-banner :list="bannerList" class="h240"></swiper-banner>

		<view class="tab padding20 tui-center bgf7 tui-flex">
			<navigator class="tab-item tui-col-3" url="../qa/qa">
				<view class="tab-icon tab-icon1 "></view>
				<view class="">问答</view>
			</navigator>
			<navigator class="tab-item tui-col-3" url="../maintenanceVideo/maintenanceVideo">
				<view class="tab-icon tab-icon2 "></view>
				<view class="">视频</view>
			</navigator>
			<navigator url="../addDevice/addDevice" class="tab-item tui-col-3" >
				<view class="tab-icon tab-icon3 "></view>
				<view class="">产品注册</view>
			</navigator>
			<navigator url="../findStore/findStore" class="tab-item tui-col-3" >
				<view class="tab-icon tab-icon4 "></view>
				<view class="">查找门店</view>
			</navigator>
		</view>

		<view class="zixun padding-tb40">
			<view class="tui-center">
				<view class="fon34">热门资讯</view>
				<view class="fon20">点击标签快速查看相关信息（可多选）</view>
			</view>
			<!-- list -->
			<new-tab :listTab="listTab"></new-tab>

			<!-- end list -->
		</view>

		<!-- new -->
		<view class="newlist  padding-lr30">
			<view v-for="(item,index) in newsList" :key="index">
				<new-item :item='item' @click='godetail'></new-item>
			</view>
			
		</view>
		<!-- end new -->
		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
		
		<right-icon></right-icon>
	</view>
</template>
<script>
import swiperBanner from '@/components/my/swiperBanner.vue';
import newTab from '@/components/newTab.vue';
import newItem from '@/components/use/new-item/new-item.vue'
import tuiLoadmore from '@/components/use/tui-loadmore/tui-loadmore.vue';
import tuiNomore from '@/components/use/tui-nomore/tui-nomore.vue';
import rightIcon from '../../components/use/rightIcon';

export default {
	data() {
		return {
			pageIndex: 1,
			loadding: false,
			pullUpOn: true,
			bannerList: [
				{
					img: '../../static/images/index-banner.jpg'
				},
				{
					img: '../../static/images/index-banner.jpg'
				},
				{
					img: '../../static/images/index-banner.jpg'
				}
			],
			newsList:[
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
			listTab: [
				{
					id: 12,
					name: '咖啡机'
				},
				{
					id: 12,
					name: '咖啡豆'
				},
				{
					id: 12,
					name: '最新活动'
				},
				{
					id: 12,
					name: '保养视频'
				},
				{
					id: 12,
					name: '咖啡文化'
				},
				{
					id: 12,
					name: '使用指南'
				},
				{
					id: 12,
					name: '比利时壶'
				},
				{
					id: 12,
					name: '玛奇朵咖啡'
				},
				{
					id: 12,
					name: '拿铁咖啡'
				},
				{
					id: 12,
					name: '爱乐压'
				},
				{
					id: 12,
					name: '苪丝翠多'
				},
				{
					id: 12,
					name: '保养视频'
				},
				{
					id: 12,
					name: '爱乐压'
				},
				{
					id: 12,
					name: '苪丝翠多'
				},
				{
					id: 12,
					name: '保养视频'
				},
				{
					id: 12,
					name: '爱乐压'
				},
				{
					id: 12,
					name: '苪丝翠多'
				},
				{
					id: 12,
					name: '保养视频'
				}
			]
		};
	},
	methods:{
		godetail(newid){
			console.log('newid',newid)
			uni.navigateTo({
				url:'../newDetail/newDetail?id='+newid
			})
		}
	},
	components: {
		swiperBanner,
		newTab,
		newItem,
		tuiLoadmore,
		tuiNomore,
		rightIcon
	},
	//页面相关事件处理函数--监听用户下拉动作
	onPullDownRefresh: function() {
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
		console.log('dangqian页数',this.pageIndex)
	}
	
	
};
</script>
<style lang="scss">
   page {
     background:#fff;
   }
</style>
<style lang="scss" scoped>
.tab-icon {
	width: 35rpx;
	height: 35rpx;
	margin: 10rpx auto;
}
.tab-icon1 {
	background: url(~@/static/images/i-icon1.png);
	background-size: 32rpx;
}
.tab-icon2 {
	background: url(~@/static/images/i-icon2.png);
	background-size: 32rpx;
}
.tab-icon3 {
	background: url(~@/static/images/i-icon3.png);
	background-size: 32rpx;
}
.tab-icon4 {
	background: url(~@/static/images/i-icon4.png);
	background-size: 32rpx;
}
.h240 {
	height: 480rpx !important;
}


</style>
