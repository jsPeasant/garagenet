import Vue from 'vue'
import App from './App.vue'
// import Left from './views/left.vue'
// import Right from './views/right.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

import routerConfig from './router'
import FastClick from 'fastclick';


window.addEventListener('load', () => {
  FastClick.attach(document.body);
});


//register globally
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  hashbang: false
  // history: true, //html5模式 去掉锚点
  //   saveScrollPosition: true //记住页面的滚动位置 html5模式适用
});

routerConfig(router)

router.start(Vue.extend(App), '#app');



