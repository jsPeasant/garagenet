<template>
    <!-- 列表区域整块-->
    <div class="service-valuation" v-for="(index,list) in commentsList">
            <div class="service-valuation-one">
                <h3 class="left">{{list["nickname"]}}</h3>
                <span class="right">{{list["stringCreated"]}}</span>
                <div class="clearf"></div>
            </div>
            <div class="service-valuation-two">
                <img v-if='list["overallVotes"] >=1' src="../../assets/images/star-checked.png">
                <img v-else src="../../assets/images/star.png">
                <img v-if='list["overallVotes"] >=2' src="../../assets/images/star-checked.png">
                <img v-else src="../../assets/images/star.png">
                <img v-if='list["overallVotes"] >=3'src="../../assets/images/star-checked.png">
                <img v-else src="../../assets/images/star.png">
                <img v-if='list["overallVotes"] >=4'src="../../assets/images/star-checked.png">
                <img v-else src="../../assets/images/star.png">
                <img v-if='list["overallVotes"] >=5'src="../../assets/images/star-checked.png">
                <img v-else src="../../assets/images/star.png">

            </div>
            <div class="service-valuation-three">
                <p>{{list["content"]}}</p>
            </div>
        </div>
</template>
<script type="text/javascript">
    export default{
        props : ['commentsList'],
        data(){
            return{

            }
        },
        components:{

        },
        methods:{

        }
    }
</script>
