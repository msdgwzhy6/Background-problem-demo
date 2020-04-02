<template>
  <div class="app">
    <router-link tag="span" :to="{ name: 'roll' }" class="item">
      <a>滚动加载（无限滚动）</a>
    </router-link>
    <router-link tag="span" :to="{ name: 'fixed' }" class="item">
      <a>固定高度</a>
    </router-link>
    <router-link tag="span" :to="{ name: 'nonFixed' }" class="item">
      <a>非固定高度</a>
    </router-link>
    <router-view class="router"></router-view>
  </div>
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
  margin: auto;
  margin-top: 200px;
}
</style>
