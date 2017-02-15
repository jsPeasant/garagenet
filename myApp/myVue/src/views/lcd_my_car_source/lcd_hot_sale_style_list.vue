<!--zm:热门车源头部筛选-->
<template>
	<div v-bind:class="{none:!isBrand}">
		<!--遮罩-->
		<div class="mask" @click="showBrand"></div>
		<!--单列车源弹窗-->
		<div class="carsource-one-col-wd">
			<!--单列模块-->
			<div class="one-col-con">
				<!--标题-->
				<div class="title-div" @click="chooseModel('all')">
					<p>全部品牌</p>
				</div>
				<!--列表-->
				<ul class="one-col-ul" id="brand">
					<li v-bind:class="{current:index==brandNum}" v-for="(index,cblist) in carBrandList" @click="chooseModel(index)"><a class="nor-a">{{cblist.brandName}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div v-bind:class="{none:!isType}">
		<!--遮罩-->
		<div class="mask" @click="showType"></div>
		<!--单列车源弹窗-->
		<div class="carsource-one-col-wd">
			<!--单列模块-->
			<div class="one-col-con">
				<!--标题-->
				<div class="title-div" @click="chooseType('all')">
					<p>全部车型</p>
				</div>
				<!--列表-->
				<ul class="one-col-ul">
					<li v-bind:class="{current:index==typeNum}" v-for="(index,cmlist) in carModelList" @click="chooseType(index)"><a class="nor-a">{{cmlist.modelName}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div v-bind:class="{none:!isEdition}">
		<!--遮罩-->
		<div class="mask" @click="showEdition"></div>
		<!--单列车源弹窗-->
		<div class="carsource-one-col-wd">
			<!--单列模块-->
			<div class="one-col-con">
				<!--标题-->
				<div class="title-div" @click="chooseEdition('all')">
					<p>全部版本</p>
				</div>
				<!--列表-->
				<ul class="one-col-ul">
					<li v-bind:class="{current:index==editionNum}" v-for="(index,celist) in carEditionList" @click="chooseEdition(index)"><a class="nor-a">{{celist.editionName}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div v-bind:class="{none:!isArea}">
		<!--遮罩-->
		<div class="mask" @click="showArea"></div>
		<!--双列车源弹窗-->
		<div class="carsource-two-col-wd">
			<!--左列-->
			<div class="left left-col-div">
				<!--列表-->
				<ul class="left-col-ul">
					<li @click="chooseArea('all')"><a class="nor-a">全部</a></li>
					<li v-bind:class="{current:index==provinceNum}" v-for="(index,rlist) in regionList" @click="chooseArea(index)"><a class="nor-a">{{rlist.province_name}}</a></li>
				</ul>
			</div>
			<!--右列-->
			<div class="right right-col-div">
				<!--列表-->
				<ul v-bind:class="[isShowCity ? 'right-col-ul':'none']">
					<li v-bind:class="{current:index==cityNum}" v-for="(index,ralist) in regionAreaList" @click="chooseCity(index)"><a class="nor-a">{{ralist.city_name}}</a></li>
				</ul>
			</div>
			<!--清浮动-->
			<div class="clearf"></div>
		</div>
	</div>
	<!--头部下拉选择nav-->
	<div class="cartype-head-nav">
		<ul>
			<!--给li加类 shang-curr是橙色向上箭头 xia-curr是橙色向下箭头-->
			<li v-bind:class="{'shang-curr':isBrand}" @click="showBrand">
				<a class="nav-div">{{choosenStyle.choosenBrandName ? choosenStyle.choosenBrandName : '全部品牌'}}</a>
			</li>
			<li v-bind:class="{'shang-curr':isType}" @click="showType">
				<a class="nav-div">{{choosenStyle.choosenTypeName ? choosenStyle.choosenTypeName : '全部车型'}}</a>
			</li>
			<li v-bind:class="{'shang-curr':isEdition}" @click="showEdition">
				<a class="nav-div">{{choosenStyle.choosenEditionName ? choosenStyle.choosenEditionName : '全部版本'}}</a>
			</li>
			<li v-bind:class="{'shang-curr':isArea}" @click="showArea">
				<a class="nav-div">{{choosenStyle.choosenAreaName ? choosenStyle.choosenAreaName : '所在地'}}</a>
			</li>
		</ul>
		<div class="clearf"></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props: ['carBrandList', 'carEditionList', 'regionList'],
		data(){
			return {
				isBrand: false,
				isType: false,
				isEdition: false,
				isArea: false,
				isChoose: false,
				isShowCity: false,
				//车型集合
				carModelList: [],
				//城市集合
				regionAreaList: [],
				//已选中的品牌、车型、版本、所在地
				choosenStyle: {
					'choosenBrandName': '',
					'choosenBrandCode': '',
					'choosenTypeName': '',
					'choosenTypeCode': '',
					'choosenEditionName': '',
					'choosenEditionCode': '',
					'choosenAreaName': '',
					'choosenProvinceCode': '',
					'choosenCityCode': ''

				},
				brandNum:-1,
				typeNum:-1,
				editionNum:-1,
				provinceNum:-1,
				cityNum:-1

			}
		},
		methods: {
			showBrand(){
				if (this.isBrand) {
					this.isBrand = false;
				} else {
					this.isBrand = true;
				}
			},
			showType(){
				if (!this.isType) {
					this.isType = true;
				} else {
					this.isType = false;
				}
			},
			showEdition(){
				if (this.isEdition) {
					this.isEdition = false;
				} else {
					this.isEdition = true;
				}
			},
			showArea(){
				if (this.isArea) {
					this.isArea = false;
				} else {
					this.isArea = true;
				}
			},
			//点击品牌,选择车型
			chooseModel(index){
				if (index == 'all') {
					this.choosenStyle.choosenBrandName = '';
					this.choosenStyle.choosenBrandCode = '';
					this.carModelList = [];
				} else {
					let myCarBrandList = this.carBrandList[index];
					this.carModelList = myCarBrandList.carModelList;
					this.choosenStyle.choosenBrandName = myCarBrandList.brandName;
					this.choosenStyle.choosenBrandCode = myCarBrandList.id;
				}
				this.brandNum = index;
				this.isBrand = false;
				this.$emit('return-style', this.choosenStyle);
			},
			//点击车型
			chooseType(index){
				if (index == 'all') {
					this.choosenStyle.choosenTypeName = '';
					this.choosenStyle.choosenTypeCode = '';
				} else {
					let myCarModelList = this.carModelList[index];
					this.choosenStyle.choosenTypeName = myCarModelList.modelName;
					this.choosenStyle.choosenTypeCode = myCarModelList.id;
				}
				this.typeNum = index;
				this.isType = false;
				this.$emit('return-style', this.choosenStyle);
			},
			//点击版本
			chooseEdition(index){
				if (index == 'all') {
					this.choosenStyle.choosenEditionName = '';
					this.choosenStyle.choosenEditionCode = '';
				} else {
					let myCarEditionList = this.carEditionList[index];
					this.choosenStyle.choosenEditionName = myCarEditionList.editionName;
					this.choosenStyle.choosenEditionCode = myCarEditionList.id;
				}
				this.editionNum = index;
				this.isEdition = false;
				this.$emit('return-style', this.choosenStyle);
			},
			//点击省份,选择地区
			chooseArea(index){
				if (index == 'all') {
					this.choosenStyle.choosenAreaName = '';
					this.choosenStyle.choosenProvinceCode = '';
					this.choosenStyle.choosenCityCode = '';
					this.regionAreaList = [];
					this.isArea = false;
					this.$emit('return-style', this.choosenStyle);
				} else {
					let myRegionList = this.regionList[index];
					this.isShowCity = true;
					this.regionAreaList = myRegionList.cities;
					this.choosenProvinceCode = myRegionList.province_code;
				}
				this.provinceNum = index;
				this.cityNum = -1;
			},
			//点击城市
			chooseCity(index){
				let myRegionAreaList = this.regionAreaList[index];
				this.choosenStyle.choosenAreaName = myRegionAreaList.city_name;
				this.choosenStyle.choosenCityCode = myRegionAreaList.city_code;
				this.cityNum = index;
				this.isArea = false;
				this.$emit('return-style', this.choosenStyle);
			}
		}
	}
</script>