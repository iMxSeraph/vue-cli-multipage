// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ResponseDemo from 'pages/ResponseDemo'

// 以下两行为动态设置REM的代码
import Response from 'assets/lib/response'
Response(document, window)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<response-demo/>',
  components: { ResponseDemo }
})
