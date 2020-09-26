<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" @change="changefun" @animationfinish="animationfinishfun" :current="1" :circular="true"
					 :vertical="true">
						<swiper-item v-for="(item,index) in PayVideo" :key="index">
							<view class="swiper-item uni-bg-red">

								<video :custom-cache="false" loop="true" class="video" :id="'id'+index" :enable-play-gesture="true"
								 :enable-progress-gesture="true" :controls="false" :src="item.video_path" :show-center-play-btn="false">

								</video>

							</view>
						</swiper-item>

					</swiper>
				</view>
			</view>

		</view>
		<view v-if="is_active">
			
			
			<!-- 左侧文案 -->
			<view class="left">
				<cover-view class="left_box">
					
					<cover-view class="ren" @click="shopPing">百色田东芒果(标题可链接到商品)</cover-view>
					<cover-view class="ke_context">桂七芒果，来自中国芒果之乡百色田东(该功能待完善) </cover-view>
					
				</cover-view>
			</view>
			
			<!-- <view class="left">
				<cover-view class="left_box">
					<cover-view class="ke">
						<cover-image :src="imgUrl"></cover-image>
						<cover-view> 我讲的Ps零基础教程</cover-view>
					</cover-view>
					<cover-view class="ren">@PS之光</cover-view>
					<cover-view class="ke_context">PS水印去除技巧合集来了。技能我都给 出来了，下面就看你们自己发挥了。去 水印不求人啦~ </cover-view>
					<cover-view class="auto">
						<cover-image :src="hamiguaPNG"></cover-image>
						<cover-view> 光良 童话</cover-view>
					</cover-view>
				</cover-view>
			</view> -->
			
			<!-- 右侧列表 -->
			<!-- <view class="right">
				<cover-view class="right_box  ">
					<cover-view class="top1">
						<cover-image class="avatar_img" :src="PayVideo[index].avatar_url" mode=""></cover-image>
						<cover-image class="add_img" :src="hamiguaPNG" mode=""></cover-image>
					</cover-view>
					<cover-view class="top2">
						<cover-image class="t_img" :src="mangguoPNG" mode=""></cover-image>
						<cover-view class="font_t">397</cover-view>
					</cover-view>
					<cover-view class="top2">
						<cover-image class="t_img" :src="hamiguaPNG" mode=""></cover-image>
						<cover-view class="font_t">397</cover-view>
					</cover-view>
					<cover-view class="top2">
						<cover-image class="t_img" :src="mangguoPNG" mode=""></cover-image>
						<cover-view class="font_t">397</cover-view>
					</cover-view>
					<cover-view class="top2">
						<cover-image class="t_img" :src="hamiguaPNG" mode=""></cover-image>
						<cover-view class="font_t">397</cover-view>
					</cover-view>
				</cover-view>
			</view> -->
			
		</view>

	</view>
</template>

