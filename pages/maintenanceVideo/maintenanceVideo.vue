<template>
	<view class="page ">
		<view class="tui-flex tui-center fon34">
			<navigator url="../maintenanceTips/maintenanceTips"  class="tui-col-6 padding30 ">产品贴士</navigator>
			<navigator url="" class="tui-col-6 padding30 active">保养视频</navigator>
		</view>
		<view class="info-list w100 padding-lr30">
			
		<navigator :url="'../videoPlayer/videoPlayer?id='+item.id" class="video-item"  v-for="(item,index) in infoList" :key="index">
			<view class="positionr">
				<image src="../../static/images/maintenanceStickers/video-master.jpg" mode="widthFix" class="w100 video-img"></image>
				<view class="positionb-w video-player"><image src="../../static/images/maintenanceStickers/video-icon.png" mode="" class="video-icon"></image></view>
			</view>
			<view class="fon34 tui-center padding30 bgf">设备使用指南</view>
		</navigator>
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
		<!-- end订单列表 -->

	</view>
</template>

<script>
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		components: {
			tuiLoadmore,
			tuiNomore
		},
		data() {
			return {
				pageIndex: 0,
				loadding: false,
				pullUpOn: true,
				infoList: [{
					
				},{
					
				},{
					
				},{
					
				},{
					
				},{
					
				}
				],
				loadData: [{
					
				}],
				
			}
		},
		onLoad: function(options) {


		},
		mounted() {
			// this.getData()
		},
		methods: {
			getData: function() {
				var _this = this
				if (_this.loadding == true) {
					return false
				}
				_this.loadding = true;
				var param = {
					page: _this.pageIndex + 1,
				}
				_this.tui.request('/mine/infoList', param).then(function(data) {
					_this.loadding = false;
					if (data.stat == 1) {
						_this.pageIndex = data.data.curpage
						_this.pullUpOn = data.data.more;
						_this.infoList = _this.infoList ? _this.infoList.concat(data.data.list) : data.data.list;


					}
				});
			},
	
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
				this.tui.toast("刷新成功")
			}, 200)
		},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				this.infoList = this.infoList.concat(this.loadData);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		}

	}
</script>

<style lang="scss" scoped>
	.active{ color:$color-org}
	.video-item {
		margin-bottom: 35rpx;
	}
	.video-img {
		width: 100%;
		height: 360rpx;
		background: #e4e4e4;
		display: block;
	}
	.video-player {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.video-icon {
		width: 150rpx;
		height: 150rpx;
	}
</style>
