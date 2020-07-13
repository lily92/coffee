<template>
	<view>
		<view class="padding30 bgf7">
			<view class="tui-flex tui-vertical-center search-box ">
				<view class="color-org margin-r20">城市</view>
				<text class="fon26 margin-r20">|</text>
				<input type="text" class="fon26 txt" value="" placeholder="输入想要搜索的城市" />
			</view>
		</view>

		<!-- map -->
		<map class="w100 map " :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		<!-- end map -->

		<!-- list -->
		<view class="address-list  padding30">
			
			<view v-for="(item,index) in listAddress" :key="index" class="tui-flex padding-tb30 border-b tui-align-between tui-vertical-center">
				<view class="add-con">
					<view class="fon30">
						极客联盟清晖园辛巴克店
					</view>
					<view class="fon22 color6">
						佛山市顺德区清晖路148号新世界商城4楼 402
					</view>
					<view class="">
						1.2公里
					</view>
				</view>
				<view class="add-icon">
					
				</view>
			</view>
		</view>
		<!-- end list -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			listAddress:[
				{
					
				},{
					
				}
,{
					
				}			],
			covers: [
				{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/images/icon-map.png'
				},
				{
					latitude: 39.9,
					longitude: 116.39,
					iconPath: '../../static/images/icon-map.png'
				}
			]
		};
	}
};
</script>
<style lang="scss">
	page {
		background: $color-f;
	}
</style>
<style lang="scss" scoped>

.search-box {
	border: 1px solid $border-color;
	padding: 10rpx;
}
.txt {
	width: 560rpx;
}

.map {
	height: 410rpx;
}
.add-icon{ width: 67rpx; height:84rpx; background: url(~@/static/images/icon-address.png) no-repeat  center; background-size: 39rpx  57rpx }
.border-b{ border-bottom: 1px solid $border-color;}
</style>
