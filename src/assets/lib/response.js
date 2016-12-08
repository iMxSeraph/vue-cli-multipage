/**
 * Rem 自适应响应式布局
 * 根据窗口宽度动态调整布局大小
 * 以375为基准的设计稿中, 1rem = 100px
 * Created by mxfang on 16/7/17.
 */
module.exports = function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // 此处因我们的视觉稿基于375宽度,因此将375作为标准,设置100px的字体大小方便计算
    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}
