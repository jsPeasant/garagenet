<template>
	<section>
		<search :adv-loop-list="advLoopList"></search>
		<car-catelog :product-category-all-list="productCategoryAllList"></car-catelog>
		<list v-bind:lists="lists"></list>
	</section>
	<footer-index :footer-num="footerNum"></footer-index>
</template>

<script type="text/javascript">
	import Search from './Search'
	import CarCatelog from './CarCatelog'
	import List from './List'
	import FooterIndex from './FooterIndex'
	
	export default {
		data(){
			return {
				lists : '',
				productCategoryAllList : '',
				advLoopList : '',
				footerNum : 0
			}
		},
		components : {
			Search,
			CarCatelog,
			List,
			FooterIndex
		},
		methods : {
			fechCarLists() {
				let url = 'index'
				let params = {

				}
				this.$http.post(url,params).then((res)=>{
					if (res.ok) {
						return res.json()
					}
				}).then((data)=>{
					let  carBrandList;
					let  productCategoryAllList;
					carBrandList=this.reintegrateCarBrandList(data.data.carBrandList);
					console.log(data)
					carBrandList = this.sortCarBrandList(carBrandList)
					console.log(carBrandList)
					this.lists = carBrandList
					this.productCategoryAllList=data.data.productCategoryAllList

					this.advLoopList = data.data.advLoopList
				}).catch(e=>{console.log(e)})
			},
			sortCarBrandList(brandList){
				if (typeof brandList === "object"){
					let keyArray = Object.keys(brandList).sort();
					let carBrandList=[];
					let i,key;
					for (i=0;key=keyArray[i++];) {
						carBrandList.push(brandList[key]);
					}


					return carBrandList;
				}
			},
			reintegrateCarBrandList(brandList){
				if (brandList instanceof Array && brandList.length){
					let newBrandList={};
					let i,brand ;

					for (i=0;brand=brandList[i++];) {
						if (!newBrandList[brand["firstLetter"]]){
							newBrandList[brand["firstLetter"]]=[];
							newBrandList[brand["firstLetter"]].push(brand);
						}
						else{
							newBrandList[brand["firstLetter"]].push(brand)
						}
					}

					return newBrandList

				}
			} 
		},

		route : {
			data(){
				this.fechCarLists()

			},
			waitForData: true
		},

	}
</script>