<template>
	<view class="cart">
		<view class="">
			<checkbox-group @change="buyChange" class="radio" >
				<view v-for="(item, index) in cartList" :key="item.value" class="tui-flex padding30 border-b  tui-vertical-center tui-align-between radio">
					<label  class="tui-checkbox" >
						<checkbox :value="item.id" :checked="item.selected" color="#f07623" ></checkbox>
					
					</label>
					
					<view class="cart-con tui-flex tui-align-between">
						<view class="cart-img  tui-flex tui-vertical-center">
							<image src="../../static/images/product-large.jpg" mode="widthFix"></image>
						</view>
						<view class="car-desc tui-flex ">
							<view class="w100">
								<view class=" tui-flex tui-align-between tui-vertical-center">
									<view class="">
										格米莱CRM3200C咖啡机
									</view>
									<view class="icon-del" :index='index' :item
									 ='item' @tap="delProduct(item.id)">
										删除商品
									</view>
								</view>
								<view class=" color9">
									颜色：银色
								</view>					
							</view>
							<view class="w100 tui-flex tui-vertical-center tui-align-between">
								<text>¥{{item.price}}</text>
								<view class="">
									<number-box :iconSize='14' :index="index" @change='changeBuyNum' :value='item.buyNum' :width="numberWidth" ></number-box>
								</view>
							</view>
							
						</view>
					</view>
									
					
				</view>
				
			</checkbox-group>
			
		</view>
		
		<!-- 底部 -->
		<view class="cart-bottom-h">
			
		</view>
		<view class="cart-bottom bgf tui-flex tui-vertical-center tui-align-between">
			<checkbox-group @change="checkAll"  class=" padding-lr30">
				<label class="tui-checkbox">
					<checkbox :checked="isAll"   ></checkbox>
					<text class="tui-checkbox-pl">全选</text>
				</label>
			</checkbox-group>
			<view class="">
				<view class="">
					<text  class="color6">总计：</text><text class="color-org">￥{{totalPrice | getPrice}}</text>
				</view>
				<view class="">
					<text class="color9">总件数：</text><text class="color6">{{totalBuyNum}}件</text>
				</view>
			</view>
			<view class="fon34 colorf btn-submits tui-center">
				立即付款
			</view>
		</view>
		<!-- end 底部 -->
	</view>
</template>

<script>
	import numberBox from '@/components/numberbox/numberbox.vue'
	export default {
		components:{
			numberBox
		},
		data() {
			return {
				numberWidth:40,
				current:0,
				value:0,
				isAll:false,
				totalPrice: 0,
				totalBuyNum:0,
				cartList: [
				{
					id: "t2020003120",
					buyNum: 2,
					price: 299.5,
					selected: false
				}, {
					id: 't1020003122',
					buyNum: 1,
					price: 499,
					selected: false
				}
				]
			};
		},
		filters: {
			getPrice(price) {
				price = price || 0;
				return price.toFixed(2)
			}
		},
		methods:{
			changeBuyNum(e){
				// this.value = e.value
				this.cartList[e.index].buyNum = e.value
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			},
			calcHandle() {
				let buyNum = 0;
				let totalPrice = 0;
				let selectedNum = 0;
				this.cartList.map((item) => {
					if (item.selected) {
						buyNum += item.buyNum;
						totalPrice += item.price * item.buyNum;
						selectedNum++
					}
				})
				
				this.isAll = selectedNum === this.cartList.length
				this.buyNum = buyNum
				this.totalPrice = totalPrice
				this.totalBuyNum = buyNum
			},
			buyChange(e) {
				this.cartIds = e.detail.value;
				
				this.cartList.map(item => {
					//如果购物车id为数字统一转成字符串
					if (~this.cartIds.indexOf(item.id)) {
						item.selected = true;
					} else {
						item.selected = false;
					}
				})
				setTimeout(() => {
					this.calcHandle()
					// console.log('aa')
				}, 0)
			},
			checkAll(e) {
				this.isAll = !this.isAll;
				let buyNum = 0;
				let totalPrice = 0;
				this.cartList.map((item) => {
					item.selected = this.isAll;
					if (this.isAll) {
						buyNum += item.buyNum;
						totalPrice += item.price * item.buyNum;
					}
				})
				this.totalPrice = totalPrice;
				this.buyNum = buyNum;
				this.totalBuyNum = buyNum
			},
			delProduct(id){
			
				for (let i = 0; i < this.cartList.length; i++) {
					if(this.cartList[i].id === id){
						console.log(this.cartList[i].id)
						uni.showToast({
							title:'需要删除的id：'+id,
							icon:'none'
						})
						
					}
				}
				
				// this.cartList.splice()
				
				// console.log(this.cartList)
				setTimeout(() => {
					this.calcHandle()
				}, 0)
			}
		}
	}
</script>

<style lang="scss">
	page{background: $color-f;}
	
</style>
<style lang="scss" scoped>

.cart-con{ width: 625rpx;}
.cart-img{ width: 187rpx; height:187rpx}
.icon-del{width: 48rpx; height:54rpx; background: url(~@/static/images/icon-del.png) no-repeat center; background-size: 24rpx; flex-shrink: 0; font-size: 0;}
.car-desc{ width: 400rpx; align-content: space-between;}
.border-b{ border-bottom: 1px solid $border-color;}



		
</style>
