<template>
<div v-infinite-scroll="fetchCarAllList()" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="infCheck">
	<header>
		<a class="back-btn" @click="goBack"></a>
		<h2>热卖车型</h2>
	</header>
	<section class="main-section">
		<hot-sale-style :car-brand-list="carBrandList" :car-edition-list="carEditionList" :region-list="regionList" @return-style="getReturnStyle"></hot-sale-style>
		<!--车辆内容-->
		<div class="cartype-car-detail">
			<lcd_jxs_list :car-list-arr="carListArr"></lcd_jxs_list>
		</div>
		<bottom-bubble></bottom-bubble>
	</section>
</div>
</template>

<script type="text/javascript">
	import hotSaleStyle from './lcd_hot_sale_style_list'
	import lcd_jxs_list from './lcd_jxs_list'
	import BottomBubble from '../common/BottomBubble'

export default{
	data(){
		return{
			chosenStyleObj:{
				'choosenBrandCode': '',
				'choosenTypeCode': '',
				'choosenEditionCode': '',
				'choosenProvinceCode': '',
				'choosenCityCode': ''
			},
			pageNo:1,
			totalPage:2,
			busy: true,
			infCheck: false,
			carListArr:[],
			carBrandList:[],//品牌和车型
			carEditionList:[],//版本
			regionList:[]//地区
		}
	},
	components:{
		hotSaleStyle,
		lcd_jxs_list,
		BottomBubble
	},
	methods:{
		goBack (){
			history.go(-1);
		},
		fetchHotSaleStyle() {
			let url = 'findBrandModelList';
			let params = {
				"isCommend":1,
				"carType":0
			};
			this.$http.post(url,params).then((res)=>{
				if (res.ok) {
					return res.json()
				}
			}).then((data)=>{
				console.log(data.data);
				this.carBrandList = data.data.carBrandList;
				this.carEditionList = data.data.carEditionList;
				this.regionList = data.data.regionList;
				this.fetchCarAllList();
			}).catch(e=>{console.log(e)})
		},
		fetchCarAllList(){
			if(this.totalPage > this.pageNo){
				this.busy = true;
				let url = 'findCarAllList';
				let params = {
					"isCommend":1,
					"carType":0,
					"modelId":this.chosenStyleObj.choosenTypeCode,
					"brandId":this.chosenStyleObj.choosenBrandCode,
					"pageNo":this.pageNo,
					"pageSize":20,
					"editionId":this.chosenStyleObj.choosenEditionCode,
					"cityCode":this.chosenStyleObj.choosenCityCode,
					"provinceCode":this.chosenStyleObj.choosenProvinceCode
				};
				this.$http.post(url,params).then((res)=>{
					if (res.ok) {
						return res.json()
					}
				}).then((data)=>{
					this.pageNo++;
	                this.busy = false;
	                this.totalPage = data.data.totalPage + 1;
	                console.log(this.pageNo);
	                this.carListArr = this.carListArr.concat(data.data.list);
					console.log(data.data);

				}).catch(e=>{
	                this.busy = true;
	                console.log(e)
	            })
			}

		},
		getReturnStyle(params){
			this.chosenStyleObj.choosenBrandCode = params.choosenBrandCode;
			this.chosenStyleObj.choosenTypeCode = params.choosenTypeCode;
			this.chosenStyleObj.choosenEditionCode = params.choosenEditionCode;
			this.chosenStyleObj.choosenProvinceCode = params.choosenProvinceCode;
			this.chosenStyleObj.choosenCityCode = params.choosenCityCode;
			this.carListArr = [];
			this.pageNo = 1;
			this.totalPage = 2;
			this.fetchCarAllList();
			console.info(params);
		}
	},
	route:{
		data(){
			this.fetchHotSaleStyle()
		},
		waitForData: true
	}
}
</script>