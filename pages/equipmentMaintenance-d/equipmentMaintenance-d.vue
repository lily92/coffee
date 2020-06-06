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
		<view class=" padding-t30 padding-lr30">
		  <view class="bgf padding-lr30 margin-b50 ">
		  	<view  v-for="(item,index) in List" :key="index" class="item tui-flex  tui-vertical-center tui-align-between padding-tb30 positionr">
		  		<view class="color6">
		  			04-24
		  		</view>
				<view class="item-desc">
					<view class="">
						服务订单完成
					</view>
					<view class="fon20 color9">
						设备维修完成，客户已确认完成
					</view>
				</view>
		  	</view>
		  </view>
		</view>
		<!-- end list -->

	</view>
</template>

<script>

	export default {
		components: {

		},
		data() {
			return {
				pageIndex: 0,
				loadding: false,
				pullUpOn: true,
				List: [{
					
				},{
					
				},{
					
				},{
					
				},{
					
				},{
					
				}
				]
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

	}
</script>

<style lang="scss" scoped>
.img{ width: 100rpx;}
.desc{ width: 560rpx;}
.list-img{
	image{ display: block;}
}
.line{ border-top: 1rpx solid $border-color; }
.price{ margin-top: 10rpx;}
.item-desc{ width: 530rpx;}
.item{ padding-bottom: 60rpx;}
.item::after{ height:50rpx;content: ''; width: 1px; background:$border-color;  position: absolute; top: 130rpx; left:35rpx}
.item:last-child::after{ display: none;}
</style>
