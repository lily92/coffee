<template>
	<view class="padding-lr30 padding-t30">
		<view class="fon34 personal">
			新增收货信息
		</view>
		<form @submit="" @reset="" class="fon30">
			<view class="">
				收货人
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请填写收货人姓名" />
			</view>
			<view class="">
				手机号
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请填写手机号" />
			</view>
		
			<view class="">
				所在地区
			</view>
			<view class="margin-b50 tui-flex tui-vertical-center tui-align-between flex-nowarp">
				<input class="txt w100" type="text" value="" placeholder="请选择所在地" />
				<view class="right-btn">
					
				</view>
			</view>
			<view class="">
				<view class="">
					详细地址
				</view>
				<view class="margin-b50">
					<textarea class="address" value="" placeholder="请输入详细地址" />
				</view>
			</view>
			<view class="tui-flex tui-align-between margin-b50 txt padding-b30">
				<text>设为默认地址</text>
				  <switch checked @change="switch1Change" color='#F07623' style="transform:scale(0.7)" />
			</view>
			
			
			<button form-type="submit" class="btn-submit">确定</button>
			
		</form>
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
page{ background:#fff}
.personal{  margin-bottom: 30rpx;}
.txt{ padding: 20rpx 0; border-bottom: 1px solid $border-color;height:70rpx}
.margin-b50{ margin-bottom: 50rpx;}
.address{  background: #FAFAFA; width: 100%; height:172rpx; padding: 10rpx 20rpx;}
.padding-b30{ padding-bottom: 30rpx;  height:90rpx}
</style>
