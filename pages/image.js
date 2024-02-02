
Page({
  data: {
    url: "https://wp.ximun.cc",
    picList: [],
  },
  onLoad(options) {
    let that = this;
    wx.request({
      url: "https://wp.ximun.cc/121.json", //你的接口地址
      method: 'GET', //请求方法
      data: {}, // 请求参数
      header: { // 设置请求头
        'content-type': 'application/json' // 按实际情况设置
      },
      success(res) {
        // let result = JSON.stringify(res.data);
        // console.log(result)
        // console.log(typeof (result))
        // res.data.forEach(function (item, index) {
        //   console.log(item)
        // })
        that.setData({
          picList: res.data
        })
      },
      fail(err) {
        console.error("fail: ", err)
      }
    })
  },
})
