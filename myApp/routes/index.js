var express = require('express');
var router = express.Router();
var request = require('../lib/nodegrass.js');
var commonRequest = require('./commonRequest.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

commonRequest(router, {
	"url": "/index",
	"method": 'post',
	'request': request,
});


commonRequest(router, {
	"url": "/fetchCarbrandList",
	"method": 'post',
	'request': request,
});

commonRequest(router, {
	"url": "/serviceDetail",
	"method": 'post',
	'request': request,
});
commonRequest(router, {
	"url": "/serviceComment",
	"method": 'post',
	'request': request,
});

commonRequest(router, {
	"url": "/findCarAllList",
	"method": 'post',
	'request': request,
});

commonRequest(router, {
	"url": "/findDealerCarList",
	"method": 'post',
	'request': request,
});

commonRequest(router, {
	"url": "/findStyleList",
	"method": 'post',
	'request': request,
});

commonRequest(router, {
	"url": "/findBrandModelList",
	"method": 'post',
	'request': request,
});
commonRequest(router,{
	"url" : "/serviceList",
	"method" : 'post',
	'request' : request,
});

commonRequest(router, {
	"url": "/carDetail",
	"method": 'post',
	'request': request,
});

// commonRequest(router,{
// 	"url" : "/flightListSearch",
// 	"method" : 'post',
// 	'request' : request,
// 	'reqUrl' : 'http://123.56.146.81:8531/jdweb/intelFlight/getWebOrderList'
// })

// router.post("/flightListSearch", function(req, res, next) {
// 	var url = "http://123.56.146.81:8531/jdweb/intelFlight/getWebOrderList";
// 	//methodOnParam.append(req.body);
// 	console.log(req.body);
// 	var callback = function(content, status, headers) {
// 		res.writeHead(status, headers);
// 		res.write(content);
// 		res.end();
// 	}
// 	request.post(url, callback, req.headers, req.body);
// })

module.exports = router;