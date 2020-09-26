<template>
	<view>
		<view class="tui-paddingTop">
			<tui-list-cell   unlined :hover="false" >
				<view class="tui-title">
					WIFI下自动播放视频
					<switch class="tui-switch" color="rgba(0, 197, 42, 1)" @change="switchChange( $event)"></switch>
				</view>
			</tui-list-cell>
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
			switchChange(e){
				console.log(e.detail.value)
				
			}
			
		}
	}
</script>

<style>
	page {
		background-color: rgba(245, 245, 245, 1);
	}
	.tui-paddingTop{
		padding-top: 10rpx;
	}
	.tui-title {
		width: 100%;
		padding-left: 20rpx;
		box-sizing: border-box;
		
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tui-switch {
		transform: scale(0.8);
		transform-origin: 100% center;
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
</style>
