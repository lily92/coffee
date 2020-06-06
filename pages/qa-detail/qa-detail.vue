<template>
	<view class="page-detail">
		<view class=" qa-item-top  tui-flex tui-vertical-center tui-align-between">
			<view class="img">
				<image src="../../static/images/my/info/qa-img.jpg" mode="widthFix" class="w100"></image>
			</view>
			<view class="qa-title">
				<view class="fon26">
					格米莱
				</view>
				<view class="fon20 color9">
					CRM3200C(咖啡机)
				</view>
			</view>
			<view @tap="back" class=" tui-flex tui-vertical-center">
				选择资讯设备
				<image src="../../static/images/common/icon-right.png" mode="widthFix" class=" select-icon"></image>
			</view>
		</view>
	
	     <view class="list bgf">
			 
	     	<view class="list-item padding20 "  v-for="(item,index) in qaList" :key="index">
	     		<view class="fon26 q-txt">
	     			<text>Q：</text>
					<text>{{item.q}}</text>
	     		</view>
				<view class="a-txt fon26">
					<text>A：</text>
					<text  class="color9">{{item.a}}</text>
				</view>
	     	</view>
	     </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"qaId":0,
				"qaList":[
					{
						"q":"如何选购咖啡机？",
						"a":"温度最重要，所有制作咖啡的方式都是由水洗出咖啡能够溶于水的味道，当然里面包括可溶于水和不溶于水的悬浮颗粒，找到一个咖啡机，如果温度低于90摄氏度的别用，味道出不来。"
					},{
						"q":"咖啡机怎么使用？",
						"a":"咖啡机般分半自动和全自动半自动咖啡机需要配置磨豆机即先磨好咖啡粉萃取咖啡，全自动咖啡机只要水和豆准备"
					}
				]
			};
		},
		onLoad(options) {
			this.qaId=options.id||0;
			console.log('接收到的问答id',this.qaId)
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	
	}
</script>

<style lang="scss"  scoped>
page{ background: $color-f;}
.img { width: 100rpx; height:100rpx}
.qa-item-top{ padding: 20rpx; margin-bottom: 30rpx; border-bottom: 28rpx solid #F7F7F7;}
.select-icon{ width: 40rpx;}
.qa-title{ width: 330rpx;}
.q-txt{ margin-bottom: 20rpx;}
.list-item{ border-bottom: 1rpx solid  $border-color; margin-bottom: 20rpx;}
</style>
