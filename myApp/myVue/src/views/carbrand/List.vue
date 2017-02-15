<template>
	<div class="brand-list-con" id="china">
		  	<!--列表-->
		  	<ul class="brand-list-ul">
		  		<li v-for="(index,list) in brandlist.domesticModelList">
		  			<!--内容容器-->
		  			<div class="content-con" @click="changeroute(list.id,list.modelName)">
		  				<!--图片模块-->
		  				<div class="left img-div">
		  					<div class="tbcell-div">
		  						<img class="brand-car-img" v-bind:src="list.modelIcon">
		  					</div>
		  				</div>
		  				<!--内容模块-->
		  				<div class="right content-div">
		  					<p class="brand-name-p">{{list.modelName}}</p>
		  					<p class="brand-pirce-p">￥{{list.priceRange}}</p>
		  				</div>
		  				<!--清浮动-->
		  				<div class="clearf"></div>
		  			</div>
		  		</li>
		  		
        </ul>
        
    </div>
</template>

<script type="text/javascript">
	export default {
		props : ['brandlist','brandid'],
		methods:{
			changeroute(listid,listname){
				let bid=this.brandid;
				this.$route.router.go({name:'lcd_my_find_car_all', params: { brand_id:bid,model_id:listid,model_name:listname }})
			}
		}
	}
</script>