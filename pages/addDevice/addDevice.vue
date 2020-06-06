<template>
	<view>
		<view class="tui-center padding-t30">
			<image class="w313" src="../../static/images/gem-logo.png" mode="widthFix"></image>
		</view>
		<view class="tui-center padding-t30 margin-b50">
			<image class="w84" src="../../static/images/icon-phone.png" mode="widthFix"></image>
		</view>
		<view class="margin-b50">
			<view class="btn-add colorf tui-center margin-auto">
				扫描产品二维码
			</view>
		</view>
		<form @submit="" @reset="" class="padding-lr30 block">
			
			<view class="tui-flex margin-b50 flex-nowarp tui-vertical-center tui-align-between">
				<input type="text" value="" class="txt w176 " />
				<text class="flex-sh-0 ">- CN-</text>
				<input type="text"  class="txt" value="" placeholder="请输入产品序列号" />
			</view>
			<view class="tui-flex tui-align-between tui-vertical-center  margin-b20 ">
				<text>购买日期<text class="color-org">*</text></text>
				<input type="text"  class="txt w563" value="" placeholder="请输入产品序列号" />
			</view>
			<view class="tui-flex tui-align-between tui-vertical-center  margin-b20 ">
				<text>手机号码<text class="color-org">*</text></text>
				<input type="text"  class="txt w563" value="" placeholder="请输入产品序列号" />
			</view>
			<view class="tui-flex tui-align-between tui-vertical-center  margin-b50 ">
				<text>购买途径</text>
				<input type="text"  class="txt w563" value="" placeholder="请输入产品序列号" />
			</view>
			
			<button form-type="submit" class="btn-add colorf">确定</button>
		
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
	page{background: $color-f;}
</style>
<style lang="scss" scoped>
.w313{ width: 313rpx;}
.w84{ width: 84rpx;}
.btn-add {
	width: 383rpx;
	height: 89rpx;
	background-color: #f07623;
	line-height: 89rpx;
	border-radius: 0;
	
}
.txt{ border:1px solid #E6E6E6; height:70rpx; padding: 10rpx 15rpx; box-sizing: border-box;}
.flex-nowarp{ flex-wrap: nowrap;}
.flex-sh-0{ flex-shrink: 0;}
.w176{ width:176rpx;}
.block{ display: block;}
.w563{ width: 563rpx;}
</style>
