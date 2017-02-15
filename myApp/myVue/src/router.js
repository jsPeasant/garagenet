export default (router) => {
	
	let config = {
		'/index': {
			name: 'index',
			component: require('./views/index/Index')
		},
		'/right': {
			name: 'right',
			component: require('./views/right')
		},
		'/lcd_my_car_source/:jxscode' : {
			name : 'lcd_my_car_source',
			component : require('./views/lcd_my_car_source/lcd_my_car_source')
		},
		'/carbrandlist/:bid': {
			name: 'carbrand',
			component: require('./views/carbrand/carbrand')
		},
		 '/serviceDetail/:id': {
		 	name: 'service_detail',
		 	component: require('./views/service/ServiceDetail')
		 },
		
		'/serviceList': {
			name: 'service_list',
			component: require('./views/service/ServiceList')
		},
		'/lcd_hot_sale_car_list': {
			name: 'lcd_hot_sale_car_list',
			component: require('./views/lcd_my_car_source/lcd_hot_sale_car_list')
		},
		'/lcd_my_find_car_all/:brand_id/:model_id/:model_name': {
			name: 'lcd_my_find_car_all',
			component: require('./views/lcd_my_car_source/lcd_my_find_car_all')
		},
		'/carDetail/:id': {
			name: 'carDetail',
			component: require('./views/carDetail/main')
		},

		'*' : {
			name : 'index',
			component : require('./views/index/Index')
		}

	}
	
	router.map(config)
	
	router.redirect({
		'*': '/index'
	});
	
}