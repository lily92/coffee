<template>
	<view>
		<swiper-banner :height="bannerHight" :list="bannerList" class="h755"></swiper-banner>

		<view class="padding30">
			<view class="fon34">格米莱CRM3200C咖啡机</view>
			<view class="color6">商用半自动专业意式家用多锅炉格米莱咖啡机</view>
			<view class="price padding-tb40">
				<text class="fon40 color-org margin-r20">￥2000.00</text>
				<text class="fon22 color9">原价￥2500.00</text>
			</view>

			<view @tap="showGuiGe(true)" class="fon30 tui-cell-arrow border-b tui-flex tui-vertical-center tui-align-between">
				<text>规格</text>
				<view class="w550">格米莱CRM3200C咖啡机-灰色</view>
				
			</view>
			<navigator url="../addressList/addressList" class="fon30 tui-cell-arrow border-b tui-flex tui-vertical-center tui-align-between">
				<text>配送</text>
				<view class="w550">广东省广州市白云区</view>			
			</navigator>
			<view class="fon30 border-b tui-flex tui-vertical-center tui-align-between">
				<text>运费</text>
				<view class="w550">免费</view>
			</view>

			<!-- 评价（45） -->
			<view class="comment  padding-tb40">
				<view class="fon30">评价（45）</view>
				<view class="c-item tui-flex tui-align-between" v-for="(item, index) in commentList" :key="index">
					<view class="img"><image src="../../static/images/user-imgs.png" mode="widthFix" class="w100"></image></view>
					<view class="item-desc">
						<view class="fon34">用户昵称123</view>
						<view class="color9">2020-01-01</view>
						<view class="padding-tb30">为客户制定符合自身的咖啡套餐，免费提供专业的 咖啡机维修服务，定期对咖啡机30多个项目进行维 护保养。</view>
					</view>
				</view>
				<view class="btn-more tui-center">更多</view>
			</view>
			<!-- end 评价（45） -->
		</view>

		<view class="">
			<view class="fon34 padding-lr30">图文详情</view>
			<view class="padding-t30"><image src="../../static/images/product-d-img.jpg" mode="widthFix" class="w100"></image></view>
		</view>
		<!-- 底部 -->
		<view class="cart-bottom-h"></view>
		<view class="cart-bottom bgf tui-flex tui-vertical-center tui-align-between">
			<view class="cart-btn tui-center">
				购物车
			</view>
			<view class="tui-flex">
				<view class="fon34 colorf btn-submits tui-center join-bg">加入购物车</view>
				<view class="fon34 colorf btn-submits tui-center">立即购买</view>
			</view>
		</view>
		<!-- end 底部 -->
		<right-icon></right-icon>
		
		<!-- 选择规格 -->
		<view class="tui-mask" v-show="isShowGuige" @tap="showGuiGe(false)">
			
		</view>
		<view class="guige bgf padding30" :class="isShowGuige?'active':''">
			<view class="product-item margin-b20 tui-flex tui-align-between positionr">
				<view class="product-img">
					<image src="../../static/images/my/info/qa-img.jpg" mode="widthFix" class="w100"></image>
				</view>
				<view class="product-con">
					<view class="">
						格米莱CRM3200C(咖啡机)
					</view>
					<view class="color9">
						库存：132131
					</view>
					<view class="color9">
						已选择：黑色
					</view>
				</view>
			
			  <view class="btn-closes" @tap="showGuiGe(false)">
			  	
			  </view>
			</view>
			<view class="">
				<view class="">
					<view class="">
						款式
					</view>
					<view class="tui-flex padding-tb30">
						
						<view hover-class="tab-active" class="tag margin-r20" v-for="(item,index) in tagList" :key="index" :class="index==0?'active':''">
							{{item.name}}
						</view>
					</view>
				</view>
				
				<view class=" margin-b50 tui-flex  tui-vertical-center tui-align-between">
					<text>购买数量</text>
					<view class="">
						<number-box :value="value" @change="change"></number-box>
						
					</view>
				</view>
			</view>
						
		</view>
		<!-- 选择规格 -->
	</view>
</template>

<script>
import swiperBanner from '@/components/my/swiperBanner';
import rightIcon from '@/components/use/rightIcon.vue';
import numberBox from '@/components/thorui/tui-numberbox/tui-numberbox.vue'
export default {
	data() {
		return {
			value:1,
			bannerHight:755,
			isShowGuige:false,
			tagList:[
				{
					'id':'02',
					'name':'黑色'
				},{
					'id':'03',
					'name':'白色'
				},{
					'id':'04',
					'name':'红色'
				}
			],
			bannerList: [
				{
					img: '../../static/images/product-large.jpg'
				},
				{
					img: '../../static/images/product-large.jpg'
				},
				{
					img: '../../static/images/product-large.jpg'
				}
			],
			commentList: [
				{
					userImg: ''
				},
				{
					userImg: ''
				}
			]
		};
	},
	components: {
		swiperBanner,
		rightIcon,
		numberBox
	},
	methods:{
		change(e) {
			this.value = e.value
		},
		showGuiGe(boolean){
			if(boolean == true){
				this.isShowGuige = true
			}else{
				this.isShowGuige = false
			}
			
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background: $color-f;
}
.h755 .swiper {
	height: 755rpx !important;
}
.w550 {
	width: 530rpx;
}
.border-b {
	border-bottom: 1px solid $border-color;
	padding-bottom: 30rpx;
	margin-bottom: 30rpx;
}
.img {
	width: 78rpx;
	height: 78rpx;
	border-radius: 50%;
	overflow: hidden;
}
.item-desc {
	width: calc(100% - 98rpx);
}
.c-item {
	border-bottom: 1px solid $border-color;
	padding-top: 30rpx;
}
.btn-more {
	width: 100%;
	height: 104rpx;
	border: solid 2rpx #333333;
	line-height: 104rpx;
	margin-top: 50rpx;
}
.join-bg{ background: #333333;}
.cart-btn{ background: url(~@/static/images/icon-cart1.png) no-repeat center 30rpx; background-size: 53rpx; width: 170rpx; height:100%; padding-top: 75rpx;}

.guige{ position: fixed;  bottom:-100% ; left:0; width: 100%; z-index: 1000; transition: .5s linear all;}
.guige.active{ bottom:128rpx ;}
.product-item{ border-bottom: 1px solid $border-color;}
.product-img{ width: 138rpx;}
.product-con{ width: calc(100% - 168rpx);}
.btn-closes{ width: 82rpx; height:82rpx; background: url(~@/static/images/close-small.png) no-repeat center; background-size: 42rpx; position: absolute; right:0; top:-30rpx}
.tag{ padding: 10rpx 30rpx;  border:1px solid $border-color}
.tab-active,.tag.active{background: $color-org; color:$color-f}
</style>
