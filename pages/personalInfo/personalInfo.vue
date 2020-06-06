<template>
	<view class="padding-lr30 padding-t30">
		<view class="fon34 personal">
			个人信息
		</view>
		<form @submit="" @reset="" class="fon30">
			<view class="">
				姓名
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请输入姓名" />
			</view>
			<view class="">
				生日
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请选择生日" />
			</view>
			<view class="">
				性别
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请选择性别" />
			</view>
			<view class="">
				手机号
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="13719150455" placeholder="请输入手机号" />
			</view>
			<view class="">
				所在地
			</view>
			<view class="margin-b50">
				<input class="txt" type="text" value="" placeholder="请选择所在地" />
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
.personal{  margin-bottom: 70rpx;}
.txt{ padding: 15rpx 0; border-bottom: 1px solid $border-color;height:70rpx}
.margin-b50{ margin-bottom: 50rpx;}
</style>
