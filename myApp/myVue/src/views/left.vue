	<template>
		<div class="right-column-con left-index">
			
			<div class="nation-air-order-nav">
				<div class="nav-title">
					<p @click="changeTitle($event)">{{ getTitle }}</p> 
				</div>
				<ul>
				 
					<li v-for="(index,item) in getLi" @click="changeNum($index,$event)" num="{{index}}"  class={{index==getNum?'changeRed':""}}>{{ item.name }}{{getNum}}</li>
					
					<li><a>{{ moduleName }}</a></li>
				</ul>

				<input type="button"  @click="newLi" value="ADD"/>
				<input type="button" name="button" @click="fetchData" value="FETCHDATA">
			</div>
		</div>
	</template>

	<script type="text/javascript">
		// import {newLi,changeNum,changeTitle,fetchData} from '../vuex/actions';
		// import {getNum,getTitle,getLi,getFetchData} from '../vuex/getters';

		// // console.log(getLi)
		// // console.log("getLi")

		// export default {
		// 	props : ['num'],
		// 	data() {
		// 		return {
		// 			moduleName : "增值服务订单",
		// 			getNumdd : 2
		// 		}
		// 	},
		// 	// computed : {
		// 	// 	thisnum : function () {
		// 	// 		alert(this.num)
		// 	// 		return this.num
		// 	// 	}
		// 	// },
		// 	vuex : {
		// 		getters : {
		// 			getNum,
		// 			getTitle,
		// 			getLi,
		// 			getFetchData
		// 		},
		// 		actions : {
		// 			newLi,
		// 			changeNum,
		// 			changeTitle,
		// 			fetchData
		// 		}
		// 	},

		// 	methods : {
		// 		changeTitle(event){
		// 			//alert(event.target.tagName);
		// 			this.changeTitle();
		// 		},
		// 		changeNum(msg,event){
		// 			// alert(event.target)
		// 			// alert(event.target.getAttribute("num"))
		// 			this.changeNum(msg,event.target);
		// 		},

		// 		newLi() {
		// 			this.newLi();
		// 		},

		// 		fetchDatas(){
		// 			let url = "flightListSearch";
		// 			let body = {
		// 				"userID": "",
		// 				"pageNo": "1",
		// 				"pageSize": "10",
		// 				"orderTimeStart": "",
		// 				"orderTimeEnd": "",
		// 				"originCode": "",
		// 				"destCode": "",
		// 				"departureDateStart": "",
		// 				"departureDateEnd": "",
		// 				"orderStatus": "",
		// 				"firstName": "",
		// 				"lastName": "",
		// 				"tktNo": "",
		// 				"language": "CN"
		// 			}
		// 			// let params={
		// 			// 	"headers": {
		// 			// 		"content-type": "application/json"
		// 			// 	},
		// 			// 	"method": "POST",
		// 			// 	"body": JSON.stringify(body)
		// 			// }
		// 			this.fetchData(url, JSON.stringify(body));
		// 		}

		// 	}

		//}
		export default {
			data() {
				return {
					moduleName : "增值服务订单",
					getNum : 0,
					getLi : [{name : "我的订单"},{name:"国际机票订单"}],
					getTitle : "我的预定"

				}
			},
			methods : {
				changeTitle(event){
					this.getTitle = '他的预定'
				},
				changeNum(msg,event){
					this.getNum=msg;
				},
				newLi(){
					var li = {
						name : "酒店订单"
					}
					this.getLi.push(li)
				},
				fetchData(){
					let url = "flightListSearch";
					let body = {
						"userID": "",
						"pageNo": "1",
						"pageSize": "10",
						"orderTimeStart": "",
						"orderTimeEnd": "",
						"originCode": "",
						"destCode": "",
						"departureDateStart": "",
						"departureDateEnd": "",
						"orderStatus": "",
						"firstName": "",
						"lastName": "",
						"tktNo": "",
						"language": "CN"
					}
					this.$http.post(url,body).then((data)=>{
						console.log(data);
					})
				}
			}
		}
	</script>
	<style>
	.changeRed{
		color: red
	}
	</style>