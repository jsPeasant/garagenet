<template>
  <div class="wrap">
    <header>
      <a class="back-btn" href=""></a>
      <h2>服务</h2>
    </header>
    <section class="main-section">
      <!--内容-->
      <div class="fuwu-index">
        <service-list v-bind:serverlist="serverlist"></service-list>
      </div>
      <footer-index :footer-num="footerNum"></footer-index>
    </section>
  </div>
</template>

<script type="text/javascript">
  import serviceList from './ServiceListItem'
  import FooterIndex from '../index/FooterIndex'
  export default {
    data(){
      return {
        serverlist:'',
        footerNum:1
      }
    },
    components : {
      serviceList,
      FooterIndex
    },
    methods : {
      serviceList() {
        let url = 'serviceList'
        let params = {
        }
        this.$http.post(url,params).then((res)=>{
          if (res.ok) {
            console.log(res);
            return res.json()
          }
        }).then((data)=>{
                    this.serverlist = data.data;
                }).catch(e=>{console.log(e)})
      }
    },

    route : {
      data(){
        this.serviceList()
      },
      waitForData: true
    }
  }
</script>
