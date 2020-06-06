<template>
	<view>
		<my-top :isactive="isactive"></my-top>

		<!-- 我的订单 -->
		<view class="order-top tui-flex ">
			<view @tap="goOrder(item.typeId)" class="tui-center item" :class="item.isAcive ? 'color-org' : ''" v-for="(item, index) in orderTypeList" :key="index">
				<view class="icon positionr margin-auto  tui-flex tui-vertical-center ">
					<image :src="item.icon" mode="widthFix" class="w100 noactive icon-img" v-show="!item.isAcive"></image>
					<image :src="item.iconActive" mode="widthFix" class="w100 icon-img icon-active" v-show="item.isAcive"></image>
					<!-- 红色角标 -->
					<view class="positionb icon-noread" v-if="item.isHandelNum >= 1">{{ item.isHandelNum }}</view>
				</view>
				<view class="">{{ item.name }}</view>
			</view>
		</view>
		<!-- end 我的订单 -->

		<!-- itemlist -->
		<view class="item-list">
			<view class="order-item" v-for="(item, index) in orderList" :key="index">
				<view class=" padding30  tui-flex tui-vertical-center tui-align-between order-state ">
					<text>2020-04-22 11:25</text>
					<text>{{ item.orderStateName }}</text>
				</view>
				<!-- product-item  -->
				<product-item class="padding30" :productItem="item"></product-item>
				<!-- product item -->
				<view class="tui-text-right padding-lr30">
					<text class="margin-r20">总量： 2件</text>
					<text class="color-org" v-if="item.orderState != 1">总付款：￥2000.00</text>
				</view>
				<!-- btn group -->
				<order-btn
					@cancel="cancel"
					class="padding-lr30 padding-t30"
					:orderState="item.orderState"
					@pay="pay"
					@comment="comment"
					@readlogisitics="readlogisitics"
					@afterSale="afterSale"
				></order-btn>
				<!-- end btn group -->
			</view>
		</view>
		<!--end itemlist -->
		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
import myTop from '@/components/my/myTop.vue';
import productItem from '@/components/my/productItem.vue';
import orderBtn from '@/components/my/orderBtnGroup.vue';
export default {
	data() {
		return {
			pageIndex:1,
			isactive: 1,
			loadding: false,
			pullUpOn: true,
			orderTypeList: [
				{
					typeId: '0',
					name: '全部订单',
					isAcive: true,
					isHandelNum: 2,
					icon: '../../static/images/my/order/oder-icon-1.png',
					iconActive: '../../static/images/my/order/oder-icon-11.png'
				},
				{
					typeId: '1',
					name: '待付款',
					isHandelNum: 2,
					isAcive: false,
					icon: '../../static/images/my/order/oder-icon-2.png',
					iconActive: '../../static/images/my/order/oder-icon-22.png'
				},
				{
					typeId: '2',
					name: '待收货',
					isHandelNum: 0,
					isAcive: false,
					icon: '../../static/images/my/order/oder-icon-3.png',
					iconActive: '../../static/images/my/order/oder-icon-33.png'
				},
				{
					typeId: '3',
					name: '待评价',
					isHandelNum: 0,
					isAcive: false,
					icon: '../../static/images/my/order/oder-icon-4.png',
					iconActive: '../../static/images/my/order/oder-icon-44.png'
				},
				{
					typeId: '4',
					name: '退货/款',
					isHandelNum: 1,
					isAcive: false,
					icon: '../../static/images/my/order/oder-icon-5.png',
					iconActive: '../../static/images/my/order/oder-icon-55.png'
				}
			],
			orderList: [
				{
					orderStateName: '待付款',
					orderState: 1, //1待付款，2待收货，3待评价，4退换货
					orderImg: '',
					orderTitle: '',
					orderTime: '',
					orderPrice: '200',
					orderNumber: '',
					orderQuantity: 2
				},
				{
					orderStateName: '待收货',
					orderState: 2, //1待付款，2待收货，3待评价，4退换货
					orderImg: '',
					orderTitle: '',
					orderTime: '',
					orderPrice: '200',
					orderNumber: '',
					orderQuantity: 2
				},
				{
					orderStateName: '待评价',
					orderState: 3, //1待付款，2待收货，3待评价，4退换货
					orderImg: '',
					orderTitle: '',
					orderTime: '',
					orderPrice: '200',
					orderNumber: '',
					orderQuantity: 2
				},
				{
					orderStateName: '退换货',
					orderState: 4, //1待付款，2待收货，3待评价，4退换货
					orderImg: '',
					orderTitle: '',
					orderTime: '',
					orderPrice: '200',
					orderNumber: '',
					orderQuantity: 2
				}
			],
			loadData: [
				{
					orderStateName: '待付款',
					orderState: 1, //1待付款，2待收货，3待评价，4退换货
					orderImg: '',
					orderTitle: '',
					orderTime: '',
					orderPrice: '200',
					orderNumber: '',
					orderQuantity: 2
				}
			]
		};
	},
	mounted(option) {
		console.log(option);
	},
	components: {
		myTop,
		productItem,
		orderBtn
	},
	methods: {
		goOrder(typeId) {
			console.log(typeId);
			// this.orderTypeList
			for (let i = 0; i < this.orderTypeList.length; i++) {
				if (this.orderTypeList[i].typeId === typeId) {
					this.orderTypeList[i].isAcive = true;
				} else {
					this.orderTypeList[i].isAcive = false;
				}
			}
		},
		cancel() {
			console.log('确认取消订单');
			uni.showModal({
				title: '确认取消订单？',
				content: '删除后订单将无法恢复，谨慎操作',
				success() {
					uni.showToast({
						icon: 'none',
						title: '取消成功'
					});
				}
			});
		},
		pay() {
			console.log('立即付款');
		},
		comment() {
			console.log('评价');
			uni.navigateTo({
				url: '../evaluate/evaluate'
			});
		},
		readlogisitics() {
			console.log('查看物流');
			uni.navigateTo({
				url: '../logistics/logistics'
			});
		},
		afterSale() {
			console.log('申请售后');
		}
	},
	//页面相关事件处理函数--监听用户下拉动作
	onPullDownRefresh() {
		//延时为了看效果
		setTimeout(() => {
			this.orderList = this.loadData;
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
			this.orderList = this.orderList.concat(this.loadData);
			this.pageIndex = this.pageIndex + 1;
		}
	}
	
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}
.order-top {
	padding: 40rpx 0;
	border-bottom: 1px solid $border-color;
}
.icon {
	width: 45rpx;
	height: 45rpx;
	margin-bottom: 20rpx;
}
.icon-img {
	width: 45rpx;
	max-height: 45rpx;
}
.item {
	width: 20%;
	padding: 20rpx 0;
}

.order-item {
	border-bottom: 7rpx solid #ededed;
	padding-bottom: 40rpx;
}
.item-list {
	margin-bottom: 60rpx;
	.order-state {
		border-bottom: 1rpx solid $border-color;
	}
	.img {
		width: 187rpx;
	}
	.desc {
		width: 470rpx;
		align-content: space-between;
	}
	.margin-r20 {
		margin-right: 20rpx;
	}
}
.icon-noread {
	width: 40rpx;
	height: 40rpx;
	border-radius: 50%;
	background: #ff0000;
	right: -15rpx;
	top: -15rpx;
	position: absolute;
	line-height: 40rpx;
	color: #fff;
	transform: scale(0.6);
}
</style>
