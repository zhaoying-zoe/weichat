// compoments/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swipers:{
      type:Object
    },
  },
  /*
  * 组件生命周期
  */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // console.log('在组件实例进入页面节点树时执行');
      // console.log(this.properties.swipers);// 拿不到值
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,// 是否显示面板指示点
    vertical: true,// 滑动方向是否为纵向
    autoplay: true,// 是否自动切换
    interval: 2000,// 自动切换时间间隔
    duration: 500,// 滑动动画时长
    indicatorColor: "rgba(252,224,163,1)",// 指示点颜色
    indicatorActiveColor: "#ffffff",// 选中指示点的颜色
    circular: true,// 是否采用衔接滑动
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
