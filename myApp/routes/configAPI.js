module.exports = function() {


	var CONFENV = {
		'DEV' : 'http://dev.okayapps.com/elccar/',
		'PROD': 'https://www.chekunet.com/',
		'RELEASE' : 'https://www.chekunet.com/develccar'
	};



	var reqMainUrl = CONFENV[process.env.NODE_ENV];

	//var reqMainUrl = 'https://www.chekunet.com/'	

	console.log(process.env.NODE_ENV)
	console.log(reqMainUrl)
	//var reqMainUrl = "http://10.1.1.5:8080/elccar-web-1.0/";

	return {
		"/index": reqMainUrl + "api/home/index",
		"/serviceDetail": reqMainUrl + "api/product/productDetail",
		"/serviceComment": reqMainUrl + "api/product/comment/findProductCommentByOrderType",
		"/fetchCarbrandList": reqMainUrl + "api/car/brand/findModelList",
		"/findCarAllList": reqMainUrl + "api/car/findCarAllList",
		"/findDealerCarList": reqMainUrl + "api/car/findDealerCarList",
		"/findStyleList": reqMainUrl + "api/car/brand/findStyleList",
		"/findBrandModelList": reqMainUrl + "api/car/brand/findBrandModelList",
		"/serviceList": reqMainUrl + "api/merchant/product/category/productCategory",
		"/carDetail": reqMainUrl + "api/car/findCarDetail"
	}

}()