<script>
	export default {

		data() {
			return {
				hamiguaPNG:'http://192.168.1.10:8980/js/userfiles/fileupload/202008/1299161489108729858.png',
				mangguoPNG:'http://192.168.1.10:8980/js/userfiles/fileupload/202008/1298932901905809410.png',
				imgUrl:'http://192.168.1.10:8980/js/userfiles/fileupload/202008/1295611300690604034.png',
				data: [{
					"id": 16,
					"title": "哈哈哈PS",
					"like_nums": 1,
					"user_id": 10004,
					"goods_id": 0,
					"nick_name": "测试3",
					"avatar_url": "https://himg.bdimg.com/sys/portrait/item/wise.1.c0717b7c.VAcJx2qFUqMIkq-Fqx0HUg.jpg?time=3720",
					"islive": 0,
					"live_id": 0,
					"room_id": 0,
					"online_num": 0,
					"img_path": "https://pic.rmb.bdstatic.com/7b836f461a0e7b69ed0e91941fa2133a.jpeg@s_2,w_272,h_272,q_80",
					"video_path": "https://vd2.bdstatic.com/mda-kfeakt16yicmjydw/sc/mda-kfeakt16yicmjydw.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&auth_key=1598866337-0-0-21c518f91f29893cb325d2b1cbd92d36&bcevod_channel=searchbox_feed&pd=1&pt=3",
					"distance": "1.8km"
				}, {
					"id": 38,
					"title": "清新的小女孩",
					"like_nums": 0,
					"user_id": 10003,
					"goods_id": 0,
					"nick_name": "测试2",
					"avatar_url": "https://himg.bdimg.com/sys/portrait/item/wise.1.c0717b7c.VAcJx2qFUqMIkq-Fqx0HUg.jpg?time=3720",
					"islive": 0,
					"live_id": 0,
					"room_id": 0,
					"online_num": 0,
					"img_path": "https://pic.rmb.bdstatic.com/7b836f461a0e7b69ed0e91941fa2133a.jpeg@s_2,w_272,h_272,q_80",
					"video_path": "https://vd2.bdstatic.com/mda-kgjc3ze8pqzs3jvd/v1-cae/1080p/mda-kgjc3ze8pqzs3jvd.mp4?auth_key=1598866600-0-0-d40e72c46c5770fbe2cfcd5e70202b79&bcevod_channel=searchbox_feed&pd=1&pt=3",
					"distance": "1.8km"
				}, {
					"id": 39,
					"title": "吴京",
					"like_nums": 0,
					"user_id": 10050,
					"goods_id": 10020,
					"nick_name": "ee",
					"avatar_url": "https://himg.bdimg.com/sys/portrait/item/wise.1.c0717b7c.VAcJx2qFUqMIkq-Fqx0HUg.jpg?time=3720",
					"islive": 0,
					"live_id": 0,
					"room_id": 0,
					"online_num": 0,
					"img_path": "https://pic.rmb.bdstatic.com/7b836f461a0e7b69ed0e91941fa2133a.jpeg@s_2,w_272,h_272,q_80",
					"video_path": "https://vd2.bdstatic.com/mda-kh7zyxeft3z6ecz2/v1-cae/sc/mda-kh7zyxeft3z6ecz2.mp4?auth_key=1598866684-0-0-21bc056d8706104388701b32bb0af159&bcevod_channel=searchbox_feed&pd=1&pt=3",
					"distance": "1.8km"
				}, {
					"id": 40,
					"title": "音乐",
					"like_nums": 0,
					"user_id": 10002,
					"goods_id": 0,
					"nick_name": "测试1",
					"avatar_url": "https://himg.bdimg.com/sys/portrait/item/wise.1.c0717b7c.VAcJx2qFUqMIkq-Fqx0HUg.jpg?time=3720",
					"islive": 0,
					"live_id": 0,
					"room_id": 0,
					"online_num": 0,
					"img_path": "https://pic.rmb.bdstatic.com/7b836f461a0e7b69ed0e91941fa2133a.jpeg@s_2,w_272,h_272,q_80",
					"video_path": "https://vd2.bdstatic.com/mda-kfeakt16yicmjydw/sc/mda-kfeakt16yicmjydw.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D&auth_key=1598866337-0-0-21c518f91f29893cb325d2b1cbd92d36&bcevod_channel=searchbox_feed&pd=1&pt=3",
					"distance": "1.8km"
				}, {
					"id": 41,
					"title": "好纠结",
					"like_nums": 0,
					"user_id": 10002,
					"goods_id": 10073,
					"nick_name": "测试1",
					"avatar_url": "https://himg.bdimg.com/sys/portrait/item/wise.1.c0717b7c.VAcJx2qFUqMIkq-Fqx0HUg.jpg?time=3720",
					"islive": 0,
					"live_id": 0,
					"room_id": 0,
					"online_num": 0,
					"img_path": "https://pic.rmb.bdstatic.com/7b836f461a0e7b69ed0e91941fa2133a.jpeg@s_2,w_272,h_272,q_80",
					"video_path": "https://vd4.bdstatic.com/mda-kgwsw7bsybhikxzv/v1-cae/sc/mda-kgwsw7bsybhikxzv.mp4?auth_key=1598866881-0-0-b986bf7f3bb0ab0bb80b5c8872749429&bcevod_channel=searchbox_feed&pd=1&pt=3",
					"distance": "1.8km"
				}],
				index_: 1,
				index: '1',
				is_active: true,
				active: 2,
				PayVideo: [],
				current_i: 2,
				_arr: [],
				len: 0,

			}
		},
		computed: {

		},
		props: {
			ind: {
				type: Number,
				default: 0
			},
		},
		methods: {
			shopPing(){
				uni.navigateTo({
					url:'../productDetail/productDetail'
				})
			},
			changefun(e) {
				this.is_active = false
				let current = e.detail.current
				let {
					len,
					PayVideo,
					active,
					_arr,
					t,
					index_
				} = this
				console.log(PayVideo, index_)
				let videoContext = uni.createVideoContext('id' + index_)
				videoContext.pause()

				this.PayVideo = PayVideo
			},
			animationfinishfun(e) {
				let {
					index_,
					len,
					PayVideo,
					active,
					_arr,
					t
				} = this
				let current = e.detail.current

				this.is_active = true

				PayVideo[current]['istrue'] = true
				this.PayVideo = PayVideo
				let videoContext = uni.createVideoContext('id' + index_)
				console.log(index_,  '正在播放第' + index_ +'个视频')
				videoContext.pause()
				videoContext = uni.createVideoContext('id' + current)
				videoContext.play()
				this.index_ = current
				if (PayVideo.length == len) {
					return
				}


				this.PayVideo.push(_arr[active])
				this.active += 1


			}
		},
		mounted() {
			//同步存储
			uni.setStorageSync('video', this.data);

			let ind = 1

			this.index = ind
			//同步读取
			const video = uni.getStorageSync('video');
			const len = video.length
			let b_arr = []
			let s_arr = []
			video.forEach((res, index) => {
				if (ind <= index) {
					b_arr.push(res)
				} else {
					s_arr.push(res)
				}
			})
			let _arr = b_arr.concat(s_arr.reverse())
			_arr = _arr.map(res => {
				res['istrue'] = false
				return res
			})
			_arr[0]['istrue'] = true
			const PayVideo = [
				_arr[len - 1], _arr[0], _arr[1]
			]
			this.PayVideo = PayVideo
			this._arr = _arr
			this.len = len
			this.$nextTick(function() {

				let videoContext = uni.createVideoContext('id1')
				videoContext.play()
			})


		}
	}
