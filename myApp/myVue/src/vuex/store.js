import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 需要维护的状态
const state = {
  num : 0,
  title : '',
  li : [],
  fetchData : {}
};

const mutations = {
	INIT_STORE(state,data){
		//console.log(data)
		state.num = data.num,
		state.title = data.title,
		state.li = data.li
	},
	NEW_LI(state){
		// console.log(state)
		// console.log(111)
		var li = {
			name : "酒店订单"
		}
		state.li.push(li)
		// console.log(state.li)
		// console.log(state.li.length)
	},
	CHANGE_NUM(state,msg,obj){
		//alert(obj.getAttribute("num"))
		state.num = msg
	},
	CHANGE_TITLE(state){
		state.title = "他的预定"
	},
	FETCHINGDATA_SUCCESS(state,data){
		state.fetchData = data;
	}
}

export default new Vuex.Store({
  state,
  mutations
});