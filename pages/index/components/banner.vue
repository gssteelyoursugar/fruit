<template>
	<view>
		<view class="tui-header-banner" >
			<view class="tui-banner-bg">
				<!-- <view class="tui-primary-bg tui-route-left"></view>
				<view class="tui-primary-bg tui-route-right"></view> -->
				<image src="../../../static/images/bage@3x.png" class="tui-my-bg bgimg1" mode="aspectFill"></image>
				<view class="tui-banner-box">
					<swiper
						:indicator-dots="true"
						:autoplay="true"
						:interval="5000"
						:duration="150"
						class="tui-banner-swiper"
						:circular="true"
						indicator-color="rgba(255, 255, 255, 0.8)"
						indicator-active-color="#ff7129"
					>
						<swiper-item v-for="(item, index) in banner" :key="index" @tap.stop="detail">
							<image :src="item.url"  class="tui-slide-image" mode="scaleToFill" />
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props:["banner"],
		data() {
			return {
				// url:'http://192.168.1.10:8980/'
			}
		},
		methods: {
			detail(){
				console.log('点击轮播')
			}
			
		}
	}
</script>

<style scoped>
.tui-header-banner {
		/* padding-top: 187rpx; */
		box-sizing: border-box;
		/* background: #00ac3f; */
	}
	.tui-banner-bg {
		display: flex;
		/* height: 180rpx; */
		/* background-color: #00ac3f; */
		position: relative;
		
		
	}
	.bgimg1{
	    position: relative;
	    display: flex;
	    left: 0;
	    width:100%;
	    height:300rpx;
	    zoom: 1;
	    background-color: #f7f7f7;
	    background-size: cover;
	    -webkit-background-size: cover;
	    -o-background-size: cover;
	    background-position: center 0;
	}
	.tui-primary-bg {
		width: 50%;
		display: inline-block;
		height: 240rpx;
		border: 1px solid transparent;
		position: relative;
		z-index: 1;
		background-color: #0EC13A;
	}
	.tui-route-left {
		transform: skewY(8deg);
	}
	.tui-route-right {
		transform: skewY(-8deg);
	}
	.tui-banner-box {
		width: 100%;
		padding: 0;
		box-sizing: border-box;
		position: absolute;
		/* overflow: hidden; */
		z-index: 99;
		bottom: -190rpx;
		left: 0;
	}
	.tui-banner-swiper {
		width: 100%;
		height: 280rpx;
		border-radius: 12rpx;
		overflow: hidden;
		transform: translateY(0);
		/* box-shadow:10px -100px 10px #000 inset; */
		
	}
	.tui-slide-image {
		width: 100%;
		height: 280rpx;
		display: block;
		/* border-top: 10rpx solid #FF0000; */
		/* box-shadow:10px -100px 10px #0 inset; */
		
		
		
	}
	/* #ifndef MP-WEIXIN */
	>>> .tui-banner-swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background-color: #FF5926;
		justify-content: space-between;
	}
	
	>>> .tui-banner-swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background-color: #fff;
		border-radius: 16rpx;
		overflow: hidden;
	}
	
	>>> .tui-banner-swiper .uni-swiper-dot-active::before {
		background-color: #FF5926;
	}
	
	>>> .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		background-color: #FF5926;
		width: 16rpx;
	}
	/* #endif */
</style>
