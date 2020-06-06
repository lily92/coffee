<template>
	<view class="">
		<view class="tui-mask" @tap="close" ></view>
		<view class="refund-reson ">
			<radio-group class="padding30" @change="radioChange">
				<label class="border-b tui-flex tui-vertical-center tui-align-between" v-for="(item, index) in resonList" :key="index">
					<text>{{ item.title }}</text>
					<view class="radio">
						<label class="radio">
							
							<radio :value="item.id" color="#e96a1e" :checked="index === currentReson" />
							<text></text>
						</label>
					</view>
				</label>
			</radio-group>
			<view class="close-btn tui-center fon30 padding20 colorf" @tap="close">关闭</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'actionSheet',
	props: {
		resonList: {
			type: Array
		},
		currentReson:{
			type:Number
		}
	},
	data(){
		return{
			currentResons:0
		}
	},
	methods:{
		radioChange: function(evt) {
			let _this = this
			for (let i = 0; i < this.resonList.length; i++) {
				
				if (this.resonList[i].id === evt.target.value) {
					this.currentResons = i;
					this.currentResons = evt.target.value
					_this.$emit('select',evt.target.value)
					break;
				}
			}
		},
		close(){
			this.$emit('close',{})
		}
		
	}
};
</script>

<style lang="scss" scoped>
.border-b {
	border-bottom: 1px solid $border-color;
	padding-bottom: 30rpx;
	margin-bottom: 30rpx;
}
.refund-reson {
	position: fixed;
	bottom: 0;
	left: 0;
	background: $color-f;
	z-index: 1001;
	width: 100%;
}
.close-btn {
	background: $color-org;
}
</style>
