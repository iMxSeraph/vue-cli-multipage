<template>
  <div id="app">
    <p id="p0">REM响应式测试页<br>在不同手机上有相同表现<br>以下为iPhone6时，设备宽度为375px的表现</p>
    <p id="p1">1rem=100px</p>
    <p id="p2">0.5rem=50px</p>
    <p id="p3">0.1rem=10px</p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #p0 {
    font-size: .2rem
  }

  #p1 {
    font-size: 1rem
  }

  #p2 {
    font-size: .5rem
  }

  #p3 {
    font-size: .1rem
  }
</style>
