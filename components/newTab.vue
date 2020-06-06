<template>
	<view class="">
		<!-- list -->
		<view class="list tui-center padding-t30 padding-lr30 ">
			<view class="tui-flex">
				<view class="list-tag tui-col-3 " v-for="(item, index) in listTab" :key="index">
					<view v-if="index<=3" class="list-bg tui-flex tui-vertical-center tui-align-center">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="tui-flex w100" v-show="isShowMore">
				<view class="tui-col-9">
					<view class=" tui-flex">
						<view class="tui-col-6"  v-for="(item, index) in listTab" :key="index">
							<view class="list-tag">
								<view v-if="index<=5 && index>3" :class="index==4?'tab-bg1':'tab-bg2'" class="h118 list-bg tui-flex tui-vertical-center tui-align-center">
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
					
					<view class="tui-flex">
						<view class="tui-col-4">
							<view class="list-tag"  v-for="(item, index) in listTab" :key="index">
								<view v-if="index>5 && index<=8" class="list-bg tui-flex tui-vertical-center tui-align-center">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="tui-col-4">
							<view class="list-tag"  v-for="(item, index) in listTab" :key="index">
								<view v-if="index>=9 && index<=10" :class="index==10?'h118  bg-coffee ':''" class="list-bg tui-flex tui-vertical-center tui-align-center">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="tui-col-4">
							<view class="list-tag"  v-for="(item, index) in listTab" :key="index">
								<view v-if="index>=11 && index<=12" :class="index==11?'h118  bg-coffee1 ':''" class="list-bg tui-flex tui-vertical-center tui-align-center">
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="tui-col-3">
					<view class="list-tag"  v-for="(item, index) in listTab" :key="index">
						<view v-if="index>=13 & index <= 16" :class="index==14?'h118 bg-coffee3':''" class="list-bg tui-flex tui-vertical-center tui-align-center">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- end list -->
		<view class="btn-arrow color9 tui-center" @tap="showMore(true)">
			<view class="icon margin-auto" :class="isShowMore?'active':''">
				
			</view>
			<view class="">
				点击展开所有标签
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:'newTab',
		props:{
			listTab:{
				type:Array
			}
		},
		data() {
			return {
				isShowMore:false
			};
		},
		methods:{
			showMore(){
				this.isShowMore = !this.isShowMore
			}
		}
	}
</script>

<style lang="scss" scoped>
.list-tag {padding:0 4rpx; box-sizing: border-box;}
.list-bg{ background: #eee; height: 56rpx; margin-bottom: 8rpx;}
.h118{ height:118rpx}
.tab-bg1{ background: url(~@/static/images/index-1.jpg) no-repeat  center right; background-size:100%; padding-right: 130rpx;}
.tab-bg2{ background: url(~@/static/images/index-2.jpg) no-repeat  center right; background-size:100%;  }
.bg-coffee{background: url(~@/static/images/index-5.jpg) no-repeat  center right; background-size:100%; padding-right: 90rpx; }
.bg-coffee1{background: url(~@/static/images/index-3.jpg) no-repeat  center right; background-size:100%; }
.bg-coffee3{background: url(~@/static/images/index-4.jpg) no-repeat  center right; background-size:100%;}
.btn-arrow .icon{ width: 43rpx; height:43rpx;background: url(../static/images/icon-up.png) no-repeat center; background-size: contain; transform: rotate(180deg);
}
.btn-arrow .icon.active{transform: rotate(0deg);}
</style>
