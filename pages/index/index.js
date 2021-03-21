// pages/index/index.js
const util = require("../../api/index");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swipers:[],// 轮播图片
    indicatorDots: true,// 是否显示面板指示点
    vertical: true,// 滑动方向是否为纵向	
    autoplay: true,// 是否自动切换	
    interval: 2000,// 自动切换时间间隔	
    duration: 500,// 滑动动画时长	
    indicatorColor: "rgba(252,224,163,1)",// 指示点颜色
    indicatorActiveColor: "#ffffff",// 选中指示点的颜色
    circular: true,// 是否采用衔接滑动	
    leftRight:[
      {
        index:0,
        title:'进店消费',
        desc:'自助点餐 限时优惠',
        src:'../../static/lrIcon/food.png',
        tip:'会员折扣',
      },
      {
        index:1,
        title: '自助借阅',
        desc: '图书借阅 图书归还',
        src: '../../static/lrIcon/food.png',
        tip: '一键借书', 
      }
    ],
    iconCategoyies:[
      {
        src: '../../static/icon/nav1.png',
        text: '课程',
      },
      {
        src: '../../static/icon/nav2.png',
        text: '读书',
      },
      {
        src: '../../static/icon/nav3.png',
        text: '视频',
      },
      {
        src: '../../static/icon/nav4.png',
        text: '会员',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    util.getRequest({
      url:'/index/advertising',
      data:{
        limit: 3,
      },
      method:'GET',
    })
    .then((res) => {
      let swipers = res.data.data;
      this.setData({
        swipers
      })
    })
    .catch((error) => {
      console.log(error);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})