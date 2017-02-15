<template>
	<div class="index-carsouse">
        <!--每个不同的字母复制ul结构-->
        <ul v-for="(index,list) in lists">
            <li>
                <h3>{{list[0]["firstLetter"]}}</h3>
            </li>
            <li v-for="(i,car) in list" @click='toCarBrandList(car["id"])'>
                <p class="img-left"><img :src='car["brandIcon"]'></p>
                <p class="text-right">{{car["brandName"]}}</p>
            </li>
        </ul>
        
    </div>
</template>

<script type="text/javascript">
	export default {

		props : ['lists'],

        methods : {
            toCarBrandList(id) {
                console.log(id)
                this.$route.router.go({name:'carbrand',params:{bid:id}})
            }
        }


	}
</script>