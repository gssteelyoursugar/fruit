<template>
	<view>
		<tui-list-view title=" ">
			<tui-list-cell :lineLeft="false" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/selection1.png" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">圈果服务运营时间</view>
							<view class="tui-msg-content">圈妹在线时间08:30-18:00！</view>
						</view>
					</view>
					<!-- <view class="tui-msg-right">
						<view class="tui-msg-time">10:22</view>
						<tui-badge type="danger" class="tui-badge">9</tui-badge>
					</view> -->
				</view>
			</tui-list-cell>
			<tui-list-cell :lineLeft="false" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/selection1.png" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">物流通知</view>
							<view class="tui-msg-content">您的订单已配送完成，欢迎再次购买。</view>
						</view>
					</view>
					<!-- <view class="tui-msg-right">
						<view class="tui-msg-time">10:22</view>
						<tui-badge type="danger" class="tui-badge">9</tui-badge>
					</view> -->
				</view>
			</tui-list-cell>
		
			
		</tui-list-view>
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
.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-ml-auto {
		margin-left: auto;
	}

	.tui-right {
		margin-left: auto;
		margin-right: 34rpx;
		font-size: 26rpx;
		color: #999;
	}

	.tui-logo {
		height: 52rpx;
		width: 52rpx;
		flex-shrink: 0;
	}

	.tui-flex {
		display: flex;
		align-items: center;
	}

	.tui-msg-box {
		display: flex;
		align-items: center;
	}

	.tui-msg-pic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: block;
		margin-right: 24rpx;
		flex-shrink: 0;
	}

	.tui-msg-item {
		max-width: 500rpx;
		min-height: 80rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34rpx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26rpx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 120rpx;
		height: 88rpx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-right-dot {
		height: 76rpx !important;
		padding-bottom: 10rpx !important;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #9397a4;
	}
</style>
