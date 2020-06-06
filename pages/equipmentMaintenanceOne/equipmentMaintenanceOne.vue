<template>
	<view>
		<view class="">
			<image src="../../static/images/wx-banner.jpg" mode="widthFix" class="w100"></image>
			
			<view class="btn-group padding-tb40">
				<view class="btn-submit tui-flex tui-align-center margin-b50 ">
					<view class="tui-flex tui-vertical-center">
						<image class="margin-r20 icon" src="../../static/images/icon-rg.png" mode="widthFix"></image
						>
						<text>人工咨询</text>
					</view>
				</view>
				<view @tap="openActionSheet" class="btn-submit tui-flex tui-align-center margin-b50 ">
					<view class="tui-flex tui-vertical-center">
						<image class="margin-r20 icon" src="../../static/images/icon-tel.png" mode="widthFix"></image
						>
						<text>电话咨询</text>
					</view>
				</view>
				<navigator url="../equipmentMaintenance-d/equipmentMaintenance-d" class="btn-submit tui-flex tui-align-center btn-jd ">
					<view class="tui-flex tui-vertical-center">
						<image class="margin-r20 icon" src="../../static/images/icon-jd.png" mode="widthFix"></image
						>
						<text>进度查询</text>
					</view>
				</navigator>
			</view>
		</view>
	
	
	    <tui-actionsheet
	    	:show="showActionSheet"
	    	:tips="tips"
	    	:item-list="itemList"
	    	:mask-closable="maskClosable"
	    	:color="color"
	    	:size="size"
	    	:is-cancel="isCancel"
	    	@click="itemClick"
	    	@cancel="closeActionSheet"
	    ></tui-actionsheet>
	
	</view>
</template>

<script>
	import tuiActionsheet from '@/components/thorui/tui-actionsheet/tui-actionsheet.vue'
	export default {
		components:{
			tuiActionsheet
		},
		data() {
			return {
				isactive:2,
				showActionSheet: false,
				maskClosable: true,
				tips: '确认清空搜索历史吗？',
				itemList: [],
				color: '#9a9a9a',
				size: 26,
				isCancel: true,
			};
		},
		methods:{
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet() {
				let itemList = [
					{
						text: '服务热线1：4000-000-000',
						color: '#333'
					},
					{
						text: '服务热线2：4000-000-000',
						color: '#333'
					},
					{
						text: '微信在线客服',
						color: '#333'
					},
				];
				let maskClosable = true;
				let tips = '';
				let color = '#9a9a9a';
				let size = 26;
				let isCancel = true;
				setTimeout(() => {
					this.showActionSheet = true;
					this.itemList = itemList;
					this.maskClosable = maskClosable;
					this.tips = tips;
					this.color = color;
					this.size = size;
					this.isCancel = isCancel
				}, 0)
			},
			itemClick(e) {
				let index = e.index;
				this.closeActionSheet();
				this.tui.toast(`您点击的按钮索引为：${index}`);
			},
		}
	}
</script>

<style lang="scss" scoped>
.icon{ width: 40rpx;}
.btn-jd{ border:1px solid $border-color; background: none; color:$color-3}
</style>
