<template>
	<div class="wrap" v-infinite-scroll="fechCarLists()" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="infCheck">
		<header>
			<!-- <a class="back-btn" v-link="{ name: 'carDetail', params: { id: dealerCode }}"></a> -->
			<a class="back-btn" @click="goBack" ></a>
			<h2>我的车源</h2>
		</header>
<!--加上这个类service-valuation-martop的意思是距离和下面模块中间有间隙-->
		<section class="main-section service-valuation-martop">
		
    <!--列表的内容第一块-->
        <div class="mycar-maincon-top">
            <div class="mycar-maincon-one">
                <img :src="dataObj.userAvatar">
            </div>
            <div class="mycar-maincon-two">
                <p>{{dataObj.userCompanyName}}</p>
                <p>{{dataObj.provinceName}}</p>
            </div>
        </div>
        <!--列表的内容第二块-->
        <lcd_jxs_select_popup :pinpai-arr="pinpaiArr" @return-brand-model="getBrandModel"></lcd_jxs_select_popup>
        
        <!--列表的内容第三块-->
        <div class="cartype-car-detail" style="margin-top:0px">
		  	<lcd_jxs_list :car-list-arr="carListArr"></lcd_jxs_list>
		  </div>
		  <!--底部气泡提示容器-->
		  <div class="bottom-bubble-con">
		    <!--内容-->
		  	<div class="bottom-bubble-div">
		  		<!--图片模块-->
		  		<div class="img-div">
		  			<img class="logo-img" src="../../assets/images/bubble_logo.png">
		  		</div>
		  		<!--文字模块-->
		  		<div class="text-div">
		  		  <!--使内容垂直居中的div-->
		  			<div class="tbcell-div">
		  				<p class="nor-p">平行进口车专业服务</p>
		  				<p class="nor-p">尽在车库网客户端</p>
		  			</div>
		  		</div>
		  		<!--按钮模块-->
		  		<div class="btn-div">
		  			<a class="nor-btn">立即使用</a>
		  		</div>
		  	</div>
		  </div>
		<bottom-bubble></bottom-bubble>
		</section>
	</div>
</template>

<script type="text/javascript">
	import lcd_jxs_select_popup from './lcd_jxs_select_popup'
	import lcd_jxs_list from './lcd_jxs_list'
	import BottomBubble from '../common/BottomBubble'

	//var $ = require('jquery');

	export default {
		data: function () {
		    return {
				dealerCode:this.$route.params.jxscode,
				pageNo:1,
				totalPage:2,
				busy: true,
				infCheck: false,
				dataObj:{},
				pinpaiArr:[],
				carListArr:[],
				brandName:"",
				modelName:""
			}
		},
		components : {
			lcd_jxs_select_popup,
			lcd_jxs_list,
			BottomBubble
		},
		methods : {
			goBack (){
				history.go(-1);
			},
			getBrandModel(brandName,modelName){
				this.brandName = brandName;
				this.modelName = modelName;
				this.carListArr = [];
				this.pageNo = 1;
				this.totalPage = 2;
				this.fechCarLists();
			},
			fechCarLists() {
				if(this.totalPage > this.pageNo){
					this.busy = true;
					let url = 'findDealerCarList'
					let params = {
						"app_code": "3008",
						"dealerCode":this.dealerCode,
						"userCode":"",
						"status":1,
						"pageNo":this.pageNo,
						"pageSize":20,
						"brandName":encodeURI(this.brandName),
						"modelName":encodeURI(this.modelName)
					}
					this.$http.post(url,params).then((res)=>{
						if (res.ok) {
							console.log(res);
							var a = res.json();
							console.log(a.data);
							return res.json()
						}
					}).then((data)=>{
						this.pageNo++;
		                this.totalPage = data.data.totalPage + 1;
						console.log(this.pageNo);
		                this.dataObj = data.data;
	                    this.busy = false;
	                    this.pinpaiArr = this.dataObj.carBrandList;
	                    this.carListArr = this.carListArr.concat(this.dataObj.page.list);
	                }).catch(e=>{
	                	this.busy = true;
	                	console.log(e)
	                })
	            }
			}
		},

		route : {
			data(){
				this.fechCarLists()
			},
			waitForData: true
		}
	}
</script>