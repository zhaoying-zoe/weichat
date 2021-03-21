// 网络请求
// const { resolve } = require("path");
// https://www.ringheart.top/RingHeart/public/index.php/index/advertising

// 定义基础url
const baseUrl = 'https://www.ringheart.top/RingHeart/public/index.php';
// 定义
function getRequest(options){
	let url = baseUrl + options.url;
	let method = options.method;
	let data = options.data || {};
  let header = {
    'content-type': 'application/x-www-form-urlencoded',
    'source':'RingHeart',// 请求头
  };
	return new Promise((resolve,reject) => {
		wx.request({
			url,
      method,
      data,
      header,
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      }
		})
	})
}

module.exports = {
  getRequest
};