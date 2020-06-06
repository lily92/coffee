<template>
	<view class="page padding-t30 ">
		<view class="padding30 bgf tui-flex tui-align-between tui-vertical-center">
			<view class="img">
				<image src="../../static/images/my/info/qa-img-bg.jpg" mode="widthFix" class="w100"></image>
			</view>
			<view class="desc">
				<view class="">
					格米莱
				</view>
				<view class="fon20 color9">
					CRM3200C(咖啡机)
				</view>
			</view>
		</view>
		
		<!-- list -->
		<view class=" padding-t30">
			<view class="fon34 padding-lr30">
				相关设备配件
			</view>
			<view class="list tui-flex ">
				<view class="list-item tui-col-6" v-for="(item,index) in infoList" :key="index">
					<part-item :listItem='item'></part-item>
				</view>
			</view>
			
		</view>
		<!-- end list -->

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
		import partItem from '@/components/my/partItem'
	export default {
		components: {
			tuiLoadmore,
			tuiNomore,
			partItem
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
					
				},{
					
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
.img{ width: 100rpx;}
.desc{ width: 560rpx;}

</style>
