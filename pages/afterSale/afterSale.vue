<template>
	<view>
		<!-- 订单状态 -->
		<view class="detail-state padding-lr30 colorf tui-flex tui-vertical-center">
			<view class="">
				<view class="fon34">已通过审核，等待处理</view>
				<view class="fon34">
					商家已收到寄回商品
				</view>
				<view class="">还剩6天21小时后自动退款</view>
			</view>
		</view>

		<view class="padding-lr30 padding-t30">
			<!-- 已通过审核，等待处理 -->
			<view class="">
				<view>您的退款申请已审核，请耐心等待处理</view>
				<view class="fon20 color9">(申请同意后，请按照给出的退货地址退货，并记录退货运单号)</view>
				<view class="fon20 color9 margin-b50">(申请拒绝后，您可以修改申请后再次泛起，平台会重新处理)</view>
				<view class="resite-danhao margin-b50" @tap="fillWaybill(true)">填写快递单号</view>
				
			</view>
			<!-- 已通过审核，等待处理 -->
			
			<view class="">
				<view class="resite-danhao margin-b50 margin-r20" >撤销申请</view>
				<view class="resite-danhao margin-b50">修改申请</view>
			</view>
			
			<!-- 商家已收到退回商品 -->
			<view class="">
				商家已收到退回商品，退款将会在3-7个工作日原路退回
			</view>
			<!-- end 商家已收到退回商品 -->
			
			<!-- list -->
			<view class="margin-b20 fon34 broder-b">退货商品</view>
			<view class="margin-b50">
				<view v-for="(item, index) in list" :key="index"><product-item :productItem="item" class="product-item" :isPaddding='isPaddding'></product-item></view>
			</view>

			<!-- end list -->

			<!-- detail -->
			<view class="detail broder-b">
				<view class="margin-b20 fon34 broder-b">退货信息</view>
				<view class="tui-flex tui-align-between fon30">
					<text>退款原因</text>
					<text>其他</text>
				</view>
				<view class="tui-flex tui-align-between fon30">
					<text>退款金额</text>
					<text>¥4000.00</text>
				</view>
				<view class="tui-flex tui-align-between fon30">
					<text>申请件数</text>
					<text>2件</text>
				</view>
				<view class="tui-flex tui-align-between fon30">
					<text>申请件数</text>
					<text>2件</text>
				</view>
				<view class="tui-flex tui-align-between fon30">
					<text>申请时间</text>
					<text>2020-04-01</text>
				</view>
				<view class="tui-flex tui-align-between fon30">
					<text>退款编号</text>
					<text>246543513213456</text>
				</view>
				
			</view>
			<!-- end detail -->
		</view>
	
	
	    <!-- 填写单号 -->
		<view class="tui-mask" v-show="isshowYundan" @tap="fillWaybill(false)">
			
		</view>
		<view class="danhao bgf fon30" v-show="isshowYundan">
			<form @submit="" @reset="">
				<view class="padding30">
					<view class="tui-flex tui-vertical-center input-txt">
						<text>请输入运单号</text>
						<input type="text" value="13213211321" placeholder="" />
					</view>
					<view class="tui-flex tui-vertical-center input-txt">
						<text>承运人</text>
						<input type="text" value="s先生" placeholder="" />
					</view>
				</view>
				<button form-type="submit" class="btn-commit colorf" @tap="fillWaybillConfrim">确定</button>
				
			</form>
		</view>
		<!-- end 填写单号 -->
	
	</view>
</template>

<script>
import productItem from '@/components/my/productItem.vue';
import orderBtn from '@/components/my/orderBtnGroup.vue';
export default {
	data() {
		return {
			isshowYundan:false,
			list: [{}, {}],
			isPaddding:false
		};
	},
	components: {
		productItem,
		orderBtn
	},
	methods:{
		fillWaybill(boolean){
			if(boolean == true){
				this.isshowYundan = true
			}else{
				this.isshowYundan = false
			}
			
		},
		fillWaybillConfrim(){
			this.isshowYundan = false
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: #fff;
}
.detail-state {
	width: 100%;
	height: 257rpx;
	background-color: #e96a1e;
}
.address {
	border-bottom: 1rpx solid $border-color;
	padding-bottom: 30rpx;
	margin-bottom: 30rpx;
}
.address-img {
	width: 46rpx;
}
.address-con {
	width: 540rpx;
}
.product-item {
	padding-bottom: 30rpx;
	border-bottom: 1px solid $border-color;
	margin-bottom: 30rpx;
}
.peisong {
	border-bottom: 1px solid $border-color;
	padding-bottom: 30rpx;
	margin-bottom: 30rpx;
}
.order-info {
	border-top: 1px solid $border-color;
	padding-bottom: 30rpx;
	border-bottom: 1px solid $border-color;
}
.btn-group {
	padding-bottom: 100rpx;
	padding-top: 30rpx;
}

.resite-danhao {
	padding: 15rpx 25rpx;
	border: 1px solid $border-color;
	display: inline-block;
}
.broder-b {
	border-bottom: 1px solid $border-color;
	padding-bottom: 20rpx;
	margin-bottom: 40rpx;
}

.danhao{ position: fixed; bottom: 0; left:0; width: 100%; z-index: 1001;}
.btn-commit{ background: $color-org; border-radius: 0;}
.input-txt{border-bottom: 1px solid $border-color; padding: 0 0 20rpx 0; margin-bottom: 30rpx;
  input{ margin-left:40rpx;}
}
.detail{ line-height: 1.8;}
</style>
