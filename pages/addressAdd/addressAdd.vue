<template>
	<view class="padding-lr30 padding-t30">
		<view class="fon34 personal">新增收货信息</view>
		<w-picker mode="region" :areaCode="areaCode" :hideArea="false" @confirm="onConfirm" ref="region" :timeout="true"></w-picker>
		<form @submit="" @reset="" class="fon30">
			<view class="">收货人</view>
			<view class="margin-b50"><input class="txt" type="text" value="" placeholder="请填写收货人姓名" /></view>
			<view class="">手机号</view>
			<view class="margin-b50"><input class="txt" type="text" value="" placeholder="请填写手机号" /></view>

			<view class="">所在地区</view>
			<view class="margin-b50  tui-cell-arrow">
				<input
					@tap="toggleTab('region')"
					placeholder-class="tui-phcolor"
					v-model="address_str"
					class="txt w100"
					disabled
					name="city"
					placeholder="所在地区"
					maxlength="50"
					type="text"
				/>
				
			</view>
			
			<view class="">
				<view class="">详细地址</view>
				<view class="margin-b50"><textarea class="address" value="" placeholder="请输入详细地址" /></view>
			</view>
			<view class="tui-flex tui-align-between margin-b50 txt padding-b30">
				<text>设为默认地址</text>
				<!-- <switch checked @change="switch1Change" color="#F07623" style="transform:scale(0.7)" /> -->
				<switch :checked="is_default ? true : false" @change="switchChange" color="#F07623" style="transform: scale(0.5);" />
			</view>

			<button form-type="submit" class="btn-submit margin-b50">确定</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			address_id: 0, //地址id
			name: '',
			detail: '',
			mobile: '',
			province_id: '',
			city_id: '',
			district_id: '',
			is_default: 1,
			iscode: 1,
			address_str: '',
			resultInfo: '',
			areaCode: []
		};
	},
	onLoad: function(options) {
		console.log(options); //打印出上个页面传递的参数。
		this.address_id = options.address_id || 0;
	},
	methods: {
		toggleTab(str) {
			this.$refs[str].show();
		},
		onConfirm(val) {
			console.log(val);
			this.resultInfo = { ...val };
			console.log(this.resultInfo);
			this.province_id = this.resultInfo.checkValue[0];
			this.city_id = this.resultInfo.checkValue[1];
			this.district_id = this.resultInfo.checkValue[2];
			this.address_str = this.resultInfo.checkArr[0] + ' ' + this.resultInfo.checkArr[1] + ' ' + this.resultInfo.checkArr[2];
			this.areaCode = [this.province_id, this.city_id, this.district_id];
		},
		switchChange(e) {
			let value = e.target.value;
			console.log(value);
			let that = this;
			this.$set(that, 'is_default', value); // 将点击改变的状态赋给dladd_default
		},
	}
};
</script>
<style lang="scss">
page {
	background: #fff;
}
</style>
<style lang="scss" scoped>
.personal {
	margin-bottom: 30rpx;
}
.txt {
	padding: 20rpx 0;
	border-bottom: 1px solid $border-color;
	height: 70rpx;
}
.margin-b50 {
	margin-bottom: 50rpx;
}
.address {
	background: #fafafa;
	width: 100%;
	height: 172rpx;
	padding: 10rpx 20rpx;
}
.padding-b30 {
	padding-bottom: 30rpx;
	height: 90rpx;
}
</style>
