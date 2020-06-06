<template>
	<view class="page ">
		<view class="tui-flex tui-center fon34">
			<navigator url=""  class="tui-col-6 padding30 active">产品贴士</navigator>
			<navigator url="../maintenanceVideo/maintenanceVideo" class="tui-col-6 padding30">保养视频</navigator>
		</view>
		<view class="info-list w100 padding-lr30">
			
			<view class="item" v-for="(item,index) in infoList" :key="index" >
				<view class="item-img">
					<image src="../../static/images/maintenanceStickers/img.jpg" mode="widthFix" class="w100"></image>
				</view>
				<view class="item-con fon33">
					设备使用指南
				</view>
				<navigator class="icon-more">
					<image src="../../static/images/common/icon-right.png" mode="widthFix" class="icon-more"></image>
				</navigator>
			</view>
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
	.item {
		padding: 0 0 40rpx 0;
		border-bottom: 1px solid #eee;
		margin-bottom: 40rpx;
		align-items: center;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
	.item-con {
		width: calc(100% - 330rpx);
	}
	.item-img {
		width: 206rpx;
		height: 140rpx;
	}
	.icon-more {
		width: 84rpx;
		height: 84rpx;
	}
</style>
