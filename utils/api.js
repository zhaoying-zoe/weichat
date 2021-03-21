const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';

const baseURL = 'https://www.ringheart.top/RingHeart/public/index.php/index';

function request(method, url, data) {
  return new Promise(function (resolve, reject) {
    let header = {
      'content-type': 'application/json',
    };
    wx.request({
      url: baseURL + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header: header,
      success(res) {
        //请求成功
        //判断状态码---errCode状态根据后端定义来判断
        if (res.data.errCode == 0) {
          resolve(res);
        } else {
          //其他异常
          reject('运行时错误,请稍后再试');
        }
      },
      fail(err) {
        //请求失败
        reject(err)
      }
    })
  })
}

// /advertising?limit=3


const API = {
  getSwiper: (data) => request(GET, `/advertising`),
};
module.exports = {
  API: API
}