<template>		
<header>
	<a class="back-btn" @click="back()"></a>
	<h2>汽车品牌</h2>	
</header>
<section class="main-section brand-sec" style="margin-top:46px">
<brand-list v-bind:brandlist="brandlist" v-bind:brandid="brandid"></brand-list>
</section>
</template>

<script type="text/javascript">
import brandList from './List'
export default({
	data(){
			return {
				brandlist:[],
				brandid:this.$route.params.bid
			}
		},	
	components:{
		brandList,		
	},
	methods:{
		back:function(){
			history.go(-1);
		},
		fetchCarbrandList:function(){
			let url='fetchCarbrandList';
		
			let params={
				"app_code": "",
				"id":this.$route.params.bid,
				"userCode":""
			}
			this.$http.post(url,params).then((res)=>{
				if (res.ok) {
					console.log(res.json());
					return res.json()
				}
			}).then((data)=>{
				console.log(data);
				this.brandlist =data.data;
				
			}).catch(e=>{console.log(e)})
		}
	},
	route : {
		data(){
			this.fetchCarbrandList()
		},
		waitForData: true
	}
});


</script>