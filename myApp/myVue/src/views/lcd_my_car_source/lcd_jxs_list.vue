<template>
	<ul>
		<li v-for="(index,item) in carListArr" @click="goCarDetail(item.carCode)">
			<div class="car-box">
				<div class="car-name">{{item.title}}</div>
				<div class="car-sign">
					<span>{{item.carType == 1 ? '海外车源' : '国内车源'}} ｜ {{item.color}}</span>
				</div>
				<div class="car-con">
					<span class="con-blue">亮点配置：</span>
					<span>{{item.detail}}</span>
				</div>
				<div class="car-jxs">
					<p>{{item.companyName}}</p>
				</div>
				<!--定位-->
				<div class="car-price">
					<div>¥ <span>{{item.showPrice}}</span></div>
					<div class="price-refer">参考价</div>
				</div>
				<!--日期-->
				<div class="car-date">{{item.stringGreated}}</div>
			</div>
		</li>
	</ul>
</template>

<script type="text/javascript">


export default{
	data: function() {
	    return {
	    	// carTypeArr:["海外车源","国内车源"]
	    }
	},
	computed: {
		
	},
	props: [
		'carListArr'
	],
	methods : {
		goCarDetail(carCode){
			this.$route.router.go({name:'carDetail', params: {id:carCode}})
		}
	},
	watch: {
	    
	}
}
</script>