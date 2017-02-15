<template>
<div v-infinite-scroll="fetchCarAllList()" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="infCheck">
	<header>
		<a class="back-btn" @click="goBack"></a>
		<h2>{{modelName}}</h2>
	</header>
	<section class="main-section">
		<my-sale-style :car-edition-list="carEditionList" :car-style-list="carStyleList" :color-list="colorList" :region-list="regionList" @return-style="getReturnStyle"></my-sale-style>
		<!--车辆内容-->
		<div class="cartype-car-detail">
			<lcd_jxs_list :car-list-arr="carListArr"></lcd_jxs_list>
		</div>
		<bottom-bubble></bottom-bubble>
	</section>
</div>
</template>

<script type="text/javascript">
	import mySaleStyle from './lcd_my_car_style_list'
	import lcd_jxs_list from './lcd_jxs_list'
	import BottomBubble from '../common/BottomBubble'

	export default{
		data(){
			return{
				chosenStyleObj:{
                    'choosenStyleCode': '',
                    'choosenColor': '',
                    'choosenEditionCode': '',
                    'choosenProvinceCode': '',
                    'choosenCityCode': ''
				},
				pageNo:1,
				totalPage:2,
				busy: true,
				infCheck: false,
				carListArr:[],
				brandId : this.$route.params.brand_id,
				modelId : this.$route.params.model_id,
				modelName : this.$route.params.model_name,
				carEditionList:[],//版本
				carStyleList:[],//款式
				colorList:[],//颜色
				regionList:[]//地区
			}
		},
		components:{
			mySaleStyle,
			lcd_jxs_list,
			BottomBubble
		},
		methods:{
			goBack (){
				history.go(-1);
			},
			fetchMySaleStyle() {
				let url = 'findStyleList';
				let params = {
					"brandId":this.brandId,
					"modelId":this.modelId,
					"carType":2
				};
				this.$http.post(url,params).then((res)=>{
					if (res.ok) {
						console.log(res.json());
						return res.json()
					}
				}).then((data)=>{
					this.carEditionList = data.data.carEditionList;
					this.carStyleList = data.data.carStyleList;
					this.colorList = data.data.colorList;
					this.regionList = data.data.regionList;
					this.fetchCarAllList();
				}).catch(e=>{console.log(e)})
			},
			fetchCarAllList(){
				if(this.totalPage > this.pageNo){
		            this.busy = true;
					let url = 'findCarAllList';
					let params = {
						"brandId":this.brandId,
						"modelId":this.modelId,
						"carType":2,
						"pageNo":this.pageNo,
						"pageSize":20,
						"editionId":this.chosenStyleObj.choosenEditionCode,
						"cityCode":this.chosenStyleObj.choosenCityCode,
						"provinceCode":this.chosenStyleObj.choosenProvinceCode,
						"styleId":this.chosenStyleObj.choosenStyleCode,
						"color":encodeURI(this.chosenStyleObj.choosenColor)
					};
					this.$http.post(url, params).then((res)=>{
						if (res.ok) {
							return res.json()
						}
					}).then((data)=>{
						console.log(data.data);
						this.pageNo++;
		                this.busy = false;
		                this.totalPage = data.data.totalPage + 1;
		                console.log(this.pageNo);
		                this.carListArr = this.carListArr.concat(data.data.list);
						console.log(this.carListArr);

					}).catch(e=>{
		                this.busy = true;
		                console.log(e)
		            })
				}

			},
			getReturnStyle(params){
				this.chosenStyleObj.choosenStyleCode = params.choosenStyleCode;
				this.chosenStyleObj.choosenColor = params.choosenColor;
				this.chosenStyleObj.choosenEditionCode = params.choosenEditionCode;
				this.chosenStyleObj.choosenProvinceCode = params.choosenProvinceCode;
				this.chosenStyleObj.choosenCityCode = params.choosenCityCode;
				this.carListArr = [];
				this.pageNo = 1;
				this.totalPage = 2;
				console.info(params);
				this.fetchCarAllList();
			}
		},
		route:{
			data(){
				this.fetchMySaleStyle()
			},
			waitForData: true
		}
	}
</script>