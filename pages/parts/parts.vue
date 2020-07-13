<template>
	<view class="page">
		<swiper-banner :list="bannerList"></swiper-banner>
		<!-- list -->
		<view class=" padding-t30">
			<view class="list tui-flex ">
				<view class="list-item tui-col-6" v-for="(item, index) in infoList" :key="index">
					<part-item :listItem="item"></part-item></view>
			</view>
		</view>
		<!-- end list -->

		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
		<!-- end订单列表 -->
	</view>
</template>

<script>
import swiperBanner from '@/components/my/swiperBanner';
import partItem from '@/components/my/partItem';
export default {
	components: {
		partItem,
		swiperBanner
	},
	data() {
		return {
			pageIndex: 0,
			loadding: false,
			pullUpOn: true,
			bannerList: [
				{
					img: '../../static/images/peijian-banner.jpg'
				},
				{
					img: '../../static/images/peijian-banner.jpg'
				},
				{
					img: '../../static/images/peijian-banner.jpg'
				}
			],
			infoList: [{}, {}, {}, {}, {}, {}],
			loadData: [{}, {}]
		};
	},
	onLoad: function(options) {},
	mounted() {
		// this.getData()
	},
	methods: {
		getData: function() {
			var _this = this;
			if (_this.loadding == true) {
				return false;
			}
			_this.loadding = true;
			var param = {
				page: _this.pageIndex + 1
			};
			_this.tui.request('/mine/infoList', param).then(function(data) {
				_this.loadding = false;
				if (data.stat == 1) {
					_this.pageIndex = data.data.curpage;
					_this.pullUpOn = data.data.more;
					_this.infoList = _this.infoList ? _this.infoList.concat(data.data.list) : data.data.list;
				}
			});
		}
	},
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {
		//延时为了看效果
		setTimeout(() => {
			this.infoList = this.loadData;
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false;
			uni.stopPullDownRefresh();
			this.tui.toast('刷新成功');
		}, 200);
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		console.log(this.pageIndex)
		this.loadding = false;
		console.log(this.loadding)
		if (this.pageIndex == 3) {
			this.loadding = false;
			this.pullUpOn = false;
			
		} else {
			this.infoList = this.infoList.concat(this.loadData);
			this.pageIndex = this.pageIndex + 1;
			this.loadding = false;
		}
	}
};
</script>

<style lang="scss" scoped></style>
