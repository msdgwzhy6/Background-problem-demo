<template>
  <main>
    <div class="app">
      <router-link tag="span" to="/roll" class="item">
        <a>无限滚动</a>
      </router-link>
      <router-link tag="span" to="/" class="item">
        <a>固定高度</a>
      </router-link>
      <router-link tag="span" to="/no" class="item">
        <a>非固定高度</a>
      </router-link>
      <router-view class="router"></router-view>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app {
  width: 800px;
  .item {
    margin: 5px 10px 5px 0;
  }
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -400px;
}
</style>
