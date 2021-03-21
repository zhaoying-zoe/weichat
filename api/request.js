// 网络请求

const { resolve } = require("path");

// https://www.ringheart.top/RingHeart/public/index.php/index/advertising

// 定义基础url
const baseUrl = 'https://www.ringheart.top/RingHeart/public/index.php';
// 定义

function request(options){
	let url = options.url;
	let method = options.method;
	let data = options.data || {};
	let Content_Type = options.method == 'POST'?'application/x-www-form-urlencoded':'application/json';
	let header = {} || options.header;
	return new Promise((resolve,reject) => {
		wx.request({
			url,
			data,
			header,
			success(res){
        resolve(res);
      },
      fail(err){
        reject(err);
      }
		})
	})
}

/*
function request(url, method, data, succ, fail, com) {
  wx.request({
    url: baseUrl + url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'source':'RingHeart',// 请求头
    },
    method: method,
    success: res => {
      if (succ) succ(res);
    },
    fail: err => {
      if (fail) fail(err);
    },
    complete: com => {
      // 打印获取到的数据
      // console.log(url + ' 返回的data:', com.data);
    }
  })
}
*/


module.exports = {
  request
};