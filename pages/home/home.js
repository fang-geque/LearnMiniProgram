// pages/home/home.js
// const app = getApp()

// const name = app.globalData.name;
// const age = app.globalData.age;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Hukeke',

    // age:18,
    // students:[
    //   { id: 110, name: 'age', age: 18 },
    //   { id: 110, name: 'height', age: 165 },
    //   { id: 110, name: 'weight', age: 110 },
    // ],
    // counter:0

  },
  handleBtnClick(){
    //1.错误的做法：界面不会刷新
    // this.data.counter+=1
    // console.log(this.data.counter)

    //2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/api/v2/recommend',
      success(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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