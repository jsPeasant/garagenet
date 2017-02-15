import vue from 'vue'

const _post = (url, params) => {
	// try {
	// 	JSON.parse(params["body"]);
	// 	if (!params["headers"]||!params["headers"]["content-type"]) {
	// 		params["headers"]["content-type"] = "application/json"
	// 	}
	// }catch(e) {

	// }
	
  return vue.http.post(url, params)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      return Promise.reject(new Error(res.status));
    });
};

var makeAction =(type) =>{
  return ({ dispatch }, ...args) => dispatch(type, ...args);
};



const initData = {
  num : 0,
  title : "我的预定",
  li : [{name : "我的订单"},{name:"国际机票订单"}]
};

export const initStore = ({ dispatch }) => {
  dispatch('INIT_STORE', initData);
};

export const newLi = makeAction('NEW_LI');

export const changeNum = makeAction('CHANGE_NUM');

export const changeTitle = makeAction('CHANGE_TITLE');

export const fetchData = ({ dispatch }, url, params) => {
	alert(url)
	_post(url, params).then((data)=>{dispatch("FETCHINGDATA_SUCCESS",data)})
};

