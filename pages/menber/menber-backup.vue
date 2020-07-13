<template>
	<view>
		<my-top :isactive="isactive"></my-top>

		<view class="bgf">
			<!-- 如果已经是 则隐藏 会员福利 -->
			<view class="my-fuli positionr" v-if="!ismenber">
				<image src="../../static/images/my/my-menber.png" mode="widthFix" class="w100"></image>
				<view @click="showMenber(true)" class="positionb-w box-border-box fuli-content fon30 ">
					<view class="w100">
						<view class=" colorf">现在成为会员</view>
						<view class=" color9">仅差一步即可享以下福利</view>
					</view>

					<view class="tui-flex tui-vertical-center tui-align-between w100 join-menber">
						<view class="colorf">成为会员</view>
						<image class="my-icon-c" src="../../static/images/my/my-c-icon.png" mode="widthFix"></image>
					</view>
					
				</view>
			</view>
			<!-- end 会员福利 -->

			<view class=" list tui-flex">
				<view @tap="goList(item.typeId)" class="item  tui-col-6" v-for="(item, index) in itemList" :key="index">
					<view class="box">
						<view class="tui-center">
							<image :src="item.img" mode="widthFix" class="img-icon"></image>
							<view class="fon26 margin-b20">{{ item.title }}</view>
							<view class="fon20 color9">{{ item.desc }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	
	    <!-- 成为会员弹层 -->
		<view class="tui-mask" v-if="isShowLogin" @click="showMenber(false)">
			
		</view>
		<view class="menber-box box-border-box padding35" v-if="isShowLogin">
			<view class="fon42 tui-center">
				仅差一步，即可享以下福利
			</view>
			<view class="tui-center tui-flex padding-tb40">
				<view class="tui-col-3" v-for="(item,index) in itemList" :key="index">
					<image :src="item.img" class="menber-icon" mode="widthFix"></image>
					<view class="">
						{{item.title}}
					</view>
				</view>
			</view>
		
		    <view class="menber-btn  tui-flex tui-align-between  tui-center">
		    	<view class="btn tui-col-6">
		    		<view class="box-link" @click="showMenber(false)">
		    			下次再说
		    		</view>
		    	</view>
				<view class="btn tui-col-6">
					<view class="box-link bg-org colorf">
						成为会员
					</view>
				</view>
		    </view>
			<view class="tui-flex tui-align-between tui-vertical-center ">
				<checkbox class="check-box" color="#e96a1e"></checkbox>
				<view class="check-title fon20">
					同意依照《格米莱隐私政策》对我的个人信息进行收集和使用，我已阅读并确认已被给予充分机会理解该政策的内容。
				</view>
				
			</view>
		</view>
		<!-- end 成为会员弹层 -->
	</view>
</template>

<script>
import myTop from '@/components/my/myTop.vue';
export default {
	data() {
		return {
			ismenber:false,
			isShowLogin:false,
			isactive:0,
			itemList: [
				{
					img: '../../static/images/my/my-icon4.png',
					url: '../selectedProducts/selectedProducts',
					title: '精选产品',
					desc: '为您提供量身 推荐精选产品信息',
					typeId:1
				},
				{
					img: '../../static/images/my/my-icon5.png',
					url: '../selectedProducts/selectedProducts',
					title: '新品推广',
					desc: '为您推广新品快速了解新品信息',
					typeId:2
				},
				{
					img: '../../static/images/my/my-icon6.png',
					url: '../exchangeGoods/exchangeGoods',
					title: '90天换货指南',
					desc: '为您提供量身推荐精选产品信息',
					typeId:3
				},
				{
					img: '../../static/images/my/my-icon7.png',
					url: '../selectedProducts/selectedProducts',
					title: '线下活动',
					desc: '为您提供量身推荐精选产品信息',
					typeId:4
				}
			]
		};
	},
	components:{
		myTop
	},
	methods:{
		showMenber(boolean){
			if(boolean){
				this.isShowLogin = true
			}else{
				this.isShowLogin = false
			}
		},
		goList(typeId){
			uni.navigateTo({
				url:'../selectedProducts/selectedProducts?typeId='+typeId
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.my-fuli {
	width: 706rpx;
	height: 348rpx;
	margin: 20rpx auto 0;

	.fuli-content {
		padding: 35rpx;
		
	}
	.join-menber{ padding-top: 80rpx;}
}

.img-icon {
	width: 140rpx;
}
.list {
	padding: 20rpx 10rpx;
}
.item {
	padding: 20rpx;box-sizing: border-box;
}
.box {
	border: 1px solid #ccc;
	background: $color-f;
	padding: 45rpx;
}
.my-icon-c{ width: 101rpx; height:107rpx}

.menber-box{
	width:100%;
	height: 497rpx;
	background-color:$color-f;
	border-radius: 7rpx;
	position: fixed;
	 bottom: 0;
	 left: 0;
	 z-index: 1000;
}
.menber-icon{ width: 50rpx;}
.btn{ padding: 10rpx;  display: block; box-sizing: border-box; margin-bottom: 10rpx;
 .box-link{background: #ededed; padding:15rpx}
 .bg-org{ background: $color-org;}
}
.check-box{ width: 24rpx; box-sizing: border-box;}
.check-title{ width: 635rpx;}
</style>
