<template>
    <div>
        <div class="fuwu-index-one"  v-for="(index,list) in serverlist">
            <!-- <img v-bind:src="list.icon"> -->
            <p class="fuwu-name">{{list.name}}</p>
            <ul>
                <li v-for="(i,item) in list.productCategoriesList" >
                <p v-if="item.code != '104001'" @click="linkto(item.code)">
                   <img v-bind:src="item.icon">
                   <span>{{item.name}}</span> 
                </p>
                <a v-if="item.code == '104001'" href="https://www.chekunet.com/web/home/downloadApp.html" style="display:block;color:#333;">
                   <img v-bind:src="item.icon">
                   <span>{{item.name}}（点击下载app）</span> 
                </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props : ['serverlist'],
    methods:{
        linkto(serviceCode){
            this.$route.router.go({name:'service_detail', params: {id:serviceCode}})
        },
    }
  }
</script>