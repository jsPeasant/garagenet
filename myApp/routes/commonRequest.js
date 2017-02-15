var configAPI = require('./configAPI');
var debug = require('debug');


module.exports = function(router, config) {
	
	config["method"] = config['method'] || 'post'


	console.log('url',config['url'])

	router[config['method']](config['url'], function(req, res, next){

		console.log('LOG')
		try {
			config["reqUrl"] = configAPI[config['url']]
		 }catch(e){
		 	console.log('\r\n'+e+'\r\n'+e.stack)
		 	try {
		      res.end(e.stack);
		    } catch(e) { }
		 }

		 console.log('req.body.content',req.body.content)
		 req.body.content = req.body.content ? req.body.content[' appCode'] = '30008' : {'appCode':'30008'}
		
		 console.log('req.url', config["reqUrl"])
		var callback = function(content,status,headers) {
			
			res.send(content)
		}


		if (config['reqUrl'].indexOf('.html')>-1) {

			config['request'].getString(config['reqUrl'], callback);

		}
		else {

			if (config['reqMethod']&&config['reqMethod'] === "post") {
				config['request'].post(config['reqUrl'],callback,req.headers,req.body)
			}
			else{
				config['reqUrl'] = configAPI[config['url']] + "?content=" +JSON.stringify(req.body.content) +"&sign=as";
				console.log(config['reqUrl'])
				config['request'].get(config['reqUrl'],callback)
			}
		}	


	})

}