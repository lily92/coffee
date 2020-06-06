<template>
	  <view class="padding-lr30">
		<navigator url="../personalInfo/personalInfo" class="item tui-flex tui-vertical-center tui-align-between">
			<view class="fon30">
				个人信息
			</view>
			<view class="right-icon">
				<image src="../../static/images/common/icon-right.png" mode="widthFix" class="w100"></image>
			</view>
		</navigator>
		<navigator url="../addressList/addressList" class="item tui-flex tui-vertical-center tui-align-between">
			<view class="fon30">
				地址管理
			</view>
			<view class="right-icon">
				<image src="../../static/images/common/icon-right.png" mode="widthFix" class="w100"></image>
			</view>
		</navigator>
		<navigator url="../privacyClause/privacyClause" class="item tui-flex tui-vertical-center tui-align-between">
			<view class="fon30">
				隐私条款
			</view>
			<view class="right-icon">
				<image src="../../static/images/common/icon-right.png" mode="widthFix" class="w100"></image>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{ background: $color-f;}
.right-icon{ width: 44rpx; height: 44rpx;}
.item{ padding: 30rpx 0; border-bottom: 1px solid $border-color;}
</style>