</script>

<style scoped lang="less">
	.circle {

		background: rgba(34, 34, 34, 0.4);

		border-radius: 50%;
		z-index: 2;
		height: 70px;
		width: 70px;
		position: fixed;
		top: 0;

		bottom: 441rpx;
		left: 31rpx;

		margin: auto;

		.red {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			z-index: 3;
			height: 35px;
			width: 35px;
		}
	}

	.swiper {
		height: 100vh;

		.swiper-item {
			height: 100vh;
			position: relative;
		}

		.uni-bg-red {
			background: red;
		}

		.uni-bg-green {
			background: green;
		}

		.uni-bg-blue {
			background: blue;
		}
	}

	.video {
		width: 100%;
		height: 100vh;
		position: relative;

	}

	.left_box {
		/* 2020/8/31改 */
		position: fixed;
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx 20rpx 0 0;
		bottom: 0;
		left: 20;
		background-color: #fff;
		color: #000;

		.ke_context {

			width: 516rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			// color: rgba(255, 255, 255, 1);
			word-break: break-all;
			word-wrap: break-word;
			white-space: pre-line;
			white-space: normal;
			text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
		}

		.ren {

			margin: 20rpx 0;
			font-size: 36rpx;
			font-family: PingFang SC;
			font-weight: bold;
			// color: rgba(255, 255, 255, 1);
			text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
		}

		.auto {
			display: flex;
			align-items: center;
			width: 100%;
			height: 60rpx;
			margin-top: 24rpx;
			opacity: 1;
			border-radius: 8rpx;
			padding-left: 10rpx;

			cover-view {
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 90px;
				text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
			}

			cover-image {
				margin-right: 10rpx;
				height: 28rpx;
				width: 26rpx;
			}
		}

		.ke {
			display: flex;
			align-items: center;
			width: 310rpx;
			height: 60rpx;
			background: rgba(0, 0, 0, 0.3);
			opacity: 1;
			border-radius: 8rpx;
			padding-left: 10rpx;

			cover-view {
				font-size: 26rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 90px;
				text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
			}

			cover-image {
				margin-right: 10rpx;
				height: 40rpx;
				width: 40rpx;
			}
		}
	}

	.H_T {
		z-index: 2;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		position: absolute;
		padding: 0 30rpx;
		background: transparent;
		justify-content: space-between;

		.back {
			height: 48rpx;
			width: 48rpx;
		}

		.search {
			height: 48rpx;
			width: 48rpx;
		}
	}

	.right_box {
		width: 100rpx;


		position: absolute;
		z-index: 2;
		bottom: 60rpx;
		right: 12rpx;
		display: flex;
		flex-direction: column;

		.top1 {
			position: relative;
			height: 124rpx;

			.avatar_img {
				width: 98rpx;
				height: 98rpx;
				border-radius: 50%;
			}

			.add_img {
				position: absolute;
				z-index: 99;
				width: 48rpx;
				height: 48rpx;
				bottom: 10rpx;
				left: 0;
				right: 0;
				margin: 0 auto;
			}
		}

		.top2 {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 37rpx;

			.t_img {
				height: 72rpx;
				width: 72rpx;
				margin-bottom: 10rpx;
			}

			.font_t {
				font-size: 26rpx;
				font-family: SF Pro Text;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);

				text-shadow: 0px 1rpx 1rpx rgba(0, 0, 0, 0.4);
				text-align: center;
			}
		}

	}
</style>
