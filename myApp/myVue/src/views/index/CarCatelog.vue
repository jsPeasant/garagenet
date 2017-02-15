
<template>
    <div class="index-mokuairk-linetwo">
        <div class="mokuairk-linetwo-main">
            <ul>
                <li v-for="list in productCategoryAllList">
                    <a v-link="{name:list['path'],params:{id:list['params']}}">

                        <img v-if="$index==0"  src="../../assets/images/index-rmcx.png">
                        <img v-if="$index==1"  src="../../assets/images/index-kxyz.png">
                        <img v-if="$index==2"  src="../../assets/images/index-bgbj.png">
                        <img v-if="$index==3"  src="../../assets/images/index-qcjr.png">
                        <p>{{list["name"]}}</p>
                    </a>
                    
                </li>
            </ul>
            <div class="clearf"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        //props : ["productCategoryAllList"],
        data(){
            return {
                productCategoryAllList : [{'name' : '热卖车型',
                'src':'../../assets/images/index-rmcx.png',
                'path' : 'service_detail','params':'101001'},{'name' : '开信用证',
                'src':'../../assets/images/index-kxyz.png.png',
                'path' : 'service_detail','params':'101001' },{'name' : '报关保险',
                'src':'../../assets/images/index-bgbj.png',
                'path' : 'service_detail','params':'102001'},{'name' : '汽车金融',
                'src':'../../assets/images/index-qcjr.png',
                'path' : 'service_detail','params':'101003'}]
            }
        },
    }
</script>
