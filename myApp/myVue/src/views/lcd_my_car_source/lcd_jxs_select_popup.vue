<template>
	<!-- 品牌选择弹窗 -->
	<div :class="{none:!isPinpai}">
		<div class="mask" @click="showPinpai"></div>
	    <!--单列车源弹窗-->
	    <div class="carsource-one-col-wd" :style="pinpaiStyle">
	    	<!--单列模块-->
	    	<div class="one-col-con">
				<!--标题-->
				<div class="title-div" @click="choosePinpai('all')">
					<p>品牌</p>
				</div>
	    		<!--列表-->
	    		<ul class="one-col-ul">
	    			<li v-for="(index,item) in pinpaiArr" :class="{current:index==pinpaiIndex}" @click="choosePinpai(index)">
		    			<a class="nor-a">{{item.brandName}}</a>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
    </div>

	<!-- 车型选择弹窗 -->
    <div :class="{none:!isModel}">
		<div class="mask" @click="showModel"></div>
	    <!--单列车源弹窗-->
	    <div class="carsource-one-col-wd" :style="modelStyle">
	    	<!--单列模块-->
	    	<div class="one-col-con">
				<!--标题-->
				<div class="title-div" @click="chooseModel('all')">
					<p>车型</p>
				</div>
	    		<!--列表-->
	    		<ul class="one-col-ul">
	    			<li v-for="(index,item) in modelListArr" :class="{current:index==modelIndex}" @click="chooseModel(index)">
		    			<a class="nor-a">{{item.modelName}}</a>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
    </div>

    <!-- 下拉列表触发按钮 -->
    <div id="lcd_select_list_btn" class="mycar-maincon-center">
        <ul>
            <!-- 下拉加上类xiala-checked -->
            <!-- 品牌弹窗触发按钮 -->
            <li v-bind:class="{'xiala-checked':isPinpai}" @click="showPinpai">
                <span>
	                {{brandNameChosen ? brandNameChosen : '品牌'}}
                </span>
            </li>
            <!-- 车型弹窗触发按钮 -->
            <li v-bind:class="{'xiala-checked':isModel}" @click="showModel">
                <span>
	                {{modelChosen ? modelChosen : '车型'}}
                </span>
            </li>
        </ul>
        <div class="clearf"></div>
    </div>
</template>

<script type="text/javascript">

//var $ = require('jquery');

export default{
	data: function() {
	    return {
	    	isPinpai: false,
	    	isModel: false,
	    	pinpaiIndex:0,
	    	modelIndex:0,
			listOffsetTop:0,
	    	brandNameChosen:"",
	    	modelChosen:"",
	    	modelListArr:""
	    }
	},
	computed: {
		pinpaiStyle: function () {
			return {
		        top: this.listOffsetTop + 'px'
		    }
		},
		modelStyle: function () {
			return {
		        top: this.listOffsetTop + 'px'
		    }
		}
	},
	props: [
		'pinpaiArr'
	],
	methods : {
		// 品牌弹窗显示或隐藏并定位
		showPinpai(){
			let listBtn = document.querySelector("#lcd_select_list_btn");
	        this.listOffsetTop = listBtn.offsetTop + listBtn.offsetHeight - document.body.scrollTop;
            this.isPinpai = !this.isPinpai;
        },
        // 车型弹窗显示或隐藏并定位
        showModel(){
			let listBtn = document.querySelector("#lcd_select_list_btn");
	        this.listOffsetTop = listBtn.offsetTop + listBtn.offsetHeight - document.body.scrollTop;
            this.isModel = !this.isModel;
        },
        // 点击品牌按钮
        choosePinpai(index){
            if (index == 'all') {
                this.brandNameChosen = '';
                this.modelChosen = '';
                this.modelListArr = [];
            } else {
                let carBrandObj = this.pinpaiArr[index];
                this.brandNameChosen = carBrandObj.brandName;
                this.modelChosen = '';
                this.modelListArr = carBrandObj.carModelList;
            }
            this.pinpaiIndex = index;
            this.isPinpai = false;
            this.$emit('return-brand-model', this.brandNameChosen, "");
        },
        // 点击车型按钮
        chooseModel(index){
            if (index == 'all') {
                this.modelChosen = '';
            } else {
                let carModelObj = this.modelListArr[index];
                this.modelChosen = carModelObj.modelName;
            }
            this.modelIndex = index;
            this.isModel = false;
            this.$emit('return-brand-model', this.brandNameChosen, this.modelChosen);
        }
	},
	watch: {
	    'isPinpai': function (val, oldVal) {
	    	if(val){
				document.querySelector("body").style.overflow = "hidden";
	    	}else {
	    		document.querySelector("body").style.overflow = "auto";
	    	}
	    },
	    'isModel': function (val, oldVal) {
	    	if(val){
				document.querySelector("body").style.overflow = "hidden";
	    	}else {
	    		document.querySelector("body").style.overflow = "auto";
	    	}
	    },
	    'listOffsetTop':function (val, oldVal) {
	    	console.log(val);
	    }
	}
}
</script>