<template>
	<footer>
	    <div class="index-footer">
	        <ul>
	            <!--选中加上类footer-checked-->
	            <li v-for="(index,msg) in msgs" v-bind:class="{'footer-checked':index==footerNum}" @click="beChecked(index)">
	            		

	                	<span v-bind:class="msg.className"></span>
	                	<p>{{ msg.name }}</p>
	                
	            </li>
	            
	            <div class="clearf"></div>
	         </ul>
	     </div>
	 </footer>
</template>

<script type="text/javascript">
	export default {
		props:['footerNum'],
		data() {
			return {
				msgs : [{
					"name" : "车源",
					"className" : "car-left"
				},{
					"name" : "服务",
					"className" : "all-right"
				}],
				path : [{name : 'index'},{name:'service_list'}]
			}
		},
		methods : {
			beChecked(i){
				// this.footerNum=i
				this.$route.router.go(this.path[i])
			}
		}
	}
</script>