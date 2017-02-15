<template>
  
    
	    <div class="index-header-main swiper-container">
        <ul class="swiper-wrapper">
               
            
              <li class="swiper-slide" v-for="img in advLoopList"><img :src="img['advImgUrls']" ></li>  
             
              
                 
        </ul>
        <!--搜索框-->
       <!--  <div class="header-main-topsearch">
           <img src="../../assets/images/index-head-search.png">
           <input placeholder="搜索车源信息">
       </div> -->
      </div>
 
</template>

<script type="text/javascript">
 require('./../../assets/css/swiper.css')
  
 import Swiper from './../../assets/js/swiper.min.js'
	export default {
        props : ['advLoopList'],
        
        ready (){

          var mySwiper = new Swiper('.swiper-container', {
          
         
          pagination: '.swiper-pagination',
                paginationClickable: true,
                observer:true,
                observerParents:true,
                autoplay:3000,                
         })
           mySwiper.init() ;
          
        }
	}

</script>