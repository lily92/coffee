<template>
	 <view class=" padding-t30">
	 	<view class="address-list">
	 		<view class="item tui-flex tui-vertical-center tui-align-between padding-lr30" v-for="(item,index) in dataList" :key="index">
	 			<view class="address-left">
	 				<view class="">
	 					<text class="margin-r20">S先生</text>
	 					<text>12312312345</text>
	 					<text class="moren" v-if="item.moren">默认</text>
	 				</view>
	 				<view class="">
	 					广东省广州市东风路123号1000室
	 				</view>
	 			</view>
	 			<view class="address-icon" @tap="showDetail(item.id)" >
	 				
	 			</view>
	 			
	 		</view>
	 	</view>
	    <view class="btn-submit">
	    	+ 新增收货地址
	    </view>
	 </view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						'id':12,
						'moren':true
						
					},{
						'id':13,
						'moren':false
					}
				]
			};
		},
		methods:{
			showDetail(id){
				uni.navigateTo({
					url:'../addressAdd/addressAdd?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{ background: $color-f;}
	.address-list{min-height: 80vh;}
	.address-left{ width: calc(100% - 90rpx);}
.address-icon{ width: 72rpx; height:72rpx; background: url(~@/static/images/icon-edit.png) no-repeat center; background-size: 36rpx;}
.item{ margin-bottom: 30rpx;padding-bottom: 30rpx; border-bottom: 1px solid $border-color;}
.moren{ background: $color-org; padding:0 5rpx;color: $color-f; transform: scale(0.7); display: inline-block;}
</style>
