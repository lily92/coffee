<template>
	<view>
		<view class=" padding30 border-b  margin-b20"><product-item :productItem="productItem"></product-item></view>
		<view class="padding30 fon30">
			<view class="tui-flex  tui-vertical-center tui-align-between border-b">
				<text class="">货物状态</text>
				<view class="tui-flex tui-vertical-center" @tap="selectState(true)">
					<text class="color9">请选择</text>
					<view class="right-btn"></view>
				</view>
			</view>
			<view class="tui-flex  tui-vertical-center tui-align-between border-b">
				<text class="">退款原因</text>
				<view class="tui-flex tui-vertical-center" @tap="selectReson(true)">
					<text class="color9">请选择</text>
					<view class="right-btn"></view>
				</view>
			</view>
			<view class="tui-flex  tui-vertical-center tui-align-between border-b">
				<text class="">退款金额</text>
				<view class="tui-flex tui-vertical-center">
					<text class="color9 margin-r20 fon26">(不可修改，含邮费)</text>
					<text class="color-org">¥4000.00</text>
				</view>
			</view>

			<view class="tui-flex   tui-vertical-center tui-align-between border-b">
				<text class="">退款说明</text>
				<view class="tui-flex tui-vertical-center txt"><input type="text" value="" placeholder="选填" class="w100" /></view>
			</view>

			<view class="fon34  padding-tb30">上传凭证</view>
			<!-- 上传图片 -->
			<view class="tui-upload-img  tui-flex w100">
				<view class="up-img margin-r20"><image src="../../static/images/img-upload.jpg" mode="widthFix" class="upload-img"></image></view>
				<view class="up-img positionr">
					<image src="../../static/images/upload-img.jpg" mode="widthFix" class="upload-img"></image>
					<view class="icon-close"></view>
				</view>
			</view>
			<!-- end 上传图片 -->

			<button type="default" class="btn-submit margin-t50 colorf">提交</button>
		</view>

		<!-- 退款原因 -->
		<action-sheet  @close="selectReson(false)" v-show="showReson" :resonList="resonList" :currentReson="currentReson" @select='selectResons'></action-sheet>

		<!-- 货物状态 -->
		<action-sheet   @close="selectState(false)" v-show="showState" :resonList="statList" :currentReson="StateCurrent" @select='selectStates'></action-sheet>
	</view>
</template>

<script>
import productItem from '@/components/my/productItem.vue';
import actionSheet from '@/components/my/actionSheet';
export default {
	data() {
		return {
			showReson: false,
			showState:false,
			StateCurrent:0,
			currentReson: 0,
			productItem: {},
			statList: [
				{
					id: '01',
					title: '未收到货'
				},
				{
					id: '06',
					title: '已收货'
				}
			],
			resonList: [
				{
					id: '12',
					title: '商品需要维修'
				},
				{
					id: '13',
					title: '商品破损'
				},
				{
					id: '14',
					title: '商品质量问题'
				},
				{
					id: '15',
					title: '商品错发/漏发'
				},
				{
					id: '16',
					title: '物流问题'
				},
				{
					id: '17',
					title: '其他'
				}
			]
		};
	},
	components: {
		productItem,
		actionSheet
	},
	methods: {
		selectReson(boolean) {
			if (boolean == true) {
				this.showReson = true;
			} else {
				this.showReson = false;
			}
		},
		selectState(boolean){
			if (boolean == true) {
				this.showState = true;
			} else {
				this.showState = false;
			}
		},
		selectResons(value){
			console.log('接受到的值',value)
		},
		selectStates(value){
			console.log('接受到的值',value)
		}

		
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}

.txt {
	width: calc(100% - 160rpx);
}
.upload-img {
	width: 156rpx;
}
.icon-close {
	width: 37rpx;
	height: 37rpx;
	background: url(~@/static/images/icon-close.png) no-repeat center;
	background-size: 30rpx 30rpx;
	position: absolute;
	right: -20rpx;
	top: -20rpx;
	padding: 20rpx;
}
.margin-t50 {
	margin-top: 50rpx;
	background: $color-org;
	border-radius: 0;
}
.border-b {
	border-bottom: 1px solid $border-color;
	padding-bottom: 30rpx;
	margin-bottom: 30rpx;
}
.refund-reson {
	position: fixed;
	bottom: 0;
	left: 0;
	background: $color-f;
	z-index: 1001;
	width: 100%;
}
.close-btn {
	background: $color-org;
}
</style>
