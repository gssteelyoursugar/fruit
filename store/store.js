import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const screendata = {
	// 存储筛选出来的数据
	screenarr:[]
}

// 数据仓库
const state = {
	screendata,
	history: uni.getStorageSync('history') ? uni.getStorageSync('history') : []
}

export default new Vuex.Store({
	state,
	// 同步存储
	mutations:{
		screenmuta(state,listdata){
			console.log(listdata)
			// 存储到数据仓库
			state.screendata = {
				screenarr:listdata
			}
		},
		saveSearch (state,data) {
			let arr = state.history
			arr.unshift(data.data)
			state.history = arr
			uni.setStorageSync('history',arr)
		},
		clearSearch (state,data) {
			console.log(data)
			let list = state.history
			list = []
			state.history = list
			uni.removeStorageSync('history')
			uni.showToast({
				title: '已清除'
			})
		},
		
	}
})