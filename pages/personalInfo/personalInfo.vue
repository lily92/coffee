<template>
	<view class="padding-lr30 padding-t30">
		<w-picker mode="region" :areaCode="areaCode" :hideArea="false" @confirm="onConfirm" ref="region" :timeout="true"></w-picker>
		<view class="fon34 personal">个人信息</view>
		<form @submit="" @reset="" class="fon30">
			<view class="">姓名</view>
			<view class="margin-b50"><input class="txt" type="text" value="" placeholder="请输入姓名" /></view>
			<view class="">生日</view>
			<view class="margin-b50 tui-cell-arrow">
				<w-picker mode="date" ref="date" @confirm="bindChangeDate"></w-picker>
				<input :value="date" @tap="toggleTab('date')" class="txt" type="text" v-model="date" placeholder="请选择生日" />
			</view>
			<view class="">性别</view>

			<view class="tui-cell-arrow margin-b50">
				<picker @change="bindPickerChange" :value="index" :range="selectorList">
					<view class="uni-input txt">{{ selectorList[index] }}</view>
				</picker>
			</view>

			<view class="">手机号</view>
			<view class="margin-b50"><input class="txt" type="text" value="13719150455" placeholder="请输入手机号" /></view>
			<view class="">所在地</view>
			<view class="margin-b50 tui-cell-arrow">
				<input
					@tap="toggleTab('region')"
					placeholder-class="tui-phcolor"
					v-model="address_str"
					class="txt w100"
					disabled
					name="city"
					placeholder="请选择所在地"
					maxlength="50"
					type="text"
				/>
			</view>
			<button form-type="submit" class="btn-submit margin-b50">确定</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			areaCode: [],
			province_id: '',
			city_id: '',
			district_id: '',
			address_str: '',
			index: 0,
			date: '',
			gender: '',

			selectorList: ['男', '女'],
			defaultProps: {
				label: 'name',
				value: 'id'
			}
		};
	},
	methods: {
		bindPickerChangeSex: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
		},
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
		bindChangeDate(val) {
			console.log(val.result);
			this.date = val.result;
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
		}
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
	margin-bottom: 70rpx;
}
.txt {
	padding: 15rpx 0;
	border-bottom: 1px solid $border-color;
	height: 70rpx;
}
.margin-b50 {
	margin-bottom: 50rpx;
}
</style>
