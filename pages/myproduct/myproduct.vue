<template>
	<view>
		<my-top :isactive="isactive"></my-top>
		<view class="padding-tb40 padding-lr30">
			<view class="tui-flex tui-center  margin-b20">
				<navigator url="" class="tui-col-6 tab active">我的设备</navigator>
				<navigator url="../equipmentMaintenanceOne/equipmentMaintenanceOne" class="tui-col-6 tab">设备维修</navigator>
			</view>
			<navigator url="../addDevice/addDevice" class="bgf  tui-flex  tui-align-center  padding20 margin-b20">
				<view class="tui-flex tui-vertical-center">
					<image src="../../static/images/add-btn.png" mode="widthFix" class="add-btn margin-r20"></image>
					添加设备
				</view>
			</navigator>

			<!-- list -->
			<view class="list-box">
				<view class="" v-for="(item, index) in list" :key="index">
					<view @tap="showDetail(index,item.active)" class="item bgf tui-flex tui-vertical-center tui-align-between padding30 margin-b20">
						<view class="item-img"><image src="../../static/images/my/info/qa-img-bg.jpg" mode="widthFix" class="w100"></image></view>
						<view class="desc">
							<view class="">格米莱</view>
							<view class="color9">CRM3200C(咖啡机)</view>
						</view>
						<view :class="item.active?'active':''" class="right-btn" ></view>
					</view>
					<view v-show="item.active === true" class="detail bgf padding30 tui-center tui-flex margin-b20 ">
						<view class="detail-item tui-col-4 " @tap="openActionSheet">
							<view class="icon icon-tel margin-auto  margin-b20"></view>
							<view class="">VIP热线</view>
						</view>
						<view class="detail-item tui-col-4 " @tap="goDetail(item.id)">
							<view class="icon icon-peijian margin-auto  margin-b20"></view>
							<view class="">配件</view>
						</view>
						<view class="detail-item tui-col-4 ">
							<view class="icon icon-shuoming margin-auto  margin-b20"></view>
							<view class="">使用说明</view>
						</view>
						<navigator url="../maintenanceTips/maintenanceTips" class="detail-item tui-col-4 ">
							<view class="icon icon-tieshi margin-auto  margin-b20"></view>
							<view class="">保养贴士</view>
						</navigator>
						<navigator url="../equipmentMaintenance/equipmentMaintenance" class="detail-item tui-col-4 ">
							<view class="icon icon-weixiu margin-auto  margin-b20"></view>
							<view class="">维修</view>
						</navigator>
					</view>
				</view>
			</view>

			<!-- end list -->
			<tui-actionsheet
				:show="showActionSheet"
				:tips="tips"
				:item-list="itemList"
				:mask-closable="maskClosable"
				:color="color"
				:size="size"
				:is-cancel="isCancel"
				@click="itemClick"
				@cancel="closeActionSheet"
			></tui-actionsheet>
		</view>
	</view>
</template>

<script>
import myTop from '@/components/my/myTop.vue';
import tuiActionsheet from '@/components/thorui/tui-actionsheet/tui-actionsheet.vue'
export default {
	data() {
		return {
			isactive:2,
			showActionSheet: false,
			maskClosable: true,
			tips: '',
			itemList: [],
			color: '#9a9a9a',
			size: 26,
			isCancel: true,
			list: [
				{
					active: true
				},
				{
					active: false
				}
			]
		};
	},
	components: {
		myTop,
		tuiActionsheet
	},
	methods: {
		closeActionSheet: function() {
			this.showActionSheet = false
		},
		openActionSheet() {
			let itemList = [
				{
					text: '服务热线1：4000-000-000',
					color: '#333'
				},
				{
					text: '服务热线2：4000-000-000',
					color: '#333'
				},
				{
					text: '微信在线客服',
					color: '#333'
				},
			];
			let maskClosable = true;
			let tips = '';
			let color = '#9a9a9a';
			let size = 26;
			let isCancel = true;
			setTimeout(() => {
				this.showActionSheet = true;
				this.itemList = itemList;
				this.maskClosable = maskClosable;
				this.tips = tips;
				this.color = color;
				this.size = size;
				this.isCancel = isCancel
			}, 0)
		},
		itemClick(e) {
			let index = e.index;
			this.closeActionSheet();
			this.tui.toast(`您点击的按钮索引为：${index}`);
		},
		showDetail(index,boolean){
			let _this= this
			for (let i = 0; i < _this.list.length; i++) {
				_this.list[i].active = false
			}
			this.list[index].active = !boolean
		},
		goDetail(id){
			uni.navigateTo({
				url:'../equipmentAccessories/equipmentAccessories'
			})
		}
	
	}
};
</script>

<style lang="scss" scoped>
.tab {
	height: 92rpx;
	background: #cecece;
	line-height: 92rpx;
}
.tab.active {
	background: $color-org;
	color: $color-f;
}
.add-btn {
	width: 58rpx;
}
.item-img {
	width: 100rpx;
	height: 100rpx;
}
.desc {
	width: 450rpx;
}
.detail-item {
	margin-bottom: 40rpx;
}
.icon {
	width: 52rpx;
	height: 52rpx;
}
.icon-tel {
	background: url(~@/static/images/p-icon1.png) no-repeat center;
	background-size: 52rpx;
}
.icon-peijian {
	background: url(~@/static/images/p-icon2.png) no-repeat center;
	background-size: 44rpx;
}
.icon-shuoming {
	background: url(~@/static/images/p-icon3.png) no-repeat center;
	background-size: 39rpx;
}
.icon-tieshi {
	background: url(~@/static/images/p-icon4.png) no-repeat center;
	background-size: 54rpx;
}
.icon-weixiu {
	background: url(~@/static/images/p-icon5.png) no-repeat center;
	background-size: 45rpx;
}
.right-btn.active{ transform: rotate(90deg);}
</style>
