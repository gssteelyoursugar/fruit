<template>
	<view>
		<view class="box-title">
			<view class="title-time"><text>2020年8月</text></view>
			<view class="title-price">
				<text class="title-price1"><text>订单金额￥</text><text>140,000.00</text></text>
				<text class="title-price1"><text>订单数量</text><text>5000件</text></text>
				</view> 
		</view>
		<view class="tui-tab-rank"  v-for="(item,index) in 10 " :key="index">
			<view class="tui-time-title"><text class="title-time-left">2020-09-02 15:06:00</text> </view>
		<view class="tui-tab-rank-cent">
			<image src="../../static/images/ranking.png" mode="aspectFill" class="img-rink"></image>
			<view class="tui-pro-tit">
				<text class="tag-tit">采手精选</text> <text class="tag-tit-text">葡萄回复的伤口缝合公司的讲课风格</text>
				<view class="tag-tit2">
					<view class="">
						<view class="tag-tit2-price">
							5斤装 × 1
						</view>
						<view class="tag-tit2-text">
							 <text class="price1">￥108元</text><text class="price2">/件</text>
						</view>
					</view>
					<!-- <image src="../../static/images/zan.png" mode="aspectFill" class="tui-shop-car"></image> -->
					<view>实付:108（含运费）</view>
				</view>
				
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box-title{
	height: 130rpx;
	background-color: #fff;
	margin-top: 20rpx;
	padding: 0 40rpx;
}
.title-time{
	height: 60rpx;
	line-height: 60rpx;
}
.title-price{
	height: 60rpx;
	line-height: 60rpx;
	display: flex;
	justify-content: space-between;
}

	/* start */
	.price1{
		color: #FF5600;
		font-size: 24rpx;
		font-weight: 600;
	}
	.price2{
		color: #B6B6B6;
		font-size: 24rpx;
	}
	.tui-tab-rank{
		background-color: #fff;
		margin: 20rpx 0;
		
	}
	.tui-time-title{
		height: 60rpx;
		line-height: 60rpx;
		border-bottom: 1rpx solid #F5F5F5;
		
	}
	.title-time-left{
		margin-left: 40rpx;
		color: #555;
	}
	.tui-tab-rank-cent{
		display: flex;
		padding: 20rpx ;
		
	}
	.img-rink{
		width: 180rpx;
		height: 180rpx;
		display: block;
		margin-right: 20rpx;
	}
	.tui-pro-tit {
		flex: 5;
	}
	.tag-tit{
		/* 渐变色 */
		background-image: linear-gradient(to right, #00C94A , #00AC3F);
		margin-right: 10rpx;
		padding: 0 10rpx;
		border-radius: 15rpx 0 15rpx 0;
		color: #fff;
		font-size: 20rpx;
	}
	.tag-tit2{
		display: flex;
		justify-content: space-between;
	}
	.tag-tit2-price{
		color: #555555;
		font-size: 24rpx;
	}
	.tag-tit2-text{
		color: ##FF5600;
		font-size: 24rpx;
	}
	.tui-shop-car{
		width: 45rpx;
		height: 48rpx;
		display: block;
	}
	.tag-tit-text{
		font-size: 28rpx;
		color: #333;
	}
	/* end */
</style>
