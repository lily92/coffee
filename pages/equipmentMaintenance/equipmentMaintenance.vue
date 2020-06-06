<template>
	<view class="page padding-t30  padding-lr30">
		
		<view class="padding30 bgf tui-flex tui-align-between margin-b20 "  v-for="(item,index) in eqList" :key="index">
			<view class="img">
				<image src="../../static/images/my/info/qa-img-bg.jpg" mode="widthFix" class="w100"></image>
			</view>
			<view class="desc">
				<view class="tui-flex tui-align-between">
					<text>格米莱</text>
					<text class="color9">
						{{item.equipmentStateName}}
					</text>
				</view>
				<view class="fon20 color9 ">
					<view class="">
						CRM3200C(咖啡机)
					</view>
					<view class="">
						提交时间：2020-5-1
					</view>
				</view>
			</view>
		    <view class="w100 padding-t30" v-if="item.equipmentState !=2">
		    	<equipment-btn-group class="btn-group" :equipmentState="item.equipmentState"  @again='again'  @comment='comment' @comfrim='comfrim'></equipment-btn-group>
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
	import equipmentBtnGroup from '@/components/my/equipmentBtnGroup.vue'
	export default {
		components: {
			tuiLoadmore,
			tuiNomore,
			equipmentBtnGroup
		},
		data() {
			return {
				pageIndex: 0,
				loadding: false,
				pullUpOn: true,
				eqList: [{
					equipmentState:1, //1待确认，2已取消 3已完成
					equipmentStateName:'待确认',
				},{
					equipmentState:2,
					equipmentStateName:'已取消',
				},{
					equipmentState:3,
					equipmentStateName:'已完成',
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
			again(){
				console.log('再次报修')
			},
			comment(){
				console.log('立即评价')
			},
			comfrim(){
				console.log('确认完成')
			},
			getData: function() {
				var _this = this
				if (_this.loadding == true) {
					return false
				}
				_this.loadding = true;
				var param = {
					page: _this.pageIndex + 1,
				}
				_this.tui.request('/mine/eqList', param).then(function(data) {
					_this.loadding = false;
					if (data.stat == 1) {
						_this.pageIndex = data.data.curpage
						_this.pullUpOn = data.data.more;
						_this.eqList = _this.eqList ? _this.eqList.concat(data.data.list) : data.data.list;


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
				this.eqList = this.loadData;
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
				this.eqList = this.eqList.concat(this.loadData);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		}

	}
</script>

<style lang="scss" scoped>
.img{ width: 110rpx;}
.desc{ width: 500rpx;}
.line-h1{ line-height: 1.2;}
.btn-group{ border-top: 1px solid $border-color; padding-top: 30rpx;}
</style>
