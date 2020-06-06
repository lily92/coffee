<template>
	<view class="page bgf9 ">
		<view class="qa-list padding-lr30 ">
			<!--问答-->
			<radio-group  @change="radioChange">
				<label  class="qa-item tui-flex tui-vertical-center tui-align-between" v-for="(item, index) in qaList" :key="index">
					<view class="img positionr">
						<image src="../../static/images/my/info/qa-img-bg.jpg" mode="widthFix" class="w100"></image>
						<view class="positionb-w"><image :src="item.img" mode="widthFix" class="w100"></image></view>
					</view>
					<view class="desc">
						<view class="fon26">{{ item.title }}</view>
						<view class="fon20 color9">{{ item.subTitle }}</view>
					</view>
					<view class="radio">
						<label class="radio">
							<radio color="#e96a1e" :value="item.value" :checked="index === current"  />
							<text></text>
						</label>
					</view>
				</label>
			</radio-group>

			<!--问答-->
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
		
		<view @tap="qaDetail" class="btn-comfrim fon30 colorf tui-center margin-auto">
			确定
		</view>
		
		
	</view>
</template>

<script>
import tuiLoadmore from '@/components/loadmore/loadmore';
import tuiNomore from '@/components/nomore/nomore';
export default {
	components: {
		tuiLoadmore,
		tuiNomore
	},
	data() {
		return {
			pageIndex: 0,
			loadding: false,
			pullUpOn: true,
			current:0,
			qaList: [
				{
					value: '1',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '格米莱',
					subTitle: '11CRM3200C(咖啡机)'
				},
				{
					value: '2',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '222格米莱',
					subTitle: 'CRM3200C(咖啡机)'
				},{
					value: '3',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '格米莱',
					subTitle: '11CRM3200C(咖啡机)'
				},
				{
					value:'4',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '222格米莱',
					subTitle: 'CRM3200C(咖啡机)'
				}
			],
			loadData: [
				{
					value: '5',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '333格米莱',
					subTitle: 'CRM3200C(咖啡机)'
				},
				{
					value: '6',
					img: '../../static/images/my/info/qa-img.jpg',
					title: '444格米莱',
					subTitle: 'CRM3200C(咖啡机)'
				}
			]
		};
	},
	onLoad: function(options) {},
	mounted() {
		// this.getData()
	},
	methods: {
		getData() {
			var _this = this;
			if (_this.loadding == true) {
				return false;
			}
			_this.loadding = true;
			var param = {
				page: _this.pageIndex + 1
			};
			_this.tui.request('/mine/qaList', param).then(function(data) {
				_this.loadding = false;
				if (data.stat == 1) {
					_this.pageIndex = data.data.curpage;
					_this.pullUpOn = data.data.more;
					_this.qaList = _this.qaList ? _this.qaList.concat(data.data.list) : data.data.list;
				}
			});
		},
		radioChange(evt) {
			for (let i = 0; i < this.qaList.length; i++) {
				if (this.qaList[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		qaDetail(){
			uni.navigateTo({
				url:'../qa-detail/qa-detail?id='+this.qaList[this.current].value
			})
		}
	
	},
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {
		//延时为了看效果
		setTimeout(() => {
			this.qaList = this.loadData;
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false;
			uni.stopPullDownRefresh();
			this.tui.toast('刷新成功');
		}, 200);
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true;
		if (this.pageIndex == 3) {
			this.loadding = false;
			this.pullUpOn = false;
		} else {
			this.qaList = this.qaList.concat(this.loadData);
			this.pageIndex = this.pageIndex + 1;
			this.loadding = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.qa-list {
	margin: 40rpx 0;
}
.qa-item {
	padding: 20rpx;
	background: $color-f;
	margin-bottom: 20rpx;
}
.img {
	width: 100rpx;
}
.desc {
	width: calc(100% - 180rpx);
}
.btn-comfrim {
	width: 556rpx;
	height: 83rpx;
	background-color: #e96a1e;
	line-height: 83rpx;
}
</style>
