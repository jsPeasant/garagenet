<!--zm:热门车源头部筛选-->
<template>
    <div v-bind:class="{none:!isStyle}">
        <!--遮罩-->
        <div class="mask" @click="showStyle"></div>
        <!--单列车源弹窗-->
        <div class="carsource-one-col-wd">
            <!--单列模块-->
            <div class="one-col-con">
                <!--标题-->
                <div class="title-div" @click="chooseStyle('all')">
                    <p>全部款式</p>
                </div>
                <!--列表-->
                <ul class="one-col-ul" id="brand">
                    <li v-bind:class="{current:index==styleNum}" v-for="(index,cblist) in carStyleList" @click="chooseStyle(index)"><a class="nor-a">{{cblist.styleName}}</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div v-bind:class="{none:!isColor}">
        <!--遮罩-->
        <div class="mask" @click="showColor"></div>
        <!--单列车源弹窗-->
        <div class="carsource-one-col-wd">
            <!--单列模块-->
            <div class="one-col-con">
                <!--标题-->
                <div class="title-div" @click="chooseColor('all')">
                    <p>全部颜色</p>
                </div>
                <!--列表-->
                <ul class="one-col-ul">
                    <li v-bind:class="{current:index==colorNum}" v-for="(index,cmlist) in colorList" @click="chooseColor(index)"><a class="nor-a">{{cmlist}}</a></li>
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
            <li v-bind:class="{'shang-curr':isStyle}" @click="showStyle">
                <a class="nav-div">{{choosenStyle.choosenStyleName ? choosenStyle.choosenStyleName : '全部款式'}}</a>
            </li>
            <li v-bind:class="{'shang-curr':isColor}" @click="showColor">
                <a class="nav-div">{{choosenStyle.choosenColor ? choosenStyle.choosenColor : '全部颜色'}}</a>
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
        props: ['carEditionList', 'carStyleList', 'colorList', 'regionList'],
        data(){
            return {
                isStyle: false,
                isColor: false,
                isEdition: false,
                isArea: false,
                isChoose: false,
                isShowCity: false,
                //城市集合
                regionAreaList: [],
                //已选中的品牌、车型、版本、所在地
                choosenStyle: {
                    'choosenStyleName': '',
                    'choosenStyleCode': '',
                    'choosenColor': '',
                    'choosenEditionName': '',
                    'choosenEditionCode': '',
                    'choosenAreaName': '',
                    'choosenProvinceCode': '',
                    'choosenCityCode': ''

                },
                styleNum:-1,
                colorNum:-1,
                editionNum:-1,
                provinceNum:-1,
                cityNum:-1

            }
        },
        methods: {
            showStyle(){
                if (this.isStyle) {
                    this.isStyle = false;
                } else {
                    this.isStyle = true;
                }
            },
            showColor(){
                if (this.isColor) {
                    this.isColor = false;
                } else {
                    this.isColor = true;
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
            //点击款式
            chooseStyle(index){
                if (index == 'all') {
                    this.choosenStyle.choosenStyleName = '';
                    this.choosenStyle.choosenStyleCode = '';
                    this.carModelList = [];
                } else {
                    let myCarStyleList = this.carStyleList[index];
                    this.choosenStyle.choosenStyleName = myCarStyleList.styleName;
                    this.choosenStyle.choosenStyleCode = myCarStyleList.id;
                }
                this.styleNum = index;
                this.isStyle = false;
                this.$emit('return-style', this.choosenStyle);
            },
            //点击颜色
            chooseColor(index){
                if (index == 'all') {
                    this.choosenStyle.choosenColor = '';
                } else {
                    let myColorList = this.colorList[index];
                    this.choosenStyle.choosenColor = myColorList;
                }
                this.colorNum = index;
                this.isColor = false;
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