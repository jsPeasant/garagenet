<template>
    <div v-infinite-scroll="fetchServiceComments()" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="infCheck">
        <header>
            <a class="back-btn" @click="back"></a>
            <h2 v-if="code == '103002' || code == '103003'">服务介绍</h2>
            <ul v-else class="header-tab">
                <!--选中加上类tab-checked-->
                <li v-bind:class="{'tab-checked' : isDetail}" @click="showDetail">
                    <span>服务介绍</span>
                </li>
                <li v-bind:class="{'tab-checked' : isComment}" @click="showComment">
                    <span>服务评价</span>
                </li>
            </ul>
            <div class="clearf"></div>
        </header>
        <section class="main-section" v-bind:class="{'service-valuation-martop' : isComment}">
            <div v-bind:class="{'none' : isComment}" class="main-detail">
                {{{detail}}}
            </div>
            <service-comment :comments-list="commentsList" v-if="isComment && !isNoData"></service-comment>
            <div v-if="isComment && isNoData" class="main-comment">
                <p>
                    <img src="../../assets/images/nodata.png">
                </p>
                <div class="main-comment-text">
                    抱歉,暂无数据
                </div>
            </div>
            <bottom-bubble></bottom-bubble>
        </section>
    </div>
</template>
<script type="text/javascript">
    import ServiceComment from './ServiceComment'
    import BottomBubble from '../common/BottomBubble'
    export default{
        data(){
            return{
                detail: '',//服务详情
                commentsList:[],//服务评价
                isDetail: true,
                isComment: false,
                code : this.$route.params.id,
                pageNo:1,
                busy:true,
                infCheck:false,
                totalPage:1,
                isNoData:false
            }
        },
        components:{
            ServiceComment,
            BottomBubble
        },
        methods:{
            back(){
                history.go(-1);
            },
            showDetail(){
                this.isDetail = true;
                this.isComment = false;
            },
            showComment(){
                this.isDetail = false;
                this.isComment = true;
                if(!this.commentsList[0]){
                    this.$route = this.fetchServiceComments();
                }
            },
            fetchServiceDetail() {
				let url = 'serviceDetail';
                let params = {
                    "code":this.code
                };
                this.$http.post(url,params).then((res)=>{
					if (res.ok) {
						return res.json()
					}
				}).then((data)=>{
                    this.detail = data.data.productProfileEntity.h5Detail;
				}).catch(e=>{console.log(e)})
			},
            fetchServiceComments() {
                if(this.isComment && this.pageNo <= this.totalPage){
                    this.busy = true;
                    let url = 'serviceComment';
                    let params = {
                        "orderType":this.code,
                        "pageNo":this.pageNo,
                         "pageSize":20
                    };
                    this.$http.post(url,params).then((res)=>{
                        if (res.ok) {
                            return res.json()
                        }
                    }).then((data)=>{
                        this.pageNo++;
                        this.totalPage = data.data.totalPage;
                        this.busy = false;
                        if(data.data.list){
                            this.commentsList = this.commentsList.concat(data.data.list);
                            if(!this.commentsList[0]){
                                this.isNoData = true;
                            }
                        }
                    }).catch(e=>{
                        this.busy = true;
                        console.log(e)
                    })
                }
            }

        },
        route : {
			data(){
				this.fetchServiceDetail()
			},
			waitForData: true
		}
    }
</script>
