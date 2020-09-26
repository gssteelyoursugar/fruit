<template>
	<view class="">
		<view class="content">
			<image class="logo" src="../../static/images/selection1.png"></image>
			<view class="text-area">
				<text class="title">开放</text>
				<text class="title">融合</text>
				<text class="title">发展</text>
				<text class="title">共享</text>
				<text class="title">共赢</text>
			</view>
			
		</view>
		<view class="text-area-box">
			<view class="text-area2">
				<image src="../../static/images/email.png" mode="" class="email"></image>
				
				<text class="title-em">圈果邮箱</text>
				<text class="title">zgqgpt@163.com</text>
			</view>
			<view class="text-area2">
				<image src="../../static/images/phone.png" mode="" class="phone"></image>
				
				<text class="title-em">果叔电话</text>
				<text class="title">13978860880</text>
			</view>
		</view>
		
		
	</view>
	
	
	
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color: #fff;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.email{
		height: 60rpx;
		width: 60rpx;
		
	}
	.phone{
		height: 60rpx;
		width: 60rpx;
		
	}
	.logo {
		height: 300rpx;
		width: 300rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.text-area-box{
		margin-left: 100rpx;
		margin-top: 100rpx;
	}
	.text-area {
		display: flex;
		justify-content: start;
	}
	.text-area2 {
		display: flex;
		justify-content: start;
		margin-top: 50rpx;
	}
	.title-em{
		font-size: 32rpx;
		font-weight: 600;
		color: rgba(57, 57, 57, 1);
		margin: 0 20rpx;
	}

	.title {
		margin-right: 10rpx;
		font-size: 36rpx;
		color: rgba(57, 57, 57, 1);
		font-weight: 500;
	}
</style>
