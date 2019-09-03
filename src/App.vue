<template>
  <div class="app">
    <router-link tag="p" to="/">
      <a>固定高度</a>
    </router-link>
    <router-link tag="p" to="/no">
      <a>非固定高度</a>
    </router-link>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less">
.app {
  margin: 50px 0 0 50px;
  .router {
    margin-top: 50px;
  }
}
</style>
