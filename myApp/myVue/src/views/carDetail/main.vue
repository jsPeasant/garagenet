<template>
	<section>
	<!--banner-->
		<div class="clxq-head-banner">
			<!--左上角返回按钮-->
			<div class="banner-back" @click="goback()"></div>
			  <div class="swiper-container">
			      <ul class="swiper-wrapper">
                     
			        <li class="swiper-slide banner-img" v-for="img in carousel" >
			         
							  <img :src="img['iconUrl']">
					 
			        </li>
			       
			      </ul>
			      <!-- 如果需要分页器 -->
			      <div class="swiper-pagination"></div>

     
              </div>
		  <!--图片-->
		   <!--<swipe>
		       
                <swipe-item v-for="img in carousel">
                <li class="banner-img">
				  <img :src="img['iconUrl']">
			     </li>
                </swipe-item>
               
            </swipe>-->
			
			<!--款式 参考价-->
			<div class="banner-title">
				<div class="title-style">{{title}}</div>
				<div class="title-price">
					<div class="left"><span class="word-gray">¥</span> <span class="word-big">{{price}}</span> 参考价</div>
					<div class="right">已成交：<span class="word-orange">{{sales}}</span>笔</div>
					<div class="clearf"></div>
				</div>
			</div>
		</div>
		<!--信息-->
		<div class="clxq-information">
			<!--基本信息-->
			<div class="infor-base">
				<div class="base-title">基本信息</div>
				<ul>
					<li>版本类型：{{editionname+'-'+editiontype}}</li>
					<li class={{color?'':'none'}}>可选颜色：{{color}}</li>
					<li class={{locationcity&&locationprovince?'':'none'}}>车辆所在地：{{locationprovince+'-'+locationcity}} </li>
					<li class={{salesArea?'':'none'}}>销售区域：{{salesArea}} </li>
				</ul>
			</div>
			<!--备注信息-->
			<div class={{remark!=''?'infor-box':'none'}}>
				<div class="box-title">备注信息</div>
				<div class="box-graycon">{{remark}}</div>
			</div>
			<!--配置信息-->
			<div class={{configInfo!=''?'infor-box':'none'}}>
				<div class="box-title">配置信息</div>
				<div class="box-graycon">{{configInfo}}</div>
			</div>
		</div>
		<!--专卖-->
		<div class="clxq-sellcar" @click="godealer()">
			<div class="sell-shop">{{storeName}}</div>
			<div class="sell-tel">联系电话：{{telephone}}</div>
		</div>
	  <!--
	  <div class="bottom-bubble-con">
	   
	  	<div class="bottom-bubble-div">
	  		
	  		<div class="img-div">
	  			<img class="logo-img" src="../../assets/images/bubble_logo.png">
	  		</div>
	  		
	  		<div class="text-div">
	  		 
	  			<div class="tbcell-div">
	  				<p class="nor-p">平行进口车专业服务</p>
	  				<p class="nor-p">尽在车库网客户端</p>
	  			</div>
	  		</div>
	  		
	  		<div class="btn-div">
	  			<a class="nor-btn">立即使用</a>
	  		</div>
	  	</div>
	  </div>
	  -->
		<bottom-bubble></bottom-bubble>
	</section>
</template>

<script type="text/javascript">
require('./../../assets/css/swiper.css')
import BottomBubble from '../common/BottomBubble'
//var Swiper = require('./../../assets/js/swiper.min.js')
import Swiper from './../../assets/js/swiper.min.js'
 //require('./../../assets/css/swiper.css')
	export default {
        data:function(){
        	return{
        		 title : "",//标题
        		 sales : "",//销量
        		 price : "",//价格
        		 editionname:"",//版本类型
        		 editiontype:"",//版本类型
        		 color:"",//可选颜色
        		 location:"",//车辆所在地
        		 salesArea:"",//销售区域	 
        		 remark:"",//备注
                 configInfo:"",//配置信息
        		 storeName:"",//店铺名称
        		 telephone:"",//联系电话
        		 carousel:[],// 轮播图
        		 dealercode:""


 
        	}       
        },
		components:{
			BottomBubble
		},
         ready () {
		     console.log('挂载好了')
		      var mySwiper = new Swiper('.swiper-container', {
		      
		     
			    pagination: '.swiper-pagination',
                paginationClickable: true,
                observer:true,
                observerParents:true,
                autoplay:3000
		     
		     })
                      mySwiper.init() ;
                    
		     console.log(mySwiper)
        },
        methods:{
           getCarDetail:function(){
				let url = 'carDetail'
				let params = {
                carCode:this.$route.params.id,
                userCode:""
				}
				this.$http.post(url,params).then((res)=>{
					if (res.ok) {
						return res.json()
					}
				}).then((data)=>{

                    this.title = data.data.title;
                    this.sales = data.data.sales;
                    this.price = data.data.showPrice;
                    this.editionname = data.data.editionName;
                    this.editiontype = data.data.showType;
                    this.color = data.data.color;
                    this.locationprovince = data.data.provinceName;
                    this.locationcity = data.data.provinceCity;
                    this.salesArea = data.data.territories;
                    this.remark = data.data.remark;
                    this.configInfo = data.data.detail;
                    this.storeName = data.data.companyName;
                    this.telephone = data.data.telephone;
                    this.carousel = data.data.carPictureEntityList;
                    this.dealercode = data.data.dealerCode;

					
				}).catch(e=>{console.log(e)})
			},	
			goback:function(){
               window.history.go(-1);
			},
			godealer:function(){
              this.$route.router.go({name:'lcd_my_car_source',params:{jxscode:this.dealercode}})
			}



        },
        route:{
        	data:function(){
				this.getCarDetail()
			},
			waitForData: true

        }


	}

	
</script>

