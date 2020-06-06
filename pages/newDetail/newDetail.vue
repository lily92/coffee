<template>
	<view class="padding20">
		<view class="new-title fon32">应用到咖啡机上，实现了磨粉、压粉、装粉、冲 泡、清除残渣等...</view>
		<view class="new-date color9 fon20">2020-01-01 12:12:15</view>
		<view class="new-content padding-tb30">
			不知道从什么时候开始喜欢上了喝咖啡的？最不能让人忘记的就是那句著名的广告词“滴滴香浓，意犹未尽”。这是一份诱惑，更是一份让人难抑的兴奋之情。
			不管是落雪的冬日午后的一杯热咖啡，还是炎炎夏日的一杯苦苦的冰咖啡，都会让我的心为之神往。也许，我在意的并不是咖啡因在血液里造成的作用，多少次，多少年之后，我才真正体会出那种苦涩中的甜蜜的滋味。
			咖啡，只需要那么小小的一杯，在寂寞的时候，一个人静静地品味着，它属于孤独和孤独之后的希望。咖啡并不能让我激情飞扬，却让我懂得了沉思中的妙趣。
		</view>
		<view class="tui-flex  tui-vertical-center tui-align-between">
			<view class="read color9">5001 阅读</view>
			<view class="share color6">分享</view>
		</view>
		
		<!-- 相关资讯 -->
		<view class=" padding-t30">
			<view class="">
				相关资讯
			</view>
			<view class="padding-t30">
				<view v-for="(item,index) in newsList" :key="index">
					<new-item :item='item' @click='godetail'></new-item>
				</view>
			</view>
		</view>
		<!-- end 相关资讯 -->
		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import newItem from '@/components/use/new-item/new-item.vue'
	import tuiLoadmore from '@/components/use/tui-loadmore/tui-loadmore.vue';
	import tuiNomore from '@/components/use/tui-nomore/tui-nomore.vue';
export default {
	components:{
		newItem,
		tuiLoadmore,
		tuiNomore
	},
	data() {
		return {
			pageIndex: 1,
			loadding: false,
			pullUpOn: true,
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
			]
		};
	},
	methods:{
		godetail(newid){
			console.log('newid',newid)
			uni.navigateTo({
				url:'../pages/newDetail/newDetail?id='+newid
			})
		}
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

<style lang="scss" scoped>
page {
	background: $color-f;
}
.new-date {
	padding: 10rpx 0 10rpx 50rpx;
	background: url(~@/static/images/icon-time.png) no-repeat left center;
	background-size: 30rpx;
}
.new-content {
}
.read {
	background: url(~@/static/images/icon-eye.png) no-repeat left center;
	background-size: 30rpx;
	padding: 6rpx 0 6rpx 35rpx;
}
.share {
	background: url(~@/static/images/icon-share.png) no-repeat left center;
	padding: 5rpx 0 5rpx 35rpx;
	background-size: 25rpx;
}
</style>